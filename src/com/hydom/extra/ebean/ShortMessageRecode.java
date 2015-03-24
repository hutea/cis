package com.hydom.extra.ebean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ���ŷ��ͼ�¼
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_shortmessagerecode")
public class ShortMessageRecode {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column
	private String phone;// �绰
	@Column
	private String content;// ��������
	@Column
	private String code;// ��֤��
	@Temporal(TemporalType.TIMESTAMP)
	private Date sendTime; // ����ʱ��
	@Column
	private Boolean result; // ���ͽ��

	public Boolean getResult() {
		return result;
	}

	public void setResult(Boolean result) {
		this.result = result;
	}

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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getSendTime() {
		return sendTime;
	}

	public void setSendTime(Date sendTime) {
		this.sendTime = sendTime;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
