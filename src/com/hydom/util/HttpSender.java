package com.hydom.util;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;

public class HttpSender {

	/**
	 * ����httpGet����
	 * 
	 * @param path
	 * @param params
	 * @param encoding
	 * @return
	 * @throws Exception
	 */
	public static String sendGetRequest(String path, Map<String, String> params,
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
			String result = IOUtils.toString(in);
			System.out.println("com.hydom.util.HttpSender:sendGetRequst-->" + result);
			return result;
		} else {
			throw new Exception("connection fail");
		}
	}

	/**
	 * �ύ���ݵ�������
	 * 
	 * @param path
	 *            ����·��
	 * @param params
	 *            ������� keyΪ������,valueΪ����ֵ
	 * @param encode
	 *            ����
	 */
	public static InputStream postFromHttpClient(String path, Map<String, String> params,
			String encode) throws Exception {
		List<NameValuePair> formparams = new ArrayList<NameValuePair>();// ���ڴ���������
		for (Map.Entry<String, String> entry : params.entrySet()) {
			formparams.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
		}
		UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams, encode);
		HttpPost httppost = new HttpPost(path);
		httppost.setEntity(entity);
		HttpClient httpclient = new DefaultHttpClient();  // �����������
		HttpResponse response = httpclient.execute(httppost);// ����post����
		return response.getEntity().getContent();
	}
	
	
	public static void main(String[] args) {
		String path ="http://localhost:8090/cis/app/post_note.action";
		Map<String, String> map = new HashMap<String, String>();
		map.put("tid", "213");
		map.put("result_str", "���ġ���");
		try {
			postFromHttpClient(path, map, "utf-8");
		} catch (Exception e) {
			e.printStackTrace();
		} 
	}
}
