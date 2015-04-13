package com.hydom.task.service;

import java.text.DecimalFormat;
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
import com.hydom.util.HelperUtil;

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
			taskRecord.setEffectiveTime(HelperUtil.addms(currentTime, task
					.getRecycleTime()));// 设置有效时间
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
			// e.printStackTrace();
			return null;
		}
	}

	@Override
	public int processTaskRecord(long tid, String result_str) {
		int result = 1;
		Date postTime = new Date();
		TaskRecord entity = this.find(tid);
		Task task = entity.getTask();
		entity.setResult(result_str);
		entity.setPostTime(postTime);
		boolean overtime = entity.getPostTime().getTime()
				- entity.getMatchTime().getTime() > entity.getTask().getRecycleTime();
		if (overtime) {// 超时
			entity.setIdentState(0);// 设置状态为：超时
			result = 8;
			this.update(entity);
			task.setCanNum(task.getCanNum() + 1);// 设置再次分配的人数
			task.setMatchedNum(task.getMatchedNum() - 1);// 对已分配人数-1
			taskService.update(task);
			return result;
		}
		entity.setIdentState(1);
		int postCount = this.countPostNum(task.getId());// 查出本区块所有提交数
		if (postCount >= task.getPostNum()) {// 实际提交数达到指定的提交数
			Object[] countResult = this.countResult(task.getId());
			int samePerson = ((Long) countResult[1]).intValue();// 计算出相同答案的人数
			double currentPercent = (double) (samePerson / task.getMatchedNum());// 当前比例
			if (currentPercent >= task.getAccuracy()) {// 达到正确比例
				System.out.println("---->达到正确比例");
				task.setResult((String) countResult[0]);// 设置结果
				task.setRation(currentPercent);// 设置：计算实际比例
				task.setFinishTime(new Date());// 设置完成时间
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// 对任务区块完成数+1
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), (String) countResult[0]);
				jobService.postJob(job.getId());// 反馈工单
			}
			if (task.getMatchedNum() >= task.getMatchNum()) {// 已分配人数达到分配上限
				System.out.println("---->已分配人数达到分配上限");
				task.setResult((String) countResult[0]);// 设置结果：当前结果
				task.setRation(currentPercent);// 设置：计算实际比例
				task.setFinishTime(new Date());// 设置完成时间
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// 对任务区块完成数+1
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), null);
				jobService.postJob(job.getId());// 反馈工单
			}
			/* 未达到指定比例并且已分配人数未达到分配上限：计算可再次进行分配的人数 */
			long moreNum = Math
					.round((task.getAccuracy() * task.getMatchedNum() + samePerson)
							/ (task.getAccuracy() + 1));
			int canNum = (int) moreNum;
			if ((moreNum + task.getMatchedNum()) > task.getMatchNum()) {// （再次分配人数+已分配人数）>分配上限
				canNum = task.getMatchNum() - task.getMatchedNum();
			}
			System.out.println("canNum=" + canNum + " postNum=" + task.getPostNum());
			task.setCanNum(canNum);// 设置再次分配的人数
			task.setPostNum(task.getPostNum() + canNum);// 设置提交总数应达到的值
			task.setResultNum(task.getResultNum() + 1);// 对返回了识别结果的人数+1
			taskService.update(task);
		} else {
			System.out.println("---->实际提交数未达到指定的提交数");
			task.setResultNum(task.getResultNum() + 1);// 对返回了识别结果的人数+1
			taskService.update(task);
		}
		return result;
	}

	/**
	 * 计算出某区块（task）所有提交数
	 * 
	 * @param tid
	 *            :task Id
	 * @return
	 */
	private int countPostNum(long tid) {
		Long count = (Long) em
				.createQuery(
						"select count(t.id) from TaskRecord t where t.task.id=?1 and t.identState=?2 and t.postTime is not null")
				.setParameter(1, tid).setParameter(2, 1).getSingleResult();
		return count.intValue();
	}

	private void update_TaskRecordSign(long taskid, String result) {
		em.createQuery("update TaskRecord o SET o.sign=0 where o.task.id=?")
				.setParameter(1, taskid).executeUpdate();
		if (result != null && !"".equals(result)) {// 有正确的计算结果
			System.out.println("设置每个用户结果标识:" + result);
			em
					.createQuery(
							"update TaskRecord o SET o.sign=?1 where o.result=?2 and o.task.id=?3")
					.setParameter(1, 1).setParameter(2, result).setParameter(3, taskid)
					.executeUpdate();
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listTaskRecord(long accountId, int sign) {
		return em.createQuery(
				"select t from TaskRecord t where t.account.id=?1 and t.sign=?2")
				.setParameter(1, accountId).setParameter(2, sign).getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listOverTimeRecord() {
		Date now = new Date();
		return em
				.createQuery(
						"select t from TaskRecord t where t.effectiveTime<=?1 and t.identState!=0")
				.setParameter(1, now).getResultList();
	}

	/**
	 * 计算出相同结果最多的结果内容及人数
	 * 
	 * @param tid
	 *            ：task Id
	 * @return：数组{相同结果的内容,相同结果的人数｝
	 */
	private Object[] countResult(long tid) {
		Object obj = em
				.createQuery(
						"select t.result,count(t.id) from TaskRecord t where t.task.id=?1 and t.identState=?2 group by result having(count(t.id)>=1) order by count(t.id) desc")
				.setParameter(1, tid).setParameter(2, 1).setMaxResults(1)
				.getSingleResult();
		return (Object[]) obj;
	}

	@Override
	public long count(long accid) {
		return (Long) em
				.createQuery(
						"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2")
				.setParameter(1, accid).setParameter(2, 1).getSingleResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public double countProcessTime(long accid) {
		List<Double> seconds = em
				.createQuery(
						"select t.postTime-t.matchTime from TaskRecord t where t.account.id=?1 and t.identState=?2")
				.setParameter(1, accid).setParameter(2, 1).getResultList();
		double allTime = 0;
		for (Double s : seconds) {
			if (s != null) {
				allTime = allTime + s;
			}
		}
		long count = count(accid);
		if (count != 0) {
			return Math.round(allTime / count);
		} else {
			return 0;
		}
	}

	@Override
	public double countRightPercent(long accid) {
		long countRight = (Long) em
				.createQuery(
						"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2 and t.sign=?3")
				.setParameter(1, accid).setParameter(2, 1).setParameter(3, 1)
				.getSingleResult();
		long count = count(accid);
		if (count != 0) {
			DecimalFormat df = new DecimalFormat(".0000");
			String result = df.format((double) countRight / count);
			return Double.parseDouble(result);
		} else {
			return 0;
		}
	}

	@Override
	public long countThisMonth(long accid) {
		Date now = new Date();
		Date endDate = HelperUtil.addDays(now, 1);
		Date startDate = HelperUtil.dayLastMoth(now);
		return (Long) em
				.createQuery(
						"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4")
				.setParameter(1, accid).setParameter(2, 1).setParameter(3, startDate)
				.setParameter(4, endDate).getSingleResult();
	}
}
