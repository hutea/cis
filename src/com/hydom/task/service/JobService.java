package com.hydom.task.service;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.Job;

public interface JobService extends DAO<Job> {
	/**
	 * 
	 * @param taskId
	 * @return
	 */
	public Job findByTaskId(String taskId);

	void postJob(long jobId);
}
