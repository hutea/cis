package com.hydom.extra.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.extra.ebean.MessageDeleteRecord;

@Service
public class MessageDeleteRecordServiceBean extends DAOSupport<MessageDeleteRecord>
		implements MessageDeleteRecordService {

	@SuppressWarnings("unchecked")
	//select o.msgid form MessageDeleteRecord o where o.accid=?1
	public List<Long> listMidsByAccid(long accid) {
		return em.createQuery(
				"select o.id from MessageDeleteRecord o where o.accid=?1")
				.setParameter(1, accid).getResultList();
	}
}
