package com.hydom.task.service;

import java.math.BigInteger;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.credit.service.ScoreRecordService;
import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Job;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;
import com.hydom.util.HelperUtil;

@Service
public class TaskRecordServiceBean extends DAOSupport<TaskRecord> implements TaskRecordService {
	@Resource
	private AccountService accountService;
	@Resource
	private TaskService taskService;
	@Resource
	private JobService jobService;
	@Resource
	private ScoreRecordService scoreRecordService;

	private Log log = LogFactory.getLog("testLog");

	@Override
	public TaskRecord fetchTaskRecord(long accountId) {
		/**
		 * ��step1���鿴�û��Ƿ���δ�ύ����δ��ʱ�������������ֱ�ӽ���������з��� <br>
		 * �����������û��˳������ٽ���ʱ�Կ��Լ�����ǰһ������
		 */
		try {
			Date now = HelperUtil.addms(new Date(), 60000);// ��ʱʱ����뵱ǰʱ������Ҫ����1����
			return (TaskRecord) em
					.createQuery(
							"select o from TaskRecord o where o.account.id=?1 and o.effectiveTime>=?2 and o.postTime is null")
					.setParameter(1, accountId).setParameter(2, now).setMaxResults(1)
					.getSingleResult();
		} catch (Exception e) {
			// e.printStackTrace();
		}

		/** ��step2�������ķ������� **/
		try {
			Task task = (Task) em
					.createQuery(
							"select t from Task t where t.matchedNum<t.matchNum and t.canNum>0 and t.recycleType=0 and t.id not in (select r.task.id from TaskRecord r where r.account.id=?1) order by t.id asc")
					.setParameter(1, accountId).setMaxResults(1).getSingleResult();
			TaskRecord taskRecord = new TaskRecord();
			Date currentTime = new Date();
			Account account = accountService.find(accountId);
			taskRecord.setAccount(account);
			taskRecord.setTask(task);
			taskRecord.setMatchTime(currentTime);
			taskRecord.setEffectiveTime(HelperUtil.addms(currentTime, task.getRecycleTime()));// ������Чʱ��
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
		boolean overtime = entity.getPostTime().getTime() - entity.getMatchTime().getTime() > entity
				.getTask().getRecycleTime();
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
			double samePerson = ((Long) countResult[1]).doubleValue();// �������ͬ�𰸵�����:ת��double�ͣ���ֹ(3/5=0)���
			double currentPercent = (samePerson / task.getMatchedNum());// ��ǰ����
			if (currentPercent >= task.getAccuracy()) {// �ﵽ��ȷ����
				log.info("---->�ﵽ��ȷ����");
				Date now = new Date();
				task.setResult((String) countResult[0]);// ���ý��
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				task.setFinishTime(now);// �������ʱ��
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				if (job.getTaskFinishCount().intValue() == job.getTaskCount().intValue()) {
					job.setFinishTime(now);
				}
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), (String) countResult[0]);
				jobService.postJob(job.getId());// ��������
			} else if (task.getMatchedNum() >= task.getMatchNum()) {// �ѷ��������ﵽ��������
				log.info("---->�ѷ��������ﵽ��������");
				Date now = new Date();
				task.setResult((String) countResult[0]);// ���ý������ǰ���
				task.setRation(currentPercent);// ���ã�����ʵ�ʱ���
				task.setFinishTime(now);// �������ʱ��
				Job job = task.getJob();
				job.setTaskFinishCount(job.getTaskFinishCount() + 1);// ���������������+1
				if (job.getTaskFinishCount().intValue() == job.getTaskCount().intValue()) {
					job.setFinishTime(now);
				}
				taskService.update(task);
				jobService.update(job);
				update_TaskRecordSign(task.getId(), null);
				jobService.postJob(job.getId());// ��������
			} else {/* δ�ﵽָ�����������ѷ�������δ�ﵽ�������ޣ�������ٴν��з�������� */
				long moreNum = Math.round((task.getAccuracy() * task.getMatchedNum() + samePerson)
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
			}
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

	/**
	 * �����û�taskrecord��ʶ����״̬�����������
	 * 
	 * @param taskid
	 * @param result
	 */
	@SuppressWarnings("unchecked")
	private void update_TaskRecordSign(long taskid, String result) {
		Task task = taskService.find(taskid);
		em.createQuery("update TaskRecord o SET o.sign=0 where o.task.id=?")
				.setParameter(1, taskid).executeUpdate();
		if (result != null && !"".equals(result)) {// ����ȷ�ļ�����
			em
					.createQuery(
							"update TaskRecord o SET o.sign=?1 , o.score=?2 where o.result=?3  and o.task.id=?4")
					.setParameter(1, 1).setParameter(2, task.getScore()).setParameter(3, result)
					.setParameter(4, taskid).executeUpdate();
			/** ���������� **/
			List<TaskRecord> taskRecords = em.createQuery(
					"select o from TaskRecord o where o.task.id=?1 and o.sign=?2").setParameter(1,
					taskid).setParameter(2, 1).getResultList();
			Date now = new Date();
			for (TaskRecord tr : taskRecords) {
				Account account = tr.getAccount();
				ScoreRecord scoreRecord = new ScoreRecord();
				scoreRecord.setAccount(account);
				scoreRecord.setSign(true);
				scoreRecord.setCreateTime(now);
				scoreRecord.setDetail("��������û���");
				scoreRecord.setTaskRecord(tr);
				scoreRecord.setScore(tr.getTask().getScore());
				account.setScore(account.getScore() + scoreRecord.getScore());
				accountService.update(account);
				scoreRecordService.save(scoreRecord);
			}
			/** ���������� **/
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listTaskRecord(long accountId, int sign) {
		return em.createQuery("select t from TaskRecord t where t.account.id=?1 and t.sign=?2")
				.setParameter(1, accountId).setParameter(2, sign).getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listOverTimeRecord() {
		Date now = new Date();
		return em.createQuery(
				"select t from TaskRecord t where t.effectiveTime<=?1 and t.identState is null")
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
				.setParameter(1, tid).setParameter(2, 1).setMaxResults(1).getSingleResult();
		return (Object[]) obj;
	}

	@Override
	public long count(long accid) {
		return (Long) em.createQuery(
				"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2")
				.setParameter(1, accid).setParameter(2, 1).getSingleResult();
	}

	@Override
	public double countProcessTime(long accid) {
		try {
			double allTime = (Double) em
					.createQuery(
							"select sum(t.postTime-t.matchTime) from TaskRecord t where t.account.id=?1 and t.identState=?2")
					.setParameter(1, accid).setParameter(2, 1).getSingleResult();
			long count = count(accid);
			if (count != 0) {
				return Math.round(allTime / count);
			} else {
				return 0;
			}
		} catch (Exception e) {
			return 0;
		}
	}

	@Override
	public double countRightPercent(long accid) {
		long count = count(accid);
		if (count != 0) {
			long countRight = (Long) em
					.createQuery(
							"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2 and t.sign=?3")
					.setParameter(1, accid).setParameter(2, 1).setParameter(3, 1).getSingleResult();
			DecimalFormat df = new DecimalFormat(".00");
			String result = df.format((double) countRight * 100 / count);
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
				.setParameter(1, accid).setParameter(2, 1).setParameter(3, startDate).setParameter(
						4, endDate).getSingleResult();
	}

	@Override
	public long calcMonth(long uid, int sign) {
		Date startDate = HelperUtil.firstDayThisMonth();
		Date endDate = HelperUtil.lastDayThisMonth();
		return calc(uid, sign, startDate, endDate);
	}

	@Override
	public long calcMonthPercent(long uid) {
		Date startDate = HelperUtil.firstDayThisMonth();
		Date endDate = HelperUtil.lastDayThisMonth();
		long rightNum = calc(uid, 1, startDate, endDate);
		long allNum = calc(uid, -1, startDate, endDate);
		return Math.round(((double) rightNum / allNum) * 100);
	}

	@Override
	public long calcToday(long uid, int sign) {
		try {
			Date now = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String todayStr = sdf.format(now);
			Date startDate = sdf.parse(todayStr);
			Date endDate = HelperUtil.addDays(startDate, 1);
			return calc(uid, sign, startDate, endDate);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public long calcTodayExceedPercent(long uid) {
		try {
			Date now = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String todayStr = sdf.format(now);
			Date startDate = sdf.parse(todayStr);
			Date endDate = HelperUtil.addDays(startDate, 1);
			// �����û�����
			long userNum = (Long) em.createQuery(
					"select count(o.id) from Account o where o.type=?1 and o.visible=?2")
					.setParameter(1, 1).setParameter(2, true).getSingleResult();
			// ���㵱ǰ�û�����ʶ��ɹ���<>
			long identNum = this.calc(uid, 1, startDate, endDate);
			// ����С�ڵ�ǰ�û�����ʶ��ɹ��� ���û���

			/**
			 * ��ѯSQLԭ�ͣ� select count(uid) from (select count(id) as num, t.account_id as uid from t_taskrecord as t where t.sign=1
			 * GROUP BY t.account_id ) as ct where (ct.num>1)
			 */
			BigInteger numLessIdent = (BigInteger) em
					.createNativeQuery(
							"select count(uid) from "
									+ "(select count(id) as num, t.account_id as uid from t_TaskRecord as t where t.sign=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4  GROUP BY t.account_id ) as ct "
									+ "where (ct.num<?5)").setParameter(1, 1).setParameter(2, 1)
					.setParameter(3, startDate).setParameter(4, endDate).setParameter(5, identNum)
					.getSingleResult();
			return Math.round((numLessIdent.doubleValue() / userNum) * 100);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public long calcTodayScoreExceedPercent(long uid) {
		try {
			Date now = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String todayStr = sdf.format(now);
			Date startDate = sdf.parse(todayStr);
			Date endDate = HelperUtil.addDays(startDate, 1);
			// �����û�����
			long userNum = (Long) em.createQuery(
					"select count(o.id) from Account o where o.type=?1 and o.visible=?2")
					.setParameter(1, 1).setParameter(2, true).getSingleResult();
			// ���㵱ǰ�û�����ʶ�����û���<>
			double identScore = calcScore(uid, startDate, endDate);

			// ����С�ڵ�ǰ�û�����ʶ��÷� ���û���
			/**
			 * ��ѯSQLԭ�ͣ� select count(uid) from (select SUM(score) as score, t.account_id as uid from t_taskrecord as t where
			 * t.sign=1 GROUP BY t.account_id ) as ct where (ct.score>1)
			 */
			BigInteger scoreLessIdent = (BigInteger) em
					.createNativeQuery(
							"select count(uid) from "
									+ "(select sum(score) as score, t.account_id as uid from TaskRecord as t where t.sign=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4  GROUP BY t.account_id ) as ct "
									+ "where (ct.score<?5)").setParameter(1, 1).setParameter(2, 1)
					.setParameter(3, startDate).setParameter(4, endDate)
					.setParameter(5, identScore).getSingleResult();
			return Math.round((scoreLessIdent.doubleValue() / userNum) * 100);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	/**
	 * ͳ��ָ�����ڷ�Χ�û�ʶ��������ʱʶ������ͳ�Ʒ�Χ
	 * <ul>
	 * <li>sign= 1 ͳ���û�ʶ����ȷ����Ŀ</li>
	 * <li>sign= 0 ͳ���û�ʶ��������Ŀ</li>
	 * <li>sign=-1 ͳ���û�ʶ������</li>
	 * </ul>
	 * 
	 * @param uid
	 * @param sign
	 * @param staDate
	 *            ͳ�ƵĿ�ʼ����
	 * @param endDate
	 *            ͳ�ƵĽ�������
	 * @return
	 */
	private long calc(long uid, int sign, Date startDate, Date endDate) {
		if (sign > -1) {
			return (Long) em
					.createQuery(
							"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4 and t.sign=?5")
					.setParameter(1, uid).setParameter(2, 1).setParameter(3, startDate)
					.setParameter(4, endDate).setParameter(5, sign).getSingleResult();
		} else {
			return (Long) em
					.createQuery(
							"select count(t.id) from TaskRecord t where t.account.id=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4")
					.setParameter(1, uid).setParameter(2, 1).setParameter(3, startDate)
					.setParameter(4, endDate).getSingleResult();
		}
	}

	@Override
	public double calcScore(long uid, Date startDate, Date endDate) {
		try {
			return (Double) em
					.createQuery(
							"select sum(t.score) from TaskRecord t where t.sign=?1 and t.identState=?2 and t.postTime>?3 and t.postTime<?4 and t.account.id=?5")
					.setParameter(1, 1).setParameter(2, 1).setParameter(3, startDate).setParameter(
							4, endDate).setParameter(5, uid).getSingleResult();
		} catch (Exception e) {
			return 0;
		}
	}

}
