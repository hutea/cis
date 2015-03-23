package com.hydom.task.service;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Task;

@Service
public class TaskServiceBean extends DAOSupport<Task> implements TaskService {

	@Override
	public Task findByTaskId(String taskId) {
		try {
			return (Task) em.createQuery("select o from Task o where o.visible=?1 and o.taskId=?2")
					.setParameter(1, true).setParameter(2, taskId).getSingleResult();
		} catch (Exception e) {
			return null;
		}
	}
}
