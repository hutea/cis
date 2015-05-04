package com.hydom.credit.service;

import java.util.Date;
import java.util.List;

import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.dao.DAO;

public interface ScoreRecordService extends DAO<ScoreRecord> {
	/**
	 * ����ָ�������ڣ���������maxresultλ�û�
	 * 
	 * @param startDate
	 * @param endDate
	 * @param maxresult
	 * @return��List<�����Account,���֣�> list�����ֽ���
	 */
	public List<Object[]> top(Date startDate, Date endDate, int maxresult);
}
