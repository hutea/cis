package com.hydom.account.action;

import java.io.InputStream;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.hydom.account.service.AccountService;

@Controller
@Scope(value = "prototype")
public class AccountAction {
	@Resource
	private AccountService accountService;
	
	private InputStream inputStream;

	public String userList() {
		return "success";
	}

	public String list() {
		return "success";
	}

	public String signup() {
		return "success";
	}

	public String signin() {
		return "success";
	}

}
