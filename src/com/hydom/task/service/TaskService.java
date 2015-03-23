package com.hydom.task.service;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.Task;

public interface TaskService extends DAO<Task> {
	/**
	 * 查找工单
	 * 
	 * @param taskId
	 *            ：工单ID
	 * @return
	 */
	public Task findByTaskId(String taskId);
}
