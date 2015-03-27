package com.hydom.credit.service;

import org.springframework.stereotype.Service;

import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.dao.DAOSupport;

@Service
public class ScoreRecordServiceBean extends DAOSupport<ScoreRecord> implements
		ScoreRecordService {

}
