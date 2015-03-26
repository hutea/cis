package com.hydom.task.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Job;
import com.hydom.task.ebean.Task;

@Service
public class JobServiceBean extends DAOSupport<Job> implements JobService {
	@Override
	public Job findByTaskId(String taskId) {
		try {
			return (Job) em.createQuery(
					"select o from Job o where o.visible=?1 and o.taskId=?2")
					.setParameter(1, true).setParameter(2, taskId).getSingleResult();
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * 定时提交
	 */
	@SuppressWarnings( { "unchecked" })
	public void feedback() {
		List<Job> jobs = em
				.createQuery(
						"select o from Job o where o.visible=?1 and feedback=?2 and o.taskCount=？3")
				.setParameter(1, true).setParameter(2, false).setParameter(3, 0)
				.getResultList();
		for (Job job : jobs) {

		}

	}
}
