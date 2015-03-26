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
							"select t from Task t where t.matchedNum<t.matchNum and t.id not in (select r.task.id from TaskRecord r where r.account.id=?1) order by t.id asc")
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

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listTaskRecord(long accountId, int sign) {
		return em.createQuery(
				"select t from TaskRecord t where t.account.id=?1 and t.sign=?2")
				.setParameter(1, accountId).setParameter(2, sign).getResultList();

	}
}
