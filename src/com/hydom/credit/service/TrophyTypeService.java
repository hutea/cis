package com.hydom.credit.service;

import java.util.List;

import com.hydom.credit.ebean.TrophyType;
import com.hydom.dao.DAO;

public interface TrophyTypeService extends DAO<TrophyType> {

	/**
	 * �г����н�Ʒ����
	 * 
	 * @return
	 */
	public List<TrophyType> list();

}
