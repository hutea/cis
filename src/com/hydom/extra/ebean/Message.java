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
 * ��Ϣ
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_message")
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column
	private String title;// ��Ϣ����
	@Column
	private String content;// ��Ϣ����
	@Column
	private Date issueTime;// ����ʱ��
	@Column
	private int pushType = 1;// ����ʱ�� ��1=�������ͣ� 2=��ʱ���ͣ� 3=���ٷ�����(������1440����)
	@Temporal(TemporalType.TIMESTAMP)
	private Date pushTime;// ��ʱ����
	@Column
	private Integer pushDuration; // ���ٷ��������ȫ������
	/**
	 * һ����ĳ���û������ͣ�������û���ǰ�����ߣ���ᱣ��Ϊ������Ϣ�������û��´�����ʱ�������͸����� ����ͨ����ֵΪָ��������Ϣ��ʱ�������ڸ�ʱ����Χ���û����߻�����յ����ͣ�������ڡ�
	 */
	@Column
	private int pushTimeToLive = 86400;// Ĭ��ʱ��Ϊ 1 ��(86400��)���Ϊ 10 �졣��������Ϊ 0�����ʾ������������Ϣ����ֻ�е�ǰ���ߵ��û��ſ����յ������в����ߵĶ������յ���
	@Column
	private Boolean visible = true; // �߼�ɾ�����

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getIssueTime() {
		return issueTime;
	}

	public void setIssueTime(Date issueTime) {
		this.issueTime = issueTime;
	}

	public int getPushType() {
		return pushType;
	}

	public void setPushType(int pushType) {
		this.pushType = pushType;
	}

	public Date getPushTime() {
		return pushTime;
	}

	public void setPushTime(Date pushTime) {
		this.pushTime = pushTime;
	}

	public Integer getPushDuration() {
		return pushDuration;
	}

	public void setPushDuration(Integer pushDuration) {
		this.pushDuration = pushDuration;
	}

	public int getPushTimeToLive() {
		return pushTimeToLive;
	}

	public void setPushTimeToLive(int pushTimeToLive) {
		this.pushTimeToLive = pushTimeToLive;
	}

	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

}
