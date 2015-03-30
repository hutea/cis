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
			account.setState(1);// �����û�״̬Ϊ1����ʾ��ʶ����
			accountService.update(account);
			task.setMatchedNum(task.getMatchedNum() + 1);// ���ѷ�������+1
			task.setCanNum(task.getCanNum() - 1);// �Կɷ�������-1
			Job job = task.getJob();
			if (task.getMatchFirstTime() == null) {
				task.setMatchFirstTime(currentTime);// ���õ�һ���û��ķ���ʱ��
				if (job.getMatchFirstTime() == null) {
					job.setMatchFirstTime(currentTime);// ���õ�һ�������һ���û��ķ���ʱ��
				}
			} else {
				task.setMatchLastTime(currentTime);// ������һ����ֱ�����һ�����û��ķ���ʱ��
				job.setMatchLastTime(currentTime);// �������һ���������һ���û��ķ���ʱ��
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
		if (overtime) {// ��ʱ
			entity.setIdentState(0);// ����״̬Ϊ����ʱ
			result = 8;
			this.update(entity);
			task.setCanNum(task.getCanNum() + 1);// �����ٴη��������
			taskService.update(task);
			return result;
		}
		entity.setIdentState(1);
		int postCount = 0;// ��������������ύ��
		if (postCount >= task.getPostNum()) {// ʵ���ύ���ﵽָ�����ύ��
			Object[] countResult = this.countResult(task.getId());
			int samePerson = (Integer) countResult[1];// �������ͬ�𰸵�����
			double currentPercent = (double) (samePerson / task.getMatchedNum());// ��ǰ����
			if (currentPercent >= task.getAccuracy()) {// �ﵽ��ȷ����
				task.setResult((String) countResult[0]);// ���ý��
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				taskService.update(task);
				jobService.update(job);
			}
			if (task.getMatchedNum() >= task.getMatchNum()) {// �ѷ��������ﵽ��������
				task.setResult((String) countResult[0]);// ���ý������ǰ���
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				taskService.update(task);
				jobService.update(job);

			}
			/* δ�ﵽָ�����������ѷ�������δ�ﵽ�������ޣ�������ٴν��з�������� */
			long moreNum = Math
					.round((task.getAccuracy() * task.getMatchedNum() + samePerson)
							/ (task.getAccuracy() + 1));
			int canNum = (int) moreNum;
			if ((moreNum + task.getMatchedNum()) > task.getMatchNum()) {// ���ٴη�������+�ѷ���������û�дﵽ��������
				canNum = task.getMatchNum() - task.getMatchedNum();
			}
			task.setCanNum(canNum);// �����ٴη��������
			task.setPostNum(task.getPostNum() + canNum);// �����ύ����Ӧ�ﵽ��ֵ
			task.setResultNum(task.getResultNum() + 1);// �Է�����ʶ����������+1
			taskService.update(task);

		} else {
			task.setResultNum(task.getResultNum() + 1);// �Է�����ʶ����������+1
			taskService.update(task);
		}
		/*		 */
		return result;
	}

	/**
	 * �������ͬ������Ľ�����ݼ�����
	 * 
	 * @param tid
	 * @return������{result����,����
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
