package com.hydom.task.service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.hydom.dao.DAOSupport;
import com.hydom.task.ebean.Job;
import com.hydom.task.ebean.Task;
import com.hydom.util.HttpSender;

@Service
public class JobServiceBean extends DAOSupport<Job> implements JobService {
	@Resource
	private TaskService taskService;

	@Override
	public Job findByTaskId(String taskId) {
		try {
			return (Job) em.createQuery(
					"select o from Job o where o.visible=?1 and o.taskId=?2")
					.setParameter(1, true).setParameter(2, taskId).getSingleResult();
		} catch (Exception e) {
			return null;
		}
	}

	public void postJob(long jobId) {
		Job job = (Job) em
				.createQuery(
						"select o from Job o where o.visible=?1 and o.id=?2 and o.taskFinishCount=o.taskCount")
				.setParameter(1, true).setParameter(2, jobId).getSingleResult();
		if (job != null) {// �ύ��ҵ����������
			if (postJob(job)) {
				job.setFeedback(true);
			} else {
				job.setFeedback(false);
			}
			this.update(job);
		}
	}

	/**
	 * ��ʱ�ύʧ�ܵ�����
	 */
	@SuppressWarnings( { "unchecked" })
	public void feedback() {
		List<Job> jobs = em
				.createQuery(
						"select o from Job o where o.visible=?1 and feedback=?2 and o.taskFinishCount=o.taskCount")
				.setParameter(1, true).setParameter(2, false).getResultList();
		for (Job job : jobs) {
			if (postJob(job)) {
				job.setFeedback(true);
				this.update(job);
			}
		}

	}

	/**
	 * �ύָ������ҵ����������
	 * 
	 * @param job
	 * @return
	 */
	private boolean postJob(Job job) {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("taskId", job.getTaskId());
		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		List<Task> tasks = taskService.listByTaskId(job.getTaskId());
		for (Task task : tasks) {
			Map<String, String> map = new LinkedHashMap<String, String>();
			map.put("lineNo", task.getLineNo() + "");
			map.put("inLineNo", task.getInLineNo() + "");
			map.put("inLineNo", task.getResult());
			if (task.getRation() >= task.getAccuracy()) {// ʵ�ʱ���>ָ������ȷ�������������
				map.put("status", "false");
			} else {
				map.put("status", "true");
			}
			list.add(map);
		}
		dataMap.put("message", list);
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		String path = ""; // ��ַ
		Map<String, String> params = new HashMap<String, String>();
		params.put("jsonStr", jsonStr);
		InputStream inputStream;
		try {
			inputStream = HttpSender.postFromHttpClient(path, params, "UTF-8");
			String result = IOUtils.toString(inputStream, "UTF-8");
			if (result != null && result.contains("true")) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
}
