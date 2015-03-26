package com.hydom.server;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ����json����ת��
 * 
 * @author www.hydom.cn [heou]
 * 
 */
public class TaskData {
	private String taskId;// ����ID����Ӧ���ĵ��е�taskID
	private String recycleTime;// ��ʱʱ��:��msΪ��λ
	private String matchNum;// �������ޣ�Ĭ����Դϵͳ����
	private String accuracy;// ��ȷ��

	private List<Map<String, Object>> message;

	public String getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(String accuracy) {
		this.accuracy = accuracy;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getRecycleTime() {
		return recycleTime;
	}

	public void setRecycleTime(String recycleTime) {
		this.recycleTime = recycleTime;
	}

	public String getMatchNum() {
		return matchNum;
	}

	public void setMatchNum(String matchNum) {
		this.matchNum = matchNum;
	}

	public List<Map<String, Object>> getMessage() {
		return message;
	}

	public void setMessage(List<Map<String, Object>> message) {
		this.message = message;
	}

}
