package com.hydom.task.ebean;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
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
	private Long recycleTime;// ��ʱʱ��:��msΪ��λ:��Դ��ϵͳ����
	@Column
	private Integer matchNum;// �������ޣ�Ĭ����Դϵͳ����
	@Column
	private Integer matchedNum = 0;// �ѷ��������
	@Column
	private Integer initNum;// �����ֵ����ϵͳ�趨
	@Column
	private Integer postNum;// Ҫ�ﵽ���ύ�����ɷ����ֵ�Դ˽����ۼ�
	@Column
	private Integer canNum;// �ɷ��䣬��ʼֵ=initNum������ͨ�������趨
	@Column
	private Integer resultNum = 0;// ������ʶ����������
	@Column
	private Double accuracy;// ָ������ȷ����
	@Column
	private Integer recycleType = 0;// �������ͣ�0Ϊ��ֵ��ʾû�б����� 1=��ʱ����
	@Column(length = 2000)
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
	private Double score = 0.0;// ��ɱ���ɵõ��ķ���

	@ManyToOne(cascade = { CascadeType.REFRESH, }, optional = false)
	@JoinColumn(name = "job_id")
	private Job job;// 
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

	public Integer getLineNo() {
		return lineNo;
	}

	public Integer getPostNum() {
		return postNum;
	}

	public void setPostNum(Integer postNum) {
		this.postNum = postNum;
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

	public Long getRecycleTime() {
		return recycleTime;
	}

	public void setRecycleTime(Long recycleTime) {
		this.recycleTime = recycleTime;
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

	public Integer getRecycleType() {
		return recycleType;
	}

	public void setRecycleType(Integer recycleType) {
		this.recycleType = recycleType;
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

	public Job getJob() {
		return job;
	}

	public void setJob(Job job) {
		this.job = job;
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

	public Integer getCanNum() {
		return canNum;
	}

	public void setCanNum(Integer canNum) {
		this.canNum = canNum;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

}
