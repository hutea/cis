package com.hydom.task.ebean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "t_job")
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private String taskId;
	@Column
	private Long recycleTime;
	@Column
	private Double accuracy;
	@Column
	private Integer matchNum;// ��������
	@Column
	private Integer initNum;// �����ֵ����ϵͳ�趨
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;// ����ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date matchFirstTime; // �����һ���������һ���û���ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date matchLastTime; // �������һ����������һ���û���ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date finishTime; // ��������������ʶ���������ʱ��
	@Column
	private Integer recycleType;// �������ͣ�1=��ʱ����
	@Column
	private boolean feedback = false;// �Ƿ񽫴˹�����������˷���
	@Column
	private Integer taskCount; // ��ӵ�е�task����
	@Column
	private Integer taskFinishCount; // task�����
	@Column
	private boolean visible = true; // �߼�ɾ�����

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public Long getRecycleTime() {
		return recycleTime;
	}

	public Integer getTaskCount() {
		return taskCount;
	}

	public void setTaskCount(Integer taskCount) {
		this.taskCount = taskCount;
	}

	public void setRecycleTime(Long recycleTime) {
		this.recycleTime = recycleTime;
	}

	public boolean isFeedback() {
		return feedback;
	}

	public void setFeedback(boolean feedback) {
		this.feedback = feedback;
	}

	public Double getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(Double accuracy) {
		this.accuracy = accuracy;
	}

	public Integer getMatchNum() {
		return matchNum;
	}

	public void setMatchNum(Integer matchNum) {
		this.matchNum = matchNum;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getMatchFirstTime() {
		return matchFirstTime;
	}

	public void setMatchFirstTime(Date matchFirstTime) {
		this.matchFirstTime = matchFirstTime;
	}

	public Date getMatchLastTime() {
		return matchLastTime;
	}

	public void setMatchLastTime(Date matchLastTime) {
		this.matchLastTime = matchLastTime;
	}

	public Date getFinishTime() {
		return finishTime;
	}

	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}

	public Integer getRecycleType() {
		return recycleType;
	}

	public void setRecycleType(Integer recycleType) {
		this.recycleType = recycleType;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public Integer getInitNum() {
		return initNum;
	}

	public void setInitNum(Integer initNum) {
		this.initNum = initNum;
	}

	public Integer getTaskFinishCount() {
		return taskFinishCount;
	}

	public void setTaskFinishCount(Integer taskFinishCount) {
		this.taskFinishCount = taskFinishCount;
	}

}
