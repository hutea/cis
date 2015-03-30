package com.hydom.server;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.task.ebean.Job;
import com.hydom.task.ebean.Task;
import com.hydom.task.service.JobService;
import com.hydom.task.service.TaskService;

@Controller
@Scope(value = "prototype")
public class DataServer {

	@Resource
	private TaskService taskService;
	@Resource
	private JobService jobService;

	private String taskId;
	private String recycleType;// 回收类型，1=超时回收
	private String jsonStr;
	private InputStream inputStream;

	/**
	 * 分配工单
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String assignTaskQuestion() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Gson gson = new Gson();
			TaskData taskData = gson.fromJson(jsonStr, TaskData.class);
			Date currentTime = new Date();
			Job job = new Job();
			job.setTaskId(taskData.getTaskId());
			job.setRecycleTime(Long.parseLong(taskData.getRecycleTime()));
			job.setAccuracy(Double.parseDouble(taskData.getAccuracy()));
			job.setMatchNum(Integer.parseInt(taskData.getMatchNum()));
			job.setCreateTime(currentTime);
			jobService.save(job);
			int count = 0;
			for (Map<String, Object> map : taskData.getMessage()) {
				Task task = new Task();
				/** 拼装metricPoint字串 START **/
				List<Object> array = (List<Object>) map.get("metricPoint");
				StringBuffer metricPoint = new StringBuffer();
				for (Object obj : array) {
					metricPoint.append(obj + ",");
				}
				metricPoint.deleteCharAt(metricPoint.length() - 1);
				
				/** 拼装metricPoint字串 END **/
				task.setLineNo(Integer.parseInt((String) map.get("lineNo")));// 设置行号
				task.setInLineNo(Integer.parseInt((String) map.get("inLineNo")));// 设置行内号
				task.setMetricPoint(metricPoint.toString());// 设置切分数据
				task.setRecycleTime(Long.parseLong(taskData.getRecycleTime()));// 设置超时时间
				task.setAccuracy(Double.parseDouble(taskData.getAccuracy()));// 设置正确率
				task.setMatchNum(Integer.parseInt(taskData.getMatchNum()));// 设置分配上限
				task.setCreateTime(currentTime);
				task.setJob(job);
				taskService.save(task);
				count++;
			}
			dataMap.put("result", "true");
		} catch (Exception e) {
			dataMap.put("result", "false");
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 工单反馈：手工调用【测试】
	 * 
	 * @return
	 */
	public String backTaskByQuestion() {
		
		return "success";
	}

	/**
	 * 回收工单
	 */
	public String recycleTaskByQuestion() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<Task> tasks = taskService.listByTaskId(taskId);
		if (tasks.size() > 0) {
			dataMap.put("success", "true");
		} else {
			dataMap.put("success", "false");
		}
		dataMap.put("success", "true");
		List<Map<String, Object>> content = new ArrayList<Map<String, Object>>();
		for (Task task : tasks) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("lineNo", task.getLineNo());
			map.put("inLineNo", task.getInLineNo());
			map.put("originalData", task.getResult());
			if (task.getRation() < task.getAccuracy()) {// 实际正确比例小于设定的正确比例
				map.put("status", 1);// 表示要纠正
			} else {
				map.put("status", 0);
			}
			content.add(map);
			task.setRecycleType(Integer.parseInt(recycleType));// 设置工单状态 ：1=超时回收
			taskService.update(task);
		}
		Map<String, String> taskIdMap = new HashMap<String, String>();
		taskIdMap.put("taskId", taskId);
		List<Object> message = new ArrayList<Object>();
		message.add(taskIdMap);
		message.add(content);
		dataMap.put("message", message);
		dataFillStream(dataMap);
		Job job = jobService.findByTaskId(taskId);
		job.setRecycleType(Integer.parseInt(recycleType));
		jobService.update(job);
		return "success";
	}

	/**
	 * 将Map<String, Object> dataMap转换成json格式,并传递给InputStream
	 * 
	 * @param dataMap
	 */
	private void dataFillStream(Map<String, Object> dataMap) {
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		try {
			inputStream = new ByteArrayInputStream(jsonStr.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		Gson gson = new Gson();
		// {"taskId":"",message:[{"lineNo":"1","inLineNo":"1","originalData":"","status":"true"},{"lineNo":"1","inLineNo":"2","originalData":"","status":"true"}]}
		String json = "{\"taskId\":\"123\",\"recycleTime\":\"1223\",\"matchNum\":\"3\",message:[{\"lineNo\":\"1\",\"inLineNo\":\"1\",\"metricPoint\":[{\"x\":1885,\"y\":304},{\"x\":199,\"y\":88}]},{\"lineNo\":\"2\",\"inLineNo\":\"1\",\"metricPoint\":[{\"x\":1885,\"y\":304},{\"x\":199,\"y\":88}]}]}";
		System.out.println(json.substring(104));
		TaskData data = gson.fromJson(json, TaskData.class);
		System.out.println(data.getTaskId());
		System.out.println(data.getRecycleTime());
		for (Map<String, Object> map : data.getMessage()) {
			System.out.println("lineNo=" + map.get("lineNo"));
			System.out.println("inLineNo=" + map.get("inLineNo"));
			System.out.println("metricPoint=" + map.get("metricPoint"));
			List<Object> ary = (List<Object>) map.get("metricPoint");
			StringBuffer metricPoint = new StringBuffer();
			for (Object obj : ary) {
				metricPoint.append(obj + ",");
				System.out.println("~~" + metricPoint);
			}
			metricPoint.deleteCharAt(metricPoint.length() - 1);
			System.out.println(metricPoint);
		}
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getJsonStr() {
		return jsonStr;
	}

	public void setJsonStr(String jsonStr) {
		this.jsonStr = jsonStr;
	}

	public String getRecycleType() {
		return recycleType;
	}

	public void setRecycleType(String recycleType) {
		this.recycleType = recycleType;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

}
