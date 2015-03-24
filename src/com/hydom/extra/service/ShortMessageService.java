package com.hydom.extra.service;

import com.hydom.dao.DAO;
import com.hydom.extra.ebean.ShortMessage;

public interface ShortMessageService extends DAO<ShortMessage> {
	/**
	 * ������֤��
	 * 
	 * @param phone
	 *            : �绰����
	 * @param code
	 *            : ��֤��
	 * @param content
	 *            : ������������
	 * @return
	 */
	public void sendCode(String phone, String code, String content);

	/**
	 * 
	 * ͨ���ֻ��ҵ����һ�����Ͷ��ŵ���֤��
	 * 
	 * @param phone
	 * @return
	 */
	public String findCode(String phone);

}
