package com.hydom.extra.service;

import java.util.List;

import com.hydom.dao.DAO;
import com.hydom.extra.ebean.MessageDeleteRecord;

public interface MessageDeleteRecordService extends DAO<MessageDeleteRecord> {

	/**
	 * �г�ָ���ʻ���ɾ����������ϢID����
	 * 
	 * @param accid
	 *            ���ʻ�ID
	 * @return
	 */
	public List<Long> listMidsByAccid(long accid);

	public MessageDeleteRecord find(long accid, long msgid);
}
