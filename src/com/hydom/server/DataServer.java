package com.hydom.server;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.account.ebean.Account;
import com.hydom.task.ebean.Task;
import com.hydom.task.service.TaskService;
import com.sun.jmx.snmp.tasks.TaskServer;

@Controller
@Scope(value = "prototype")
public class DataServer {

	@Resource
	private TaskService taskService;

	private String taskId; // ����id
	private int recycle; // ����ʱ�䣺ms
	private int lineNo; // �к�
	private int inLineNo;// ���ں�
	private String metricPoint;// �зֺ��û���������
	private int matchNum;// ��������
	private double accuracy;// ��ȷ��
	private String recycleType;// �������ͣ���ʱ����
	private String jsonstr ;
	private InputStream inputStream;

	/**
	 * ���乤��
	 */
	public String assignTask() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Task task = new Task();
			task.setTaskId(taskId);
			task.setRecycle(recycle);
			task.setLineNo(lineNo);
			task.setInLineNo(inLineNo);
			task.setMetricPoint(metricPoint);
			task.setMatchNum(matchNum);
			taskService.save(task);
			dataMap.put("result", "true");
		} catch (Exception e) {
			dataMap.put("result", "false");
		}
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		try {
			inputStream = new ByteArrayInputStream(jsonStr.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "success";
	}

	/**
	 * ���չ���
	 */
	public String recycleTask() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Task entity = taskService.findByTaskId(taskId);
			taskService.update(entity);
			dataMap.put("success", "true");
			dataMap.put("taskId", taskId);
			dataMap.put("content", taskId);

		} catch (Exception e) {
			dataMap.put("success", "false");
		}
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		try {
			inputStream = new ByteArrayInputStream(jsonStr.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "success";
	}
}
