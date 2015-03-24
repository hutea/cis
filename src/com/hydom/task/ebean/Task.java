package com.hydom.task.ebean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ������ͨ��taskId��Զ�˽������ݽ���
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_task")
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private String taskId;// ����ID����Ӧ���ĵ��е�taskID
	@Column
	private Integer lineNo; // �к�
	@Column
	private Integer inLineNo;// ���ں�
	@Lob
	private String metricPoint;// �зֺ��û���������
	@Column
	private long recycle;// ��ʱʱ��:��msΪ��λ
	@Column
	private Integer matchNum;// �������ޣ�Ĭ����Դϵͳ����
	@Column
	private Integer matchedNum;// �ѷ��������
	@Column
	private Integer resultNum;// ������ʶ����������
	@Column
	private Double accuracy;// ָ������ȷ����
	@Column
	private Integer state;// ����״̬��
	@Column
	private String result;// ���������ȷ���
	@Column
	private Double ration;// ʵ�ʵ���ȷ����
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;// ����ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date finishTime;// ���ʱ��:��ͳ�ƽ��ʱ��ϵͳ���

	@Temporal(TemporalType.TIMESTAMP)
	private Date matchFirstTime; // �������һ���û���ʱ��
	@Temporal(TemporalType.TIMESTAMP)
	private Date matchLastTime; // ��������һ���û���ʱ��

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

	public Integer getLineNo() {
		return lineNo;
	}

	public void setLineNo(Integer lineNo) {
		this.lineNo = lineNo;
	}

	public Integer getInLineNo() {
		return inLineNo;
	}

	public void setInLineNo(Integer inLineNo) {
		this.inLineNo = inLineNo;
	}

	public String getMetricPoint() {
		return metricPoint;
	}

	public void setMetricPoint(String metricPoint) {
		this.metricPoint = metricPoint;
	}

	public long getRecycle() {
		return recycle;
	}

	public void setRecycle(long recycle) {
		this.recycle = recycle;
	}

	public Integer getMatchNum() {
		return matchNum;
	}

	public void setMatchNum(Integer matchNum) {
		this.matchNum = matchNum;
	}

	public Integer getMatchedNum() {
		return matchedNum;
	}

	public void setMatchedNum(Integer matchedNum) {
		this.matchedNum = matchedNum;
	}

	public Integer getResultNum() {
		return resultNum;
	}

	public void setResultNum(Integer resultNum) {
		this.resultNum = resultNum;
	}

	public Double getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(Double accuracy) {
		this.accuracy = accuracy;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public Double getRation() {
		return ration;
	}

	public void setRation(Double ration) {
		this.ration = ration;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getFinishTime() {
		return finishTime;
	}

	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}

}
