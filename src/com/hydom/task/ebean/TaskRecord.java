package com.hydom.task.ebean;

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
 * �����¼
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_taskrecord")
public class TaskRecord {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "task_id")
	private Task task;
	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "accout_id")
	private Account acount;// ��������û�
	@Temporal(TemporalType.TIMESTAMP)
	private Date matchTime;// ����ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date postTime;// ���ʱ��
	@Column
	private Integer identState;// �û�ʶ��״̬��0=ʶ��ʱ��1=�ڹ涨ʱ��ʶ��
	@Column
	private Double score;// ����ʶ��÷�
	@Column
	private String result;// �û�ʶ����
	@Column
	private Integer sign;// ʶ�������㣺1=�û�ʶ����ȷ��2=�û�ʶ�����

	public Integer getIdentState() {
		return identState;
	}

	public void setIdentState(Integer identState) {
		this.identState = identState;
	}

	public Integer getSign() {
		return sign;
	}

	public void setSign(Integer sign) {
		this.sign = sign;
	}

	public Long getId() {
		return id;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Task getTask() {
		return task;
	}

	public void setTask(Task task) {
		this.task = task;
	}

	public Account getAcount() {
		return acount;
	}

	public void setAcount(Account acount) {
		this.acount = acount;
	}

	public Date getMatchTime() {
		return matchTime;
	}

	public void setMatchTime(Date matchTime) {
		this.matchTime = matchTime;
	}

	public Date getPostTime() {
		return postTime;
	}

	public void setPostTime(Date postTime) {
		this.postTime = postTime;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

}
