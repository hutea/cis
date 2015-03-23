package com.hydom.account.service;

import com.hydom.account.ebean.Account;
import com.hydom.dao.DAO;

public interface AccountService extends DAO<Account> {

	/**
	 * 通过用户名和密码查找Account
	 * 
	 * @param username
	 * @param password
	 * @return
	 */
	public Account findByUP(String username, String password);

}
