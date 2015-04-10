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

	public void record(ScoreRecord scoreRecord) {
		this.save(scoreRecord);
		Account account = accountService.find(scoreRecord.getAccount().getId());
		if (scoreRecord.getSign()) {
			account.setScore(account.getScore() + scoreRecord.getScore());
		} else {
			account.setScore(account.getScore() - scoreRecord.getScore());
		}
		accountService.update(account);

	}
}
