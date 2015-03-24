package com.hydom.task.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;

@Service
public class TaskRecordServiceBean extends DAOSupport<TaskRecord> implements
		TaskRecordService {
	@Resource
	private AccountService accountService;
	@Resource
	private TaskService taskService;

	@Override
	public TaskRecord fetchTaskRecord(long accountId) {
		try {
			Task task = (Task) em
					.createQuery(
							"select t from Task t where t.matchedNum<t.mathchNum and t.id not in (select r.task.id from TaskRecord r where r.account.id=?1) order by id asc")
					.setParameter(1, accountId).setMaxResults(1).getSingleResult();
			TaskRecord taskRecord = new TaskRecord();
			Date currentTime = new Date();
			Account account = accountService.find(accountId);
			taskRecord.setAcount(account);
			taskRecord.setTask(task);
			taskRecord.setMatchTime(currentTime);
			this.save(taskRecord);
			account.setState(1);// �����û�״̬Ϊ1����ʾ��ʶ����
			accountService.update(account);
			task.setMatchedNum(task.getMatchedNum() + 1);// ���ѷ�������+1
			if (task.getMatchFirstTime() == null) {
				task.setMatchFirstTime(currentTime);// ���õ�һ���û��ķ���ʱ��
			} else {
				task.setMatchLastTime(currentTime);// ������һ����ֱ�����һ�����û��ķ���ʱ��
			}
			taskService.update(task);
			return taskRecord;
		} catch (Exception e) {
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TaskRecord> listTaskRecord(long accountId, int sign) {
		return em.createQuery(
				"select * from TaskRecord t where t.account.id=?1 and t.sign=?2")
				.setParameter(1, accountId).setParameter(2, sign).getResultList();

	}
}
