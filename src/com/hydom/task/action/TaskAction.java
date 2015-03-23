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
import com.hydom.task.service.TaskService;

@Controller
@Scope(value = "prototype")
public class TaskAction {
	@Resource
	private TaskService TaskService;
	private HttpServletRequest request;

	private int maxresult = 1;
	private int page = 1;
	private int m=1;// 识别选中导航菜单
	private String querytype;
	private String queryContent;

	public String list() {
		request = ServletActionContext.getRequest();
		PageView<Task> pageView = new PageView<Task>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "asc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 ");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		if (queryContent != null && !"".equals(querytype)) {
			if (querytype.equals("1")) {
				jpql.append(" and o.person like?" + (params.size() + 1));
				params.add("%" + queryContent + "%");
			}
			if (querytype.equals("2")) {
				jpql.append(" and o.number like?" + (params.size() + 1));
				params.add("%" + queryContent + "%");
			}

		}
		pageView.setQueryResult(TaskService.getScrollData(pageView.getFirstResult(), maxresult,
				jpql.toString(), params.toArray(), orderby));
		request.setAttribute("pageView", pageView);
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
