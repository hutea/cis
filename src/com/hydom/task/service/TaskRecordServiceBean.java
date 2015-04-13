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
					.getRecycleTime()));// ������Чʱ��
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
		if (overtime) {// ��ʱ
			entity.setIdentState(0);// ����״̬Ϊ����ʱ
			result = 8;
			this.update(entity);
			task.setCanNum(task.getCanNum() + 1);// �����ٴη��������
			task.setMatchedNum(task.getMatchedNum() - 1);// ���ѷ�������-1
			taskService.update(task);
			return result;
		}
		entity.setIdentState(1);
		int postCount = this.countPostNum(task.getId());// ��������������ύ��
		if (postCount >= task.getPostNum()) {// ʵ���ύ���ﵽָ�����ύ��
			Object[] countResult = this.countResult(task.getId());
			int samePerson = ((Long) countResult[1]).intValue();// �������ͬ�𰸵�����
			double currentPercent = (double) (samePerson / task.getMatchedNum());// ��ǰ����
			if (currentPercent >= task.getAccuracy()) {// �ﵽ��ȷ����
				System.out.println("---->�ﵽ��ȷ����");
				task.setResult((String) countResult[0]);// ���ý��
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				task.setFinishTime(new Date());// �������ʱ��
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), (String) countResult[0]);
				jobService.postJob(job.getId());// ��������
			}
			if (task.getMatchedNum() >= task.getMatchNum()) {// �ѷ��������ﵽ��������
				System.out.println("---->�ѷ��������ﵽ��������");
				task.setResult((String) countResult[0]);// ���ý������ǰ���
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				task.setFinishTime(new Date());// �������ʱ��
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), null);
				jobService.postJob(job.getId());// ��������
			}
			/* δ�ﵽָ�����������ѷ�������δ�ﵽ�������ޣ�������ٴν��з�������� */
			long moreNum = Math
					.round((task.getAccuracy() * task.getMatchedNum() + samePerson)
							/ (task.getAccuracy() + 1));
			int canNum = (int) moreNum;
			if ((moreNum + task.getMatchedNum()) > task.getMatchNum()) {// ���ٴη�������+�ѷ���������>��������
				canNum = task.getMatchNum() - task.getMatchedNum();
			}
			System.out.println("canNum=" + canNum + " postNum=" + task.getPostNum());
			task.setCanNum(canNum);// �����ٴη��������
			task.setPostNum(task.getPostNum() + canNum);// �����ύ����Ӧ�ﵽ��ֵ
			task.setResultNum(task.getResultNum() + 1);// �Է�����ʶ����������+1
			taskService.update(task);
		} else {
			System.out.println("---->ʵ���ύ��δ�ﵽָ�����ύ��");
			task.setResultNum(task.getResultNum() + 1);// �Է�����ʶ����������+1
			taskService.update(task);
		}
		return result;
	}

	/**
	 * �����ĳ���飨task�������ύ��
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
		if (result != null && !"".equals(result)) {// ����ȷ�ļ�����
			System.out.println("����ÿ���û������ʶ:" + result);
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
	 * �������ͬ������Ľ�����ݼ�����
	 * 
	 * @param tid
	 *            ��task Id
	 * @return������{��ͬ���������,��ͬ�����������
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
