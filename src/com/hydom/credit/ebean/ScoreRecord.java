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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.hydom.account.ebean.Account;
import com.hydom.task.ebean.TaskRecord;

/**
 * ���ּ�¼
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_scorerecord")
public class ScoreRecord {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private double score;// ���λ���
	@Column
	private Boolean sign;// true��ʾ+�֣�false��ʾ-��
	@Column
	private String detail;// ����˵��

	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime; // ����ʱ��

	@Temporal(TemporalType.TIMESTAMP)
	private Date processTime; // ����ʱ��

	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "account_id")
	private Account account;// �û�

	@OneToOne(cascade = { CascadeType.REFRESH }, optional = true)
	@JoinColumn(name = "taskRecord_id")
	private TaskRecord taskRecord;

	@OneToOne(cascade = { CascadeType.REFRESH }, optional = true)
	@JoinColumn(name = "trophyRecord_id")
	private TrophyRecord trophyRecord;

	@Column
	private boolean visible = true;

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public Long getId() {
		return id;
	}

	public Date getProcessTime() {
		return processTime;
	}

	public void setProcessTime(Date processTime) {
		this.processTime = processTime;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public Boolean getSign() {
		return sign;
	}

	public void setSign(Boolean sign) {
		this.sign = sign;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public TaskRecord getTaskRecord() {
		return taskRecord;
	}

	public void setTaskRecord(TaskRecord taskRecord) {
		this.taskRecord = taskRecord;
	}

	public TrophyRecord getTrophyRecord() {
		return trophyRecord;
	}

	public void setTrophyRecord(TrophyRecord trophyRecord) {
		this.trophyRecord = trophyRecord;
	}

}
