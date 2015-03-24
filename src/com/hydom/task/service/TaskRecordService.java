package com.hydom.task.service;

import java.util.List;

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
	public TaskRecord fetchTaskRecord(long  accountId);

	/**
	 * 返回用户识别记录列表
	 * 
	 * @param accountId
	 *            ：用户ID
	 * @param sign
	 *            :1表示返回识别正确的，0表示返回识别错误的
	 * @return
	 */
	List<TaskRecord> listTaskRecord(long accountId, int sign);
}
