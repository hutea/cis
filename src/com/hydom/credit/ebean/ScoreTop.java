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
 * ���ְ񵥣�ǰ������
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_scoretop")
public class ScoreTop {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	private Double score = 0.0;// �������

	@Temporal(TemporalType.DATE)
	private Date genDate;// ������

	@Column
	private int lv; // ������

	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "account_id")
	private Account account; // �û�

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Date getGenDate() {
		return genDate;
	}

	public void setGenDate(Date genDate) {
		this.genDate = genDate;
	}

	public int getLv() {
		return lv;
	}

	public void setLv(int lv) {
		this.lv = lv;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

}
