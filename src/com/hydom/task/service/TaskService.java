package com.hydom.task.service;

import java.util.List;

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

	/**
	 * 通过taskId找出所有区块任务
	 * 
	 * @param taskId
	 * @return
	 */
	public List<Task> listByTaskId(String taskId);
}
