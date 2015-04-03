package com.hydom.account.service;

import java.util.List;

import com.hydom.account.ebean.SystemPrivilege;
import com.hydom.dao.DAO;


public interface SystemPrivilegeService extends DAO<SystemPrivilege> {

	/**
	 * ��������Ȩ��
	 */
	public void saves(List<SystemPrivilege> sps);

	/**
	 * ͨ��url��ַ�ҵ�Ȩ�޶���
	 * 
	 * @param url
	 * @return
	 */
	public SystemPrivilege findByURL(String url);

}
