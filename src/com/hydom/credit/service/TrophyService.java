package com.hydom.credit.service;

import java.util.List;

import com.hydom.credit.ebean.Trophy;
import com.hydom.dao.DAO;

public interface TrophyService extends DAO<Trophy> {

	/**
	 * ��ȡ���н�Ʒ�б�
	 * 
	 * @return
	 */
	public List<Trophy> list();

	/**
	 * ��ȡ������ӵĽ�Ʒ��¼
	 * 
	 * @return
	 */
	public Trophy newest();

}
