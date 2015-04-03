package com.hydom.account.service;

import java.io.Serializable;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.ebean.PrivilegeGroup;
import com.hydom.dao.DAOSupport;

@Service
public class PrivilegeGroupServiceBean extends DAOSupport<PrivilegeGroup> implements
		PrivilegeGroupService {

	@Override
	public void delete(Serializable... ids) {
		for (Serializable id : ids) {
			PrivilegeGroup group = this.find(id);
			for (Account emp : group.getAccounts()) {
				// ����Ȩ�������ʻ��ǶԶ�Թ�ϵ�������ɾ��Ȩ����ʱ���Ƚ�����ʻ��Ĺ�����ϵ��
				emp.getGroups().remove(group);
			}
			em.remove(group);
		}
	}

	@Override
	public PrivilegeGroup findByName(String groupName) {
		try {
			return (PrivilegeGroup) em.createQuery(
					"select o from PrivilegeGroup o where o.name=?1").setParameter(1,
					groupName).getSingleResult();
		} catch (Exception e) {
		}
		return null;
	}
}
