package com.hydom.account.service;

import com.hydom.account.ebean.PrivilegeGroup;
import com.hydom.dao.DAO;

public interface PrivilegeGroupService extends DAO<PrivilegeGroup> {

	/**
	 * ����Ȩ�������Ʋ��Ҷ�Ӧ��Ȩ�����¼
	 * 
	 * @param groupName
	 * @return
	 */
	public PrivilegeGroup findByName(String groupName);

}
