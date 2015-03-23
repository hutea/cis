package com.hydom.extra.service;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.extra.ebean.MessageCode;

@Service
public class MessageCodeServiceBean extends DAOSupport<MessageCode> implements
		MessageCodeService {

}
