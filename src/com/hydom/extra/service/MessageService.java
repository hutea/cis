package com.hydom.extra.service;

import java.util.List;

import com.hydom.dao.DAO;
import com.hydom.extra.ebean.Message;

public interface MessageService extends DAO<Message> {
	/**
	 * ��ȡ������Ϣ
	 * 
	 * @return
	 */
	public List<Message> list();
}
