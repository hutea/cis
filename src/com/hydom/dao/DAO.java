package com.hydom.dao;

import java.io.Serializable;
import java.util.LinkedHashMap;


/**
 * @author www.hydom.cn [heou]
 * 
 * @param <T>
 */
public interface DAO<T> {
	public void save(T entity);

	public void update(T entity);

	public T find(Serializable id);

	public void delete(Serializable... ids);

	/**
	 * ��ȡ�ܵļ�¼��
	 */
	public long getCount();

	/**
	 * ��ҳ+where--->1
	 * 
	 * @param startIndex
	 *            :��ҳ����ʼ����
	 * @param maxresult
	 *            :ÿҳ��ʾ������¼��
	 * @param jpql
	 *            :��ѯ����where���,����:o.id=?1 and o.name=?2
	 * @param params
	 *            :��ѯ����where������,����:Object[]{2,"zhangsan"}
	 * @return:��װ��Ĳ�ѯ�����
	 */
	public QueryResult<T> getScrollData(int startIndex, int maxresult,
			String jpql, Object[] params);

	/**
	 * ��ҳ+����--->2
	 * 
	 * @param startIndex
	 *            :��ҳ����ʼ����
	 * @param maxresult
	 *            :ÿҳ��ʾ������¼��
	 * @param orderby
	 *            :�������:orderby.add("id","desc");
	 * @return:��װ��Ĳ�ѯ�����
	 */
	public QueryResult<T> getScrollData(int startIndex, int maxresult,
			LinkedHashMap<String, String> orderby);

	/**
	 * where+����--->3
	 * 
	 * @param startIndex
	 *            :��ҳ����ʼ����
	 * @param maxresult
	 *            :ÿҳ��ʾ������¼��
	 * @param jpql
	 *            :��ѯ����where���,����:o.id=?1 and o.name=?2
	 * @param params
	 *            :��ѯ����where������,����:Object[]{2,"zhangsan"}
	 * @param orderby
	 *            :�������:orderby.add("id","desc");
	 * @return:��װ��Ĳ�ѯ�����
	 */
	public QueryResult<T> getScrollData(String jpql, Object[] params,
			LinkedHashMap<String, String> orderby);

	/**
	 * ��ҳ+where+����--->4
	 * 
	 * @param startIndex
	 *            :��ҳ����ʼ����
	 * @param maxresult
	 *            :ÿҳ��ʾ������¼��
	 * @param jpql
	 *            :��ѯ����where���,����:o.id=?1 and o.name=?2
	 * @param params
	 *            :��ѯ����where������,����:Object[]{2,"zhangsan"}
	 * @param orderby
	 *            :�������:orderby.add("id","desc");
	 * @return:��װ��Ĳ�ѯ�����
	 */
	public QueryResult<T> getScrollData(int startIndex, int maxresult,
			String jpql, Object[] params, LinkedHashMap<String, String> orderby);

	/**
	 * ��ȡȫ������
	 * 
	 * @return
	 */
	public QueryResult<T> getScrollData();
}
