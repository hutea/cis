package com.hydom.credit.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.dao.DAOSupport;

@Service
public class ScoreRecordServiceBean extends DAOSupport<ScoreRecord> implements
		ScoreRecordService {
	@Resource
	private AccountService accountService;

	
	
}
