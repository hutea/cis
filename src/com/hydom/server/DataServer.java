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
	private String recycleType;// �������ͣ�1=��ʱ����
	private String jsonStr;
	private InputStream inputStream;
	private Log log = LogFactory.getLog("dataServerLog");

	/**
	 * ���乤��
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String assignTaskQuestion() {
		System.out.println("DataServer[assignTaskQuestion]���ܵ���jsonStr�ִ�---<" + jsonStr);
		log.info("DataServer�����乤��assignTaskQuestion����" + "jsonStr=" + jsonStr);
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
			job.setInitNum(config.getValueShort().intValue());// ���÷����ֵ
			try {
				job.setMatchNum(Integer.parseInt(taskData.getMatchNum()));// ���÷�������
			} catch (Exception e) {
				job.setMatchNum(config.getValueInt());// �����쳣��ϵͳ���õķ�������ֵ
			}
			if (job.getMatchNum() < job.getInitNum()) {// �������С���˷����ֵ ���÷����ֵ=��������
				job.setInitNum(job.getMatchNum());
			}
			job.setCreateTime(currentTime);
			int count = 0;
			List<Task> tasks = new ArrayList<Task>();
			for (Map<String, Object> map : taskData.getMessage()) {
				Task task = new Task();
				/** ƴװmetricPoint�ִ� START **/
				// log.info("~~~:"+map.get("metricPoint").getClass()+"--"+map.get("metricPoint"));
				List<Object> array = (List<Object>) map.get("metricPoint");
				StringBuffer metricPoint = new StringBuffer();
				for (Object obj : array) {
					metricPoint.append(obj + ",");
				}
				metricPoint.deleteCharAt(metricPoint.length() - 1);
				/** ƴװmetricPoint�ִ� END **/
				task.setLineNo(Integer.parseInt((String) map.get("lineNo")));// �����к�
				task.setInLineNo(Integer.parseInt((String) map.get("inLineNo")));// �������ں�
				task.setMetricPoint(metricPoint.toString());// �����з�����
				log.info("metricPoint:" + metricPoint.toString());
				task.setRecycleTime(config.getValueLong());// ���ó�ʱʱ��
				task.setAccuracy(Double.parseDouble(taskData.getAccuracy()));// ������ȷ��
				task.setInitNum(job.getInitNum());// ���÷����ֵ
				task.setMatchNum(job.getMatchNum());// ���÷�������
				task.setPostNum(task.getInitNum());// ����Ҫ�ﵽ���ύ�����ڷ����ֵ
				task.setCanNum(task.getInitNum());// ���ÿɷ����ֵ
				task.setCreateTime(currentTime);// ��������ʱ��
				SystemConfig scoreConfig = systemConfigService.find("manual");
				task.setScore(scoreConfig.getValueDouble());// ���û���
				task.setTaskId(taskData.getTaskId());
				try {
					@SuppressWarnings("unused")
					SvgImage svgimg = new SvgImage(task.getMetricPoint());
					tasks.add(task);
				} catch (Exception e) {
					dataMap.put("exception", "metriPoint��ʽ����");
					dataMap.put("result", "false");
					dataFillStream(dataMap);
					return "success";
				}
				count++;
			}
			job.setTaskCount(count);// �������飨task������
			jobService.save(job);
			for (Task task : tasks) {
				task.setJob(job);
				taskService.save(task);
			}
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
	 * �����������ֹ����á����ԡ�
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
	 * ������������ʱ���÷���ʧ�ܵĹ���
	 * 
	 * @return
	 */
	public String backTaskTimer() {

		return "success";
	}

	/**
	 * ���չ���
	 */
	public String recycleTaskByQuestion() {
		log.info("DataServer�����չ���recycleTaskByQuestion����" + "taskID=" + taskId + " ��������="
				+ recycleType);
		Map<String, Object> dataMap = new LinkedHashMap<String, Object>();
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
				if (task.getRation() == null || task.getRation() < task.getAccuracy()) {// ʵ����ȷ����С���趨����ȷ����
					map.put("status", 1);// ��ʾҪ����
				} else {
					map.put("status", 0);
				}
				content.add(map);
				task.setRecycleType(Integer.parseInt(recycleType));// ���û������ͣ�1=��ʱ����
				taskService.update(task);
			}
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
	 * ��Map<String, Object> dataMapת����json��ʽ,�����ݸ�InputStream
	 * 
	 * @param dataMap
	 */
	private void dataFillStream(Map<String, Object> dataMap) {
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		log.info("DataServer����Ӧ�������" + jsonStr);
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
