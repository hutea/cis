package com.hydom.extra.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hydom.dao.DAOSupport;
import com.hydom.extra.ebean.ShortMessage;
import com.hydom.extra.ebean.ShortMessageRecode;
import com.hydom.util.HttpSender;
import com.hydom.util.StringGenerator;

@Service
public class ShortMessageServiceBean extends DAOSupport<ShortMessage> implements
		ShortMessageService {

	@Resource
	private ShortMessageRecordService shortMessageRecordService;

	@Override
	public void sendCode(String phone, String code, String content) {
		// String path =
		// "http://222.76.210.200:9999/sms.aspx?action=send&userid=402&account=jyhh&
		// password=123456&mobile=13882162641&content=111111";
		String path = "http://222.76.210.200:9999/sms.aspx";// 地址
		Map<String, String> params = new HashMap<String, String>();
		params.put("action", "send");
		params.put("userid", "402");
		params.put("acount", "jyhh");
		params.put("password", "123456");
		params.put("mobile", phone);// 接受人电话
		params.put("content", content);// 短信内容
		boolean sendResult = false;
		Date sendTime = new Date();
		try {
			sendResult = HttpSender.sendGetRequest(path, params, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (sendResult) {
			ShortMessage sm = this.find(phone);
			if (sm == null) {// 插入新记录
				sm = new ShortMessage();
				sm.setPhone(phone);
				sm.setContent(content);
				sm.setCode(code);
				sm.setSendTime(sendTime);
				this.save(sm);
			} else {// 更新发送内容与发送时间
				sm.setContent(code);
				sm.setCode(code);
				sm.setSendTime(sendTime);
				this.update(sm);
			}
		}
		/** *************保存短信发送记录START************* */
		ShortMessageRecode smr = new ShortMessageRecode();
		smr.setContent(content);
		smr.setCode(code);
		smr.setPhone(phone);
		smr.setSendTime(sendTime);
		smr.setResult(sendResult);
		shortMessageRecordService.save(smr);
		/** *************保存短信发送记录END*************** */
	}

	@Override
	public String findCode(String phone) {
		try {
			return this.find(phone).getCode();
		} catch (Exception e) {
			return null;
		}
	}

}
