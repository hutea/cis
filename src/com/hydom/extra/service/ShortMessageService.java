package com.hydom.extra.service;

import com.hydom.dao.DAO;
import com.hydom.extra.ebean.ShortMessage;

public interface ShortMessageService extends DAO<ShortMessage> {
	/**
	 * 发送验证码
	 * 
	 * @param phone
	 *            : 电话号码
	 * @param code
	 *            : 验证码
	 * @param content
	 *            : 短信完整内容
	 * @return
	 */
	public void sendCode(String phone, String code, String content);

	/**
	 * 
	 * 通过手机找到最近一条发送短信的验证码
	 * 
	 * @param phone
	 * @return
	 */
	public String findCode(String phone);

}
