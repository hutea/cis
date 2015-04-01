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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.extra.ebean.SystemConfig;
import com.hydom.extra.service.SystemConfigService;
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
	@Resource
	private SystemConfigService systemConfigService;

	private String taskId;
	private String recycleType;// 回收类型，1=超时回收
	private String jsonStr;
	private InputStream inputStream;
	private Log log = LogFactory.getLog("dataServerLog");

	/**
	 * 分配工单
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String assignTaskQuestion() {
		System.out.println("DataServer[assignTaskQuestion]接受到的jsonStr字串---<" + jsonStr);
		log.info("接受到的jsonStr字串---<" + jsonStr);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Gson gson = new Gson();
			TaskData taskData = gson.fromJson(jsonStr, TaskData.class);
			Date currentTime = new Date();
			Job job = new Job();
			job.setTaskId(taskData.getTaskId());
			job.setRecycleTime(Long.parseLong(taskData.getRecycleTime()));
			job.setAccuracy(Double.parseDouble(taskData.getAccuracy()));

			SystemConfig config = systemConfigService.find("match");
			job.setInitNum(config.getValueShort().intValue());// 设置分配初值
			try {
				job.setMatchNum(Integer.parseInt(taskData.getMatchNum()));// 设置分配上限
			} catch (Exception e) {
				job.setMatchNum(config.getValueInt());// 出现异常用系统设置的分配上限值
			}
			if (job.getMatchNum() < job.getInitNum()) {// 如果上限小于了分配初值 ：用分配初值填充分配上限
				job.setMatchNum(job.getInitNum());
			}
			job.setCreateTime(currentTime);
			jobService.save(job);
			int count = 0;
			for (Map<String, Object> map : taskData.getMessage()) {
				Task task = new Task();
				/** 拼装metricPoint字串 START **/
				//log.info("~~~:"+map.get("metricPoint").getClass()+"--"+map.get("metricPoint")); 
				List<Object> array = (List<Object>) map.get("metricPoint"); 
				StringBuffer metricPoint = new StringBuffer();
				for (Object obj : array) {
					log.info("obj:"+obj.getClass()+"--"+obj);
					metricPoint.append(obj + ",");
				}
				metricPoint.deleteCharAt(metricPoint.length() - 1);
				
				/** 拼装metricPoint字串 END **/
				task.setLineNo(Integer.parseInt((String) map.get("lineNo")));// 设置行号
				task.setInLineNo(Integer.parseInt((String) map.get("inLineNo")));// 设置行内号
				task.setMetricPoint(metricPoint.toString());// 设置切分数据
				log.info("metricPoint:"+metricPoint.toString()) ;
				task.setRecycleTime(Long.parseLong(taskData.getRecycleTime()));// 设置超时时间
				task.setAccuracy(Double.parseDouble(taskData.getAccuracy()));// 设置正确率
				task.setInitNum(job.getInitNum());// 设置分配初值
				task.setMatchNum(job.getMatchNum());// 设置分配上限
				task.setPostNum(task.getInitNum());// 设置要达到的提交数等于分配初值
				task.setCanNum(task.getInitNum());// 设置可分配的值
				task.setCreateTime(currentTime);
				task.setJob(job);
				task.setTaskId(taskData.getTaskId());
				taskService.save(task);
				count++;
			}
			job.setTaskCount(count);// 设置区块（task）总数
			jobService.update(job);
			dataMap.put("result", "true");
		} catch (Exception e) {
			dataMap.put("exception", e.toString());
			dataMap.put("result", "false");
			e.printStackTrace();
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
		jobService.postJob(1);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", "--");
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 回收工单
	 */
	public String recycleTaskByQuestion() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			List<Task> tasks = taskService.listByTaskId(taskId);
			if (tasks.size() > 0) {
				dataMap.put("success", "true");
			} else {
				dataMap.put("success", "false");
			}
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
				task.setRecycleType(Integer.parseInt(recycleType));// 设置工单状态
				// ：1=超时回收
				taskService.update(task);
			}
			/*
			 * Map<String, String> taskIdMap = new HashMap<String, String>(); taskIdMap.put("taskId", taskId); Map<String,
			 * List<Map<String, Object>> > contentMap = new HashMap<String, List<Map<String, Object>> >();
			 * contentMap.put("content", content);
			 */
			Map<String, Object> message = new HashMap<String, Object>();
			message.put("taskId", taskId);
			message.put("content", content);
			dataMap.put("message", message);
			Job job = jobService.findByTaskId(taskId);
			job.setRecycleType(Integer.parseInt(recycleType));
			jobService.update(job);
		} catch (Exception e) {
			dataMap.put("taskID", taskId == null ? "null" : taskId);
			dataMap.put("exception", e.toString());
			dataMap.put("result", "false");
			e.printStackTrace();
		}
		dataFillStream(dataMap);
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
		System.out.println("返回内容：" + jsonStr);
		log.info("DataServer响应字串--->" + jsonStr);
		try {
			inputStream = new ByteArrayInputStream(jsonStr.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
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
