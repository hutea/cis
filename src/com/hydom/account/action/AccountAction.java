package com.hydom.account.action;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import com.hydom.util.HelperUtil;

@Controller
@Scope(value = "prototype")
public class AccountAction {
	@Resource
	private AccountService accountService;

	private InputStream inputStream;

	private HttpServletRequest request;

	private int maxresult = 10;
	private int page = 1;
	private int m = 4;// 识别选中导航菜单
	private Account account;
	private String query_username;
	private String query_phone;
	private String query_createTime;

	private long accid;

	public String list() {
		request = ServletActionContext.getRequest();
		PageView<Account> pageView = new PageView<Account>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 and o.type=?2");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(2);
		if (query_username != null && !"".equals(query_username)) {
			jpql.append(" and o.username like ?" + (params.size() + 1));
			params.add("%" + query_username + "%");
		}
		if (query_phone != null && !"".equals(query_phone)) {
			jpql.append(" and o.phone like ?" + (params.size() + 1));
			params.add("%" + query_phone + "%");
		}
		if (query_createTime != null && !"".equals(query_createTime)) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date startDate = null;
			Date endDate = null;
			try {
				startDate = sdf.parse(query_createTime);
				endDate = HelperUtil.addDays(startDate, 1);
			} catch (ParseException e) {
				startDate = HelperUtil.firstDayThisMonth();
				endDate = HelperUtil.lastDayThisMonth();
			}
			jpql.append(" and o.createTime>=?" + (params.size() + 1));
			params.add(startDate);
			jpql.append(" and o.createTime<?" + (params.size() + 1));
			params.add(endDate);
		}
		pageView.setQueryResult(accountService.getScrollData(pageView.getFirstResult(),
				maxresult, jpql.toString(), params.toArray(), orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	public String addUI() {
		return "success";
	}

	public String add() {
		account.setCreateTime(new Date());
		account.setType(2);
		accountService.save(account);
		return "success";
	}

	public String editUI() {
		account = accountService.find(accid);
		return "success";
	}

	public String edit() {
		Account entity = accountService.find(accid);
		entity.setPassword(account.getPassword());
		entity.setNickname(account.getNickname());
		entity.setPhone(account.getPhone());
		accountService.update(entity);
		return "success";
	}

	public String delete() {
		try {
			Account entity = accountService.find(accid);
			entity.setVisible(false);
			accountService.update(entity);
			inputStream = new ByteArrayInputStream("1".getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "success";
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
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

	public long getAccid() {
		return accid;
	}

	public void setAccid(long accid) {
		this.accid = accid;
	}

	public Account getAccount() {
		return account;
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

	public void setAccount(Account account) {
		this.account = account;
	}

}
