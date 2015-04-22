package com.hydom.account.action;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.util.IpLook;
import com.hydom.util.WebUtil;

@Controller
@Scope(value = "prototype")
public class LoginAndExitAction {
	@Resource
	private AccountService accountService;

	private String username;
	private String password;
	private int rememberMe;
	private Log log = LogFactory.getLog("manageOPLog");

	public String signin() {
		HttpServletRequest request = ServletActionContext.getRequest();
		Account account = accountService.findByUP(username, password);
		if (account != null && account.getType() == 2) {// ��¼�ɹ�
			HttpServletResponse response = ServletActionContext.getResponse();
			if (rememberMe == 1) {// дcookie
				WebUtil.addCookie(response, "username", username, 7 * 24 * 3600);// ����7��
				WebUtil.addCookie(response, "password", password, 7 * 24 * 3600);// ����7��
				WebUtil.addCookie(response, "rememberMe", "1", 7 * 24 * 3600);// ����7��
			} else {
				WebUtil.delCookie(request, response, "username");
				WebUtil.delCookie(request, response, "password");
				WebUtil.delCookie(request, response, "rememberMe");
			}
			HttpSession session = request.getSession();
			// session.setMaxInactiveInterval(2 * 60 * 60); // ������Чʱ��Ϊ2*60����:����tomcat������Ŀ��������
			account.setLastSigninTime(new Date());
			String lastIP = WebUtil.getClientIP(request);
			String lastSignPosition = IpLook.sinaIpLookup(lastIP);
			account.setLastSignPosition(lastIP);
			account.setLastSignPosition(lastSignPosition);
			accountService.update(account);
			session.setAttribute("loginAccount", account);
			log.info("��̨����Ա��¼��Ϣ����¼IP��" + lastIP + "������¼λ�á�" + lastSignPosition + "��");
			return "success";
		} else {
			request.setAttribute("error", "�û������������");
			return "fail";
		}
	}

	public String signout() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		Account loginAccount = (Account) session.getAttribute("loginAccount");
		if (loginAccount != null) {
			Account entity = accountService.find(loginAccount.getId());
			entity.setLastSignoutTime(new Date());
			accountService.update(entity);
		}
		session.removeAttribute("loginAccount");
		return "success";
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getRememberMe() {
		return rememberMe;
	}

	public void setRememberMe(int rememberMe) {
		this.rememberMe = rememberMe;
	}

}
