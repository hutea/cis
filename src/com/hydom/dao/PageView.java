package com.hydom.dao;

import java.util.List;

/**
 * ʹ�ô˷�װ�����ģ��: (1)�����������Ի�ȡ��¼�Ŀ�ʼ����,Ϊ��ȡ�ܵļ�¼����ʵ�弯����׼�� (2)�����ܵļ�¼��(3)����ʵ�弯��
 * (2)(3)��Ҳ����ֱ��ʹ��setQueryResult��������. ����:��ȷ������Ҫ��װʵ���¼����List<T>
 * ���п��޵ĵ�(4)��:��������÷ֲ�������ʾ��ҳ����,����setPageBarSize,����Ҳ�ɲ�����,��ΪĬ������Ϊ8
 * records����ҳjaveBean
 * :PageIndex.��(2)�������ܵļ�¼��,����������ҳ��,�������PageIndex����ķ�װ.��(3)������ʵ�弯�����List
 * <T>recodrs�ķ�װ
 * ����˵��:���໹�ر��ṩΪ��Ŀ�ṩ���������ķ���:getFirstResult:����ɵ�(1)����,����Ϊ��ѯʵ��ʱ������ʼ��������
 * ;setQueryResult��������ֱ�Ӱ���Ŀ�е�QueryResult����ֱ�ӷ�װ��F����,�����Ϳ���ʡ��(2)(3)��
 * 
 * @author www.hydom.cn [heou]
 * @param <T>
 */
public class PageView<T> {
	private List<T> records; // ��ѯ����ʵ���¼��
	private long totalrecord;// �ܼ�¼��

	private PageIndex pageIndex; // ��ҳ��������ʼ���� ��������
	private long pageBarSize = 5; // ��ҳ���ϵ�ҳ����
	private int currentPage; // ��ǰҳ
	private long totalPage = 1; // ��ҳ��

	private int maxresult = 10; // ÿҳ��ʾ��¼��

	/**
	 * Ψһ�Ĺ��췽��
	 * 
	 * @param maxresult
	 *            :ÿҳ��ʾ������¼��
	 * @param currenPage
	 *            :��ǰҳ
	 */
	public PageView(int maxresult, int currenPage) {
		this.maxresult = maxresult;
		this.currentPage = currenPage;
	}

	/**
	 * ��ȡ��ʼ��¼������:����
	 * 
	 * @return
	 */
	public int getFirstResult() {
		return (this.currentPage - 1) * this.maxresult;
	}

	/**
	 * ���QueryResutl�����ṩһ����������ʵ�弯�ϼ��ܵļ�¼���ķ���
	 * 
	 * @param qr
	 */
	public void setQueryResult(QueryResult<T> qr) {
		setTotalrecord(qr.getTotalrecords());
		setRecords(qr.getResultList());
	}

	public List<T> getRecords() {
		return records;
	}

	public void setRecords(List<T> records) {
		this.records = records;
	}

	public PageIndex getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(PageIndex pageIndex) {
		this.pageIndex = pageIndex;
	}

	public long getTotalrecord() {
		return totalrecord;
	}

	public void setTotalrecord(long totalrecord) {
		this.totalrecord = totalrecord;
		// ��������ܼ�¼����Ӧ��Ӧ���޸��ܵ�ҳ��
		setTotalPage(this.totalPage = this.totalrecord % this.maxresult == 0 ? this.totalrecord
				/ this.maxresult
				: this.totalrecord / this.maxresult + 1);
	}

	public long getPageBarSize() {
		return pageBarSize;
	}

	public void setPageBarSize(long pageBarSize) {
		this.pageBarSize = pageBarSize;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public long getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(long totalPage) {
		this.totalPage = totalPage;
		pageIndex = PageIndex.getPageIndex(pageBarSize, currentPage, totalPage);
	}

	public int getMaxresult() {
		return maxresult;
	}

	public void setMaxresult(int maxresult) {
		this.maxresult = maxresult;
	}
}
