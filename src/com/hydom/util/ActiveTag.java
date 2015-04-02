package com.hydom.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.TagSupport;

public class ActiveTag extends TagSupport {
	private static final long serialVersionUID = 1L;
	private String url;
	private String param;

	@Override
	public int doStartTag() throws JspException {
		try {
			boolean resultURL = false;
			HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();
			String requestUrl = request.getServletPath();
			if (requestUrl.contains(url)) {
				resultURL = true;
			} else {
				resultURL = false;
			}
			System.out.println("1:" + requestUrl);
			System.out.println("2:" + url);
			boolean resultParam = false;
			if (param != null && request.getQueryString() != null
					&& request.getQueryString().length() > 0) {
				System.out.println("3:" + param);
				System.out.println("4:" + request.getQueryString());
				if (request.getQueryString().contains(param)) {
					resultParam = true;
				} else {
					resultParam = false;
				}
			} else {
				resultParam = true;
			}
			return (resultURL && resultParam) ? EVAL_BODY_INCLUDE : SKIP_BODY;
		} catch (Exception e) {
			return SKIP_BODY;
		}
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		System.out.println("~~" + url);
		this.url = url;
	}

	public String getParam() {
		return param;
	}

	public void setParam(String param) {
		System.out.println("~~" + param);
		this.param = param;
	}

}
