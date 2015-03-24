package com.hydom.account.service;

import com.hydom.account.ebean.Account;
import com.hydom.dao.DAO;

public interface AccountService extends DAO<Account> {

	/**
	 * ͨ���û������������Account
	 * 
	 * @param username
	 *            :�û������ֻ��š�
	 * @param password
	 *            ������
	 * @return
	 */
	public Account findByUP(String username, String password);

	/**
	 * ͨ���û�������Account
	 * 
	 * @param username
	 *            ���û������ֻ��š�
	 * @return
	 */
	public Account findByUsername(String username);

}
