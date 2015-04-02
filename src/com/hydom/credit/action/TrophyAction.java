package com.hydom.credit.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.credit.ebean.Trophy;
import com.hydom.credit.service.TrophyService;
import com.hydom.dao.PageView;

@Controller
@Scope(value = "prototype")
public class TrophyAction {
	@Resource
	private TrophyService TrophyService;
	private HttpServletRequest request;

	private Trophy trophy;
	private int maxresult = 13;
	private int page = 1;
	private int id;
	private int m = 3;// 识别选中导航菜单
	private InputStream inputStream;
	private String querytype;
	private String queryContent;

	public String list() {
		request = ServletActionContext.getRequest();
		PageView<Trophy> pageView = new PageView<Trophy>(maxresult, page);
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
		pageView.setQueryResult(TrophyService.getScrollData(pageView.getFirstResult(),
				maxresult, jpql.toString(), params.toArray(), orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	public String addUI() {
		return "success";
	}

	public String add() {
		TrophyService.save(trophy);
		return "success";
	}

	public String editUI() {
		trophy = TrophyService.find(id);
		return "success";
	}

	public String edit() {
		Trophy entity = TrophyService.find(id);
		TrophyService.update(entity);
		return "success";
	}

	public String show() {
		trophy = TrophyService.find(id);
		return "success";
	}

	public String del() {
		trophy = TrophyService.find(id);
		trophy.setVisible(false);
		TrophyService.update(trophy);
		try {
			inputStream = new ByteArrayInputStream("1".getBytes("utf-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "success";
	}

	public Trophy getTrophy() {
		return trophy;
	}

	public void setTrophy(Trophy trophy) {
		this.trophy = trophy;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public String getQuerytype() {
		return querytype;
	}

	public void setQuerytype(String querytype) {
		this.querytype = querytype;
	}

	public String getQueryContent() {
		return queryContent;
	}

	public void setQueryContent(String queryContent) {
		this.queryContent = queryContent;
	}

	public int getM() {
		return m;
	}

	public void setM(int m) {
		this.m = m;
	}

}
