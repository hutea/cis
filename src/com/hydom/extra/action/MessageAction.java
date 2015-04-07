package com.hydom.extra.action;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.dao.PageView;
import com.hydom.extra.ebean.Message;
import com.hydom.extra.service.MessageService;

@Controller
@Scope(value = "prototype")
public class MessageAction {
	@Resource
	private MessageService messageService;
	private Message message;
	private int page = 1;
	private int maxresult = 10;
	private int m = 4;// 识别选中导航菜单
	private int  timeLive ;

	private HttpServletRequest request;

	public String list() {
		request = ServletActionContext.getRequest();
		PageView<Message> pageView = new PageView<Message>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "asc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 ");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		pageView.setQueryResult(messageService.getScrollData(pageView.getFirstResult(),
				maxresult, jpql.toString(), params.toArray(), orderby));
		request.setAttribute("pageView", pageView);
		return "success";
	}

	public String add() {
		messageService.save(message);
		// PushServer.sendPush(message.getTitle(), message.getContent());
		return "success";
	}


	public static void main(String[] args) {
		//[Ljava.lang.String;@10fbe75'
		String [] str ={"1","2"};
		System.out.println(str); 
	}
	
	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public int getM() {
		return m;
	}

	public void setM(int m) {
		this.m = m;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getTimeLive() {
		return timeLive;
	}

	public void setTimeLive(int timeLive) {
		this.timeLive = timeLive;
	}

}
