package com.hydom.task.service;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.Task;

public interface TaskService extends DAO<Task> {
	/**
	 * ���ҹ���
	 * 
	 * @param taskId
	 *            ������ID
	 * @return
	 */
	public Task findByTaskId(String taskId);
}
