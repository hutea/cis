package com.hydom.credit.action;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.credit.ebean.ScoreRecord;
import com.hydom.credit.service.ScoreRecordService;
import com.hydom.dao.PageView;

@Controller
@Scope(value = "prototype")
public class ScoreRecordAction {
	@Resource
	private ScoreRecordService scoreRecordService;
	private HttpServletRequest request;

	private ScoreRecord scoreRecord;
	private int maxresult = 10;
	private int page = 1;
	private long srid;
	private long accid;
	private int m = 2;// 识别选中导航菜单
	private Log log = LogFactory.getLog("manageOPLog");

	public String list() {
		request = ServletActionContext.getRequest();
		PageView<ScoreRecord> pageView = new PageView<ScoreRecord>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 ");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		pageView
				.setQueryResult(scoreRecordService.getScrollData(pageView
						.getFirstResult(), maxresult, jpql.toString(), params.toArray(),
						orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	/**
	 * 个人积分 消费列表
	 * 
	 * @return
	 */
	public String listUse() {
		request = ServletActionContext.getRequest();
		PageView<ScoreRecord> pageView = new PageView<ScoreRecord>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer(
				"o.visible=?1 and o.account.id=?2 and o.sign=?3");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(accid);
		params.add(false);
		pageView
				.setQueryResult(scoreRecordService.getScrollData(pageView
						.getFirstResult(), maxresult, jpql.toString(), params.toArray(),
						orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	/**
	 * 个人积分 积分列表
	 * 
	 * @return
	 */
	public String listHeap() {
		request = ServletActionContext.getRequest();
		PageView<ScoreRecord> pageView = new PageView<ScoreRecord>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer(
				"o.visible=?1 and o.account.id=?2 and o.sign=?3");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(accid);
		params.add(true);
		pageView
				.setQueryResult(scoreRecordService.getScrollData(pageView
						.getFirstResult(), maxresult, jpql.toString(), params.toArray(),
						orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	public ScoreRecord getScoreRecord() {
		return scoreRecord;
	}

	public void setScoreRecord(ScoreRecord scoreRecord) {
		this.scoreRecord = scoreRecord;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public long getSrid() {
		return srid;
	}

	public void setSrid(long srid) {
		this.srid = srid;
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

}
