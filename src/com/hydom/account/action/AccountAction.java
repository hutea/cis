package com.hydom.account.action;

import java.io.ByteArrayInputStream;
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

	public String signup() {

		try {
			//inputStream = new ByteArrayInputStream(data.getBytes("UTF-8"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}

}
