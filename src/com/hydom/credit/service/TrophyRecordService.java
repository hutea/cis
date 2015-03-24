package com.hydom.credit.service;

import java.util.List;

import com.hydom.credit.ebean.TrophyRecord;
import com.hydom.dao.DAO;

public interface TrophyRecordService extends DAO<TrophyRecord> {

	/**
	 * ��ȡָ�ʻ������жһ���¼
	 * 
	 * @param uid
	 *            :�û�ID��Account���е�ID��
	 * @return
	 */
	public List<TrophyRecord> list(long uid);

	/**
	 * ���ָ���û��Ķһ���¼�������߼�ɾ��
	 * 
	 * @param uid
	 * @return
	 */
	public int clear(long uid);

	/**
	 * ͳ��ָ���û����¶һ�����
	 * 
	 * @param uid
	 * @return
	 */
	public int countMonth(long uid);

	/**
	 * ͳ��ָ���û��һ��ܴ���
	 * 
	 * @param uid
	 * @return
	 */
	public int countAll(long uid);

}
