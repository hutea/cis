package com.hydom.extra.ebean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ������֤��
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_messagecode")
public class MessageCode {
	@Id
	private String phone;// �绰
	@Column
	private String code;// ��֤��
	@Temporal(TemporalType.TIMESTAMP)
	private Date sendTime; // ����ʱ��

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getSendTime() {
		return sendTime;
	}

	public void setSendTime(Date sendTime) {
		this.sendTime = sendTime;
	}

}
