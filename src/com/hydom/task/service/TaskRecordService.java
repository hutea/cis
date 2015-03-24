package com.hydom.task.service;

import java.util.List;

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
	public TaskRecord fetchTaskRecord(long  accountId);

	/**
	 * �����û�ʶ���¼�б�
	 * 
	 * @param accountId
	 *            ���û�ID
	 * @param sign
	 *            :1��ʾ����ʶ����ȷ�ģ�0��ʾ����ʶ������
	 * @return
	 */
	List<TaskRecord> listTaskRecord(long accountId, int sign);
}
