package com.hydom.task.service;

import java.util.List;

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

	/**
	 * ͨ��taskId�ҳ�������������
	 * 
	 * @param taskId
	 * @return
	 */
	public List<Task> listByTaskId(String taskId);

	/**
	 * ��ʱ��鳬ʱ���� <br>
	 * 1.�Գ�ʱ����(TaskRecord)���������ã� identState=0��ʾʶ��ʱ <br>
	 * 2.����Task������Ϣ��matchedNum-1��canNum+1
	 */
	public void resetMatchTask();
}
