package com.hydom.account.service;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.dao.DAOSupport;

@Service
public class AccountServiceBean extends DAOSupport<Account> implements AccountService {

	@Override
	public Account findByUP(String username, String password) {
		try {
			return (Account) em.createQuery(
					"select * from Account o where o.username=?1 and o.passworkd=?2").setParameter(
					1, username).setParameter(2, password).getSingleResult();
		} catch (Exception e) {
			return null;
		}
	}

}
