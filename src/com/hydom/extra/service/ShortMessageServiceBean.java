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

@Service
public class ShortMessageServiceBean extends DAOSupport<ShortMessage> implements
		ShortMessageService {

	@Resource
	private ShortMessageRecordService shortMessageRecordService;

	@Override
	public boolean sendCode(String phone, String code, String content) {
		// String path =
		// "http://222.76.210.200:9999/sms.aspx?action=send&userid=402&account=jyhh&
		// password=123456&mobile=13882162641&content=111111";

		String path = "http://222.76.210.200:9999/sms.aspx";// ��ַ
		Map<String, String> params = new HashMap<String, String>();
		params.put("action", "send");
		params.put("userid", "402");
		params.put("account", "jyhh");
		params.put("password", "123456");
		params.put("mobile", phone);// �����˵绰
		params.put("content", content);// ��������
		boolean sendResult = false;
		Date sendTime = new Date();
		try {
			String result = HttpSender.sendGetRequest(path, params, "UTF-8");
			if (result.toString().contains("<returnstatus>Success</returnstatus>")) {
				sendResult = true;
			} else {
				sendResult = false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			sendResult = false;
		}
		/** *************������ŷ��ͼ�¼START************* */
		ShortMessageRecode smr = new ShortMessageRecode();
		smr.setContent(content);
		smr.setCode(code);
		smr.setPhone(phone);
		smr.setSendTime(sendTime);
		smr.setResult(sendResult);
		shortMessageRecordService.save(smr);
		/** *************������ŷ��ͼ�¼END*************** */
		if (sendResult) {
			ShortMessage sm = this.find(phone);
			if (sm == null) {// �����¼�¼
				sm = new ShortMessage();
				sm.setPhone(phone);
				sm.setContent(content);
				sm.setCode(code);
				sm.setSendTime(sendTime);
				this.save(sm);
			} else {// ���·��������뷢��ʱ��
				sm.setContent(code);
				sm.setCode(code);
				sm.setSendTime(sendTime);
				this.update(sm);
			}
		}
		return sendResult;
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
