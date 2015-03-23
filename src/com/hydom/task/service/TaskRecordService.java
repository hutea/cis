package com.hydom.task.service;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.TaskRecord;

public interface TaskRecordService extends DAO<TaskRecord> {
	/**
	 * ��ָ���ʺŷ���һ��ʶ������һ��ʶ�����顿
	 * 
	 * @param accountId
	 *            ���ʻ�ID
	 * @return:TaskRecord �ѳ־û������ݿ���
	 */
	public TaskRecord fetchTaskRecord(String accountId);
}
