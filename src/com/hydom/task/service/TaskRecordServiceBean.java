package com.hydom.task.service;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;

@Service
public class TaskRecordServiceBean extends DAOSupport<TaskRecord> implements TaskRecordService {
	@Resource
	private AccountService accountService;

	public TaskRecord fetchTaskRecord(String accountId) {
		try {
			Task task = (Task) em.createQuery(
					"select Task from Task t where t.matchedNum<t.mathchNum order by id asc")
					.getSingleResult();
			TaskRecord taskRecord = new TaskRecord();
			Account account = accountService.find(accountId);
			taskRecord.setAcount(account);
			taskRecord.setTask(task);
			taskRecord.setMatchTime(new Date());
			this.save(taskRecord);
			account.setState(1);// �����û�״̬Ϊ1����ʾ��ʶ����
			accountService.update(account);
			return taskRecord;
		} catch (Exception e) {
			return null;
		}
	}
}
