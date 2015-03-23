package com.hydom.task.service;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.TaskRecord;

public interface TaskRecordService extends DAO<TaskRecord> {
	/**
	 * 给指定帐号分配一个识别任务【一个识别区块】
	 * 
	 * @param accountId
	 *            ：帐户ID
	 * @return:TaskRecord 已持久化到数据库中
	 */
	public TaskRecord fetchTaskRecord(String accountId);
}
