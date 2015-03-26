package com.hydom.task.action;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.dao.PageView;
import com.hydom.task.ebean.Task;
import com.hydom.task.service.JobService;
import com.hydom.task.service.TaskService;

@Controller
@Scope(value = "prototype")
public class JobAction {
	@Resource
	private TaskService TaskService;
	@Resource
	private JobService jobService;

	private HttpServletRequest request;

	private int maxresult = 1;
	private int page = 1;
	private int m = 1;// 识别选中导航菜单
	private String querytype;
	private String queryContent;

	public String list() {
		// ...

		return "success";
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getM() {
		return m;
	}

	public void setM(int m) {
		this.m = m;
	}

}
