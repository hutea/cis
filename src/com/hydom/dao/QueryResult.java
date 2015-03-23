package com.hydom.dao;

import java.util.List;

/**
 * ��ѯ�����װ��:���԰��ܵļ�¼�����������װ����bean����
 * 
 * @author www.hydom.cn [heou]
 * 
 * @param <T>
 */
public class QueryResult<T> {
	private List<T> resultList; // ��ѯ����ʵ���¼
	private long totalrecords; // ��ѯ�����ܵļ�¼��

	/**
	 * @return������ʵ��List����
	 */
	public List<T> getResultList() {
		return resultList;
	}

	public void setResultList(List<T> resultList) {
		this.resultList = resultList;
	}

	/**
	 * @return���ܵļ�¼��
	 */

	public long getTotalrecords() {
		return totalrecords;
	}

	public void setTotalrecords(long totalrecords) {
		this.totalrecords = totalrecords;
	}
}
