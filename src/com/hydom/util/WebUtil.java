package com.hydom.util;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hydom.account.ebean.Account;

/**
 * 
 * @author www.hydom.cn [heou]
 * 
 */
public class WebUtil {
	/**
	 * ��ȡ��¼�ʻ�
	 */
	public static Account getlogonAccount(HttpServletRequest request) {
		return (Account) request.getSession().getAttribute("loginAccount");
	}

	/***************************************************************************
	 * ��ȡURI��·��,��·��Ϊhttp://www.taobao.com/action/post.htm?method=add,
	 * �õ���ֵΪ"/action/post.htm"
	 * 
	 * @param request
	 * @return
	 */
	public static String getRequestURI(HttpServletRequest request) {
		return request.getRequestURI();
	}

	/**
	 * ��ȡ�ͻ��˵�IP��ַ
	 */
	public static String getClientIP(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		return ip;
	}

	/**
	 * ���cookie
	 * 
	 * @param response
	 * @param name
	 *            ��cookie������
	 * @param value
	 *            ��cookie��ֵ
	 * @param 
	 *        maxAge��cookie��ŵ�ʱ��(����Ϊ��λ,����������,��3*24*60*60;���ֵΪ0,cookie����������رն����)
	 */
	public static void addCookie(HttpServletResponse response, String name,
			String value, int maxAge) {
		try {
			Cookie cookie = new Cookie(name, value);
			cookie.setPath("/");
			if (maxAge > 0) {
				cookie.setMaxAge(maxAge);
			}
			response.addCookie(cookie);
		} catch (Exception e) {
		}

	}

	/**
	 * 
	 * ��ȡcookie��ֵ
	 * 
	 * @param name
	 *            :cookie������
	 */
	public static String getCookieValueByName(HttpServletRequest request,
			String name) {
		Map<String, Cookie> cookieMap = WebUtil.readCookieMap(request);
		if (cookieMap.containsKey(name)) {
			Cookie cookie = (Cookie) cookieMap.get(name);
			return cookie.getValue();
		} else {
			return null;
		}
	}

	/**
	 * ����cookie����ɾ����Ӧ��cookie
	 * 
	 * @param name
	 */
	public static void delCookie(HttpServletRequest request,
			HttpServletResponse response, String name) {
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie c : cookies) {
				if (c.getName().equals(name)) {
					c.setMaxAge(0);
					c.setPath("/"); // ����Ҳ����Ҫ���������ú����ʱ���õ�·����ͬ
					response.addCookie(c);
					break;
				}
			}
		}
	}

	public static Map<String, Cookie> readCookieMap(HttpServletRequest request) {
		Map<String, Cookie> cookieMap = new HashMap<String, Cookie>();
		Cookie[] cookies = request.getCookies();
		if (null != cookies) {
			for (int i = 0; i < cookies.length; i++) {
				cookieMap.put(cookies[i].getName(), cookies[i]);
			}
		}
		return cookieMap;
	}

	/**
	 * html�������ʵ���滻
	 * 
	 * @param str
	 * @return
	 */
	public static String htmlReplace(String str) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			switch (c) {
			case '<':
				sb.append("&lt;");
				break;
			case '>':
				sb.append("&gt;");
				break;
			case '\n':
				sb.append("<br/>");
				break;
			case '\r':
				break;
			case '&':
				sb.append("&amp;");
				break;
			case ' ':
				sb.append("&nbsp;");
				break;
			default:
				sb.append(c);
			}
		}
		return sb.toString();
	}

	public static String htmlReplaceReverse(String str) {
		return str.replaceAll("<br/>", "\n").replaceAll("&gt;", ">")
				.replaceAll("&lt;", "<").replaceAll("&amp;", ";").replaceAll(
						"&nbsp;", " ");
	}

	/**
	 * ����JS����
	 */
	public static String filterJS(String str) {
		String regEx_script = "<[\\s]*?script[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?script[\\s]*?>"; // ����script��������ʽ{��<script[^>]*?>[\\s\\S]*?<\\/script>
		Pattern p_script = Pattern.compile(regEx_script,
				Pattern.CASE_INSENSITIVE);
		Matcher m_script = p_script.matcher(str);
		return m_script.replaceAll(""); // ����script��ǩ
	}

	/**
	 * ȥ��html����:��ȡ���ı�
	 * 
	 * @param inputString
	 * @return
	 */
	public static String HtmltoText(String inputString) {
		String htmlStr = inputString; // ��html��ǩ���ַ���
		String textStr = "";
		java.util.regex.Pattern p_script;
		java.util.regex.Matcher m_script;
		java.util.regex.Pattern p_style;
		java.util.regex.Matcher m_style;
		java.util.regex.Pattern p_html;
		java.util.regex.Matcher m_html;
		java.util.regex.Pattern p_ba;
		java.util.regex.Matcher m_ba;

		try {
			String regEx_script = "<[\\s]*?script[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?script[\\s]*?>"; // ����script��������ʽ{��<script[^>]*?>[\\s\\S]*?<\\/script>
			// }
			String regEx_style = "<[\\s]*?style[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?style[\\s]*?>"; // ����style��������ʽ{��<style[^>]*?>[\\s\\S]*?<\\/style>
			// }
			String regEx_html = "<[^>]+>"; // ����HTML��ǩ��������ʽ
			String patternStr = "\\s+";

			p_script = Pattern.compile(regEx_script, Pattern.CASE_INSENSITIVE);
			m_script = p_script.matcher(htmlStr);
			htmlStr = m_script.replaceAll(""); // ����script��ǩ

			p_style = Pattern.compile(regEx_style, Pattern.CASE_INSENSITIVE);
			m_style = p_style.matcher(htmlStr);
			htmlStr = m_style.replaceAll(""); // ����style��ǩ

			p_html = Pattern.compile(regEx_html, Pattern.CASE_INSENSITIVE);
			m_html = p_html.matcher(htmlStr);
			htmlStr = m_html.replaceAll(""); // ����html��ǩ

			p_ba = Pattern.compile(patternStr, Pattern.CASE_INSENSITIVE);
			m_ba = p_ba.matcher(htmlStr);
			htmlStr = m_ba.replaceAll(""); // ���˿ո�

			textStr = htmlStr;

		} catch (Exception e) {
			System.err.println("Html2Text: " + e.getMessage());
		}
		return textStr;// �����ı��ַ���
	}

}
