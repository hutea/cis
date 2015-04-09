package com.hydom.account.action;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.dao.PageView;

@Controller
@Scope(value = "prototype")
public class UserManagerAction {
	@Resource
	private AccountService accountService;

	private HttpServletRequest request;

	private int maxresult = 10;
	private int page = 1;
	private int m = 2;// 识别选中导航菜单
	private String query_username;
	private String query_phone;
	private String query_createTime;

	private long accid;

	public String userList() {
		request = ServletActionContext.getRequest();
		PageView<Account> pageView = new PageView<Account>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 and o.type=?2");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(1);
		pageView.setQueryResult(accountService.getScrollData(pageView.getFirstResult(),
				maxresult, jpql.toString(), params.toArray(), orderby));
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

	public String getQuery_username() {
		return query_username;
	}

	public void setQuery_username(String queryUsername) {
		query_username = queryUsername;
	}

	public String getQuery_phone() {
		return query_phone;
	}

	public void setQuery_phone(String queryPhone) {
		query_phone = queryPhone;
	}

	public String getQuery_createTime() {
		return query_createTime;
	}

	public void setQuery_createTime(String queryCreateTime) {
		query_createTime = queryCreateTime;
	}

	public long getAccid() {
		return accid;
	}

	public void setAccid(long accid) {
		this.accid = accid;
	}

}
