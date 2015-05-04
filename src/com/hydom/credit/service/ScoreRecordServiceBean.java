package com.hydom.credit.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.dao.DAOSupport;

@Service
public class ScoreRecordServiceBean extends DAOSupport<ScoreRecord> implements ScoreRecordService {

	@SuppressWarnings("unchecked")
	@Override
	public List<Object[]> top(Date startDate, Date endDate, int maxresult) {
		return em
				.createQuery(
						"select s.account,sum(s.score)from ScoreRecord s where s.createTime>?1 and screateTime<?2 group by t.account order by sum(s.score) desc")
				.setParameter(1, startDate).setParameter(2, 1).setMaxResults(maxresult)
				.getResultList();
	}

}
