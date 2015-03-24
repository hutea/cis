package com.hydom.credit.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hydom.credit.ebean.Trophy;
import com.hydom.dao.DAOSupport;

@Service
public class TrophyServiceBean extends DAOSupport<Trophy> implements TrophyService {

	@SuppressWarnings("unchecked")
	@Override
	public List<Trophy> list() {
		return em.createQuery("select t from Trophy t where t.visible=?1").setParameter(
				1, true).getResultList();
	}
}
