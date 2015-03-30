package com.hydom.task.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Job;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;

@Service
public class TaskRecordServiceBean extends DAOSupport<TaskRecord> implements
		TaskRecordService {
	@Resource
	private AccountService accountService;
	@Resource
	private TaskService taskService;
	@Resource
	private JobService jobService;

	@Override
	public TaskRecord fetchTaskRecord(long accountId) {
		try {
			Task task = (Task) em
					.createQuery(
							"select t from Task t where t.matchedNum<t.matchNum and t.canNum>0 and t.id not in (select r.task.id from TaskRecord r where r.account.id=?1) order by t.id asc")
					.setParameter(1, accountId).setMaxResults(1).getSingleResult();
			TaskRecord taskRecord = new TaskRecord();
			Date currentTime = new Date();
			Account account = accountService.find(accountId);
			taskRecord.setAccount(account);
			taskRecord.setTask(task);
			taskRecord.setMatchTime(currentTime);
			this.save(taskRecord);
			account.setState(1);// 设置用户状态为1，表示在识别中
			accountService.update(account);
			task.setMatchedNum(task.getMatchedNum() + 1);// 对已分配人数+1
			task.setCanNum(task.getCanNum() - 1);// 对可分配人数-1
			Job job = task.getJob();
			if (task.getMatchFirstTime() == null) {
				task.setMatchFirstTime(currentTime);// 设置第一个用户的分配时间
				if (job.getMatchFirstTime() == null) {
					job.setMatchFirstTime(currentTime);// 设置第一个区块第一个用户的分配时间
				}
			} else {
				task.setMatchLastTime(currentTime);// 设置下一个【直到最后一个】用户的分配时间
				job.setMatchLastTime(currentTime);// 设置最后一个区块最后一个用户的分配时间
			}
			jobService.update(job);
			taskService.update(task);
			return taskRecord;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public int processTaskRecord(long tid, String result_str) {
		int result = 1;
		Date postTime = new Date();
		TaskRecord entity = this.find(tid);
		Task task = entity.getTask();
		entity.setResult(result_str);
		entity.setPostTime(postTime);
		boolean overtime = entity.getPostTime().getTime()
				- entity.getMatchTime().getTime() > entity.getTask().getRecycleTime();
		System.out.println(overtime);
		if (overtime) {// 超时
			entity.setIdentState(0);// 设置状态为：超时
			result = 8;
			this.update(entity);
			task.setCanNum(task.getCanNum() + 1);// 设置再次分配的人数
			taskService.update(task);
			return result;
		}
		entity.setIdentState(1);
		int postCount = 0;// 查出本区块所有提交数
		if (postCount >= task.getPostNum()) {// 实际提交数达到指定的提交数
			Object[] countResult = this.countResult(task.getId());
			int samePerson = (Integer) countResult[1];// 计算出相同答案的人数
			double currentPercent = (double) (samePerson / task.getMatchedNum());// 当前比例
			if (currentPercent >= task.getAccuracy()) {// 达到正确比例
				task.setResult((String) countResult[0]);// 设置结果
				task.setRation(currentPercent);// 设置：计算实际比例
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// 对任务区块完成数+1
				taskService.update(task);
				jobService.update(job);
			}
			if (task.getMatchedNum() >= task.getMatchNum()) {// 已分配人数达到分配上限
				task.setResult((String) countResult[0]);// 设置结果：当前结果
				task.setRation(currentPercent);// 设置：计算实际比例
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// 对任务区块完成数+1
				taskService.update(task);
				jobService.update(job);

			}
			/* 未达到指定比例并且已分配人数未达到分配上限：计算可再次进行分配的人数 */
			long moreNum = Math
					.round((task.getAccuracy() * task.getMatchedNum() + samePerson)
							/ (task.getAccuracy() + 1));
			int canNum = (int) moreNum;
			if ((moreNum + task.getMatchedNum()) > task.getMatchNum()) {// （再次分配人数+已分配人数）没有达到分配上限
				canNum = task.getMatchNum() - task.getMatchedNum();
			}
			task.setCanNum(canNum);// 设置再次分配的人数
			task.setPostNum(task.getPostNum() + canNum);// 设置提交总数应达到的值
			task.setResultNum(task.getResultNum() + 1);// 对返回了识别结果的人数+1
			taskService.update(task);

		} else {
			task.setResultNum(task.getResultNum() + 1);// 对返回了识别结果的人数+1
			taskService.update(task);
		}
		/*		 */
		return result;
	}

	/**
	 * 计算出相同结果最多的结果内容及人数
	 * 
	 * @param tid
	 * @return：数组{result内容,人数
	 */
	private Object[] countResult(long tid) {
		Object obj = em
				.createQuery(
						"select t.result,count(t.id) from TaskRecord t where t.task.id=?1 and t.identState=?2 group by result having(count(t.id)>=1) order by count(t.id) desc")
				.setParameter(1, tid).setParameter(2, 1).getSingleResult();
		return (Object[]) obj;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listTaskRecord(long accountId, int sign) {
		return em.createQuery(
				"select t from TaskRecord t where t.account.id=?1 and t.sign=?2")
				.setParameter(1, accountId).setParameter(2, sign).getResultList();
	}
}
