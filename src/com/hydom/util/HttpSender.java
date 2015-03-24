package com.hydom.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;

public class HttpSender {

	/**
	 * ∑¢ÀÕHttp«Î«Û
	 * 
	 * @param path
	 * @param params
	 * @param encoding
	 * @return
	 * @throws Exception
	 */
	public static boolean sendGetRequest(String path, Map<String, String> params,
			String encoding) throws Exception {
		StringBuffer url = new StringBuffer(path);
		url.append("?");
		for (Map.Entry<String, String> entry : params.entrySet()) {
			url.append(entry.getKey());
			url.append("=");
			url.append(URLEncoder.encode(entry.getValue(), encoding));
			url.append("&");
		}
		url.deleteCharAt(url.length() - 1);
		HttpURLConnection conn = (HttpURLConnection) new URL(url.toString())
				.openConnection();
		conn.setConnectTimeout(5000);
		conn.setRequestMethod("GET");
		if (conn.getResponseCode() == 200) {
			InputStream in = conn.getInputStream();
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in,
					"gbk"));
			String str = bufferedReader.readLine();
			StringBuffer sb = new StringBuffer(str);
			while (str != null) {
				str = bufferedReader.readLine();
				sb.append(str);
			}
			int start = sb.indexOf("=") + 1;
			int end = sb.indexOf("&");
			int result = Integer.parseInt(sb.substring(start, end));
			if (result == 0) {
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
