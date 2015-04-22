package com.hydom.credit.ebean;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.hydom.account.ebean.Account;

/**
 * �������Ѽ�¼��
 * 
 * @author www.hydom.cn [heou]
 * 
 */

@Entity
@Table(name = "t_trophyrecord")
public class TrophyRecord {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private Integer number = 1;// ��Ʒ������������Ĭ��ֵ=1
	@Column
	private double score;// ���ζһ������ѻ���
	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "account_id")
	private Account account;// �һ��û�
	@Temporal(TemporalType.TIMESTAMP)
	private Date postTime;// �ύ�һ�ʱ��
	@Column
	private Boolean sign = false;// ��Ƕһ���ȡ�����true=��ȡ
	@Temporal(TemporalType.TIMESTAMP)
	private Date processTime; // ϵͳ����ʱ��
	@Column
	private Boolean visible = true;// visible=fasle��ʾ�û����
	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "trophy_id")
	private Trophy trophy;// ��Ʒ

	public Long getId() {
		return id;
	}

	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Trophy getTrophy() {
		return trophy;
	}

	public void setTrophy(Trophy trophy) {
		this.trophy = trophy;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Boolean getSign() {
		return sign;
	}

	public void setSign(Boolean sign) {
		this.sign = sign;
	}

	public Date getProcessTime() {
		return processTime;
	}

	public void setProcessTime(Date processTime) {
		this.processTime = processTime;
	}

}
