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

	private String taskId; // 工单id
	private int recycle; // 回收时间：ms
	private int lineNo; // 行号
	private int inLineNo;// 行内号
	private String metricPoint;// 切分后用户答题数据
	private int matchNum;// 分配上限
	private double accuracy;// 正确率
	private String recycleType;// 回收类型：超时回收
	private String jsonstr ;
	private InputStream inputStream;

	/**
	 * 分配工单
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
	 * 回收工单
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
