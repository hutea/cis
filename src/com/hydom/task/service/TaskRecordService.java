package com.hydom.task.service;

import java.util.Date;
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
	public TaskRecord fetchTaskRecord(long accountId);

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

	/**
	 * �����û��ύ��ʶ����
	 * 
	 * @param tid
	 *            ��TaskRecord ID
	 * @param resultStr
	 *            :�û���ʶ����
	 * @return
	 */
	public int processTaskRecord(long tid, String resultStr);

	/**
	 * �г����г�ʱ����
	 * 
	 * @return
	 */
	public List<TaskRecord> listOverTimeRecord();

	/**
	 * ͳ���û�ƽ�������ٶ�
	 * 
	 * @param accid
	 * @return
	 */
	public double countProcessTime(long accid);

	/**
	 * ͳ���û�ʶ����ȷ��
	 * 
	 * @param accid
	 * @return
	 */
	public double countRightPercent(long accid);

	/**
	 * ͳ���û�ʶ������<br>
	 * ��������ʱʶ���¼�����ڹ涨ʱ���ڷ�����ʶ���������м�¼
	 * 
	 * @param accid
	 * @return
	 */
	public long count(long accid);

	/**
	 * ͳ���û����һ��ʶ����<br>
	 * ʱ�����(�統��Ϊ2015-3-13�������һ��ָ��2015-2-13~2015-3-13)<br>
	 * ��ʱʶ���������
	 * 
	 * @param accid
	 * @return
	 */
	public long countThisMonth(long accid);

	/**
	 * 
	 * �����û�����ʶ����
	 * <ul>
	 * <li>sign= 1 ͳ���û�ʶ����ȷ����Ŀ</li>
	 * <li>sign= 0 ͳ���û�ʶ��������Ŀ</li>
	 * <li>sign=-1 ͳ���û�ʶ������</li>
	 * </ul>
	 * 
	 * @param uid
	 *            �û�ID
	 * @param sign
	 * @return
	 */
	public long calcToday(long uid, int sign);

	/**
	 * 
	 * �����û�����ʶ����
	 * <ul>
	 * <li>sign= 1 ͳ���û�ʶ����ȷ����Ŀ</li>
	 * <li>sign= 0 ͳ���û�ʶ��������Ŀ</li>
	 * <li>sign=-1 ͳ���û�ʶ������</li>
	 * </ul>
	 * 
	 * @param uid
	 *            �û�ID
	 * @param sign
	 * @return
	 */
	public long calcMonth(long uid, int sign);

	/**
	 * �����û�����ʶ��ɹ����������û��İٷֱ�
	 * 
	 * @param uid
	 * @return
	 */
	public long calcTodayExceedPercent(long uid);

	/**
	 * �����û����ջ��ֳ��������û��İٷֱ�
	 * 
	 * @param uid
	 * @return
	 */
	public long calcTodayScoreExceedPercent(long uid);

	/**
	 * �����û�����ʶ��ɹ���
	 * 
	 * @param uid
	 * @return
	 */
	public long calcMonthPercent(long uid);

	/**
	 * ����ָ���������û���õĻ���
	 * 
	 * @param uid
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public double calcScore(long uid, Date startDate, Date endDate);

}
