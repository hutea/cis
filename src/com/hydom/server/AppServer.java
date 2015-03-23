package com.hydom.server;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.swing.text.StyledEditorKit.BoldAction;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.extra.service.MessageCodeService;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;
import com.hydom.task.service.TaskRecordService;

/**
 * 负责与客户端进行数据交互
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Controller
@Scope(value = "prototype")
public class AppServer {
	@Resource
	private AccountService accountService;
	@Resource
	private MessageCodeService messageCodeService;
	@Resource
	private TaskRecordService taskRecordService;

	private String username;
	private String password;
	private String code;
	private String uid;// 用户ID
	private String tid;// 任务ID
	private String result_str;// 识别结果串
	private InputStream inputStream;

	public String signup() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			if (code.equals(messageCodeService.find(username).getCode())) { // 验证码通过
				Account account = new Account(username, password, username);
				accountService.save(account);
				dataMap.put("result", 1);
			} else {
				dataMap.put("result", 0);
			}
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	public String signin() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.findByUP(username, password);
		if (account != null) { // 登录成功
			dataMap.put("result", 1);
			dataMap.put("username", account.getUsername());
			dataMap.put("sname", account.getNickname());
			dataMap.put("uid", account.getId());
		} else {
			dataMap.put("result", 0);
			dataMap.put("username", "");
			dataMap.put("sname", "");
			dataMap.put("uid", "");
		}
		dataFillStream(dataMap);
		return "success";
	}

	public String fetchNote() {
		TaskRecord taskRecord = taskRecordService.fetchTaskRecord(uid);
		Task task = taskRecord.getTask();
		String data = "{'x':234,'y':1346},{'x':232,'y':1347},{'x':-1,'y':0},{'x':229,'y':1345},{'x':229,'y':1347},{'x':229,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':231,'y':1347},{'x':236,'y':1346},{'x':241,'y':1345},{'x':262,'y':1339},{'x':273,'y':1337},{'x':275,'y':1337},{'x':275,'y':1338},{'x':271,'y':1342},{'x':-1,'y':0},{'x':247,'y':1348},{'x':246,'y':1354},{'x':248,'y':1361},{'x':249,'y':1368},{'x':250,'y':1384},{'x':250,'y':1402},{'x':249,'y':1405},{'x':242,'y':1399},{'x':238,'y':1394},{'x':235,'y':1388},{'x':233,'y':1382},{'x':-1,'y':0},{'x':261,'y':1353},{'x':261,'y':1355},{'x':261,'y':1358},{'x':260,'y':1364},{'x':260,'y':1370},{'x':260,'y':1375},{'x':261,'y':1380},{'x':262,'y':1384},{'x':266,'y':1388},{'x':268,'y':1389},{'x':271,'y':1387},{'x':271,'y':1377},{'x':270,'y':1374},{'x':268,'y':1373},{'x':263,'y':1373},{'x':259,'y':1374},{'x':249,'y':1378},{'x':-1,'y':0},{'x':226,'y':1349},{'x':228,'y':1350},{'x':228,'y':1350},{'x':228,'y':1350},{'x':227,'y':1351},{'x':226,'y':1353},{'x':218,'y':1362},{'x':204,'y':1380},{'x':204,'y':1382},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1393},{'x':228,'y':1393},{'x':-1,'y':0},{'x':176,'y':1360},{'x':188,'y':1365},{'x':197,'y':1370},{'x':200,'y':1373},{'x':192,'y':1399},{'x':187,'y':1406},{'x':191,'y':1407},{'x':195,'y':1407},{'x':199,'y':1407},{'x':205,'y':1406},{'x':209,'y':1405},{'x':214,'y':1402},{'x':-1,'y':0},{'x':296,'y':1354},{'x':299,'y':1355},{'x':299,'y':1356},{'x':288,'y':1366},{'x':283,'y':1371},{'x':278,'y':1378},{'x':280,'y':1379},{'x':289,'y':1382},{'x':300,'y':1383},{'x':302,'y':1384},{'x':303,'y':1385},{'x':304,'y':1386},{'x':303,'y':1387},{'x':-1,'y':0},{'x':311,'y':1346},{'x':314,'y':1346},{'x':317,'y':1346},{'x':325,'y':1350},{'x':327,'y':1354},{'x':326,'y':1357},{'x':321,'y':1364},{'x':312,'y':1370},{'x':306,'y':1372},{'x':317,'y':1375},{'x':326,'y':1380},{'x':329,'y':1383},{'x':331,'y':1386},{'x':330,'y':1387},{'x':326,'y':1391},{'x':323,'y':1393},{'x':318,'y':1394},{'x':303,'y':1395},{'x':294,'y':1395},{'x':-1,'y':0}";
		System.out.println(parse(data));
		HttpServletRequest request = ServletActionContext.getRequest();
		request.setAttribute("data", parse(data));
		return "success";
	}

	public String postNote() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			TaskRecord entity = taskRecordService.find(tid);
			entity.setResult(result_str);
			entity.setPostTime(new Date());
			boolean overtime = System.currentTimeMillis() - entity.getMatchTime().getTime() > entity
					.getTask().getRecycle();
			if (overtime) {// 超时
				entity.setIdentState(0);// 设置状态为：超时
				taskRecordService.update(entity);
				dataMap.put("result", "0");
			} else {
				entity.setIdentState(1);
				taskRecordService.update(entity);
				dataMap.put("result", "1");
			}
		} catch (Exception e) {
			dataMap.put("result", "0");
		}
		dataFillStream(dataMap);
		return "success";
	}

	public String breakNote() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Account entity = accountService.find(uid);
			entity.setState(0);
			accountService.update(entity);
			dataMap.put("result", 1);
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	
	
	
	//
	public String showImage() {
		TaskRecord taskRecord = taskRecordService.find(tid);
		Task task = taskRecord.getTask();
		return "success";
	}

	private static SvgImage parse(String data) {
		SvgImage svg = new SvgImage();
		StringBuffer result = new StringBuffer();
		String[] arys = data.split(",\\{'x':-1,'y':0\\}");
		for (String ary : arys) {// 每笔
			// System.out.println(ary);
			if (ary.startsWith(",")) {
				ary = ary.replaceFirst(",", "");
			}
			// System.out.println("-------"+ary);
			String[] ss = ary.split("\\},");
			String p1 = "-1,0";
			int i = 0;
			for (String s : ss) {// 点
				String p2 = s.replace("{'x':", "").replace("'y':", "").replace("}", "");
				String[] xy1 = p1.split(",");
				String[] xy2 = p2.split(",");
				// System.out.println(p1+"---"+p2);
				// System.out.println(xy1[0]+" "+xy1[1]+"---"+xy2[0]+""+xy2[1]);

				String line = "<line x1=\"" + xy1[0] + "\" y1=\"" + xy1[1] + "\"" + " x2=\""
						+ xy2[0] + "\" y2=\"" + xy2[1]
						+ "\"  style=\"stroke:rgb(99,99,99);stroke-width:2\" />";
				if (Integer.valueOf(xy1[0]) < svg.getMinX()) {
					svg.setMinX(Integer.valueOf(xy1[0]));
				}
				if (Integer.valueOf(xy2[0]) < svg.getMinX()) {
					svg.setMinX(Integer.valueOf(xy2[0]));
				}

				if (Integer.valueOf(xy1[1]) < svg.getMinY()) {
					svg.setMinY(Integer.valueOf(xy1[1]));
				}
				if (Integer.valueOf(xy2[1]) < svg.getMinY()) {
					svg.setMinY(Integer.valueOf(xy2[1]));
				}
				if (i > 0) {
					result.append(line);
					// System.out.println(line);
				}
				i++;
				p1 = p2;
			}
		}
		svg.setData(result.toString());
		return svg;
	}

	public static void main(String[] args) {
		String data = "{'x':234,'y':1346},{'x':232,'y':1347},{'x':-1,'y':0},{'x':229,'y':1345},{'x':229,'y':1347},{'x':229,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':231,'y':1347},{'x':236,'y':1346},{'x':241,'y':1345},{'x':262,'y':1339},{'x':273,'y':1337},{'x':275,'y':1337},{'x':275,'y':1338},{'x':271,'y':1342},{'x':-1,'y':0},{'x':247,'y':1348},{'x':246,'y':1354},{'x':248,'y':1361},{'x':249,'y':1368},{'x':250,'y':1384},{'x':250,'y':1402},{'x':249,'y':1405},{'x':242,'y':1399},{'x':238,'y':1394},{'x':235,'y':1388},{'x':233,'y':1382},{'x':-1,'y':0},{'x':261,'y':1353},{'x':261,'y':1355},{'x':261,'y':1358},{'x':260,'y':1364},{'x':260,'y':1370},{'x':260,'y':1375},{'x':261,'y':1380},{'x':262,'y':1384},{'x':266,'y':1388},{'x':268,'y':1389},{'x':271,'y':1387},{'x':271,'y':1377},{'x':270,'y':1374},{'x':268,'y':1373},{'x':263,'y':1373},{'x':259,'y':1374},{'x':249,'y':1378},{'x':-1,'y':0},{'x':226,'y':1349},{'x':228,'y':1350},{'x':228,'y':1350},{'x':228,'y':1350},{'x':227,'y':1351},{'x':226,'y':1353},{'x':218,'y':1362},{'x':204,'y':1380},{'x':204,'y':1382},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1393},{'x':228,'y':1393},{'x':-1,'y':0},{'x':176,'y':1360},{'x':188,'y':1365},{'x':197,'y':1370},{'x':200,'y':1373},{'x':192,'y':1399},{'x':187,'y':1406},{'x':191,'y':1407},{'x':195,'y':1407},{'x':199,'y':1407},{'x':205,'y':1406},{'x':209,'y':1405},{'x':214,'y':1402},{'x':-1,'y':0},{'x':296,'y':1354},{'x':299,'y':1355},{'x':299,'y':1356},{'x':288,'y':1366},{'x':283,'y':1371},{'x':278,'y':1378},{'x':280,'y':1379},{'x':289,'y':1382},{'x':300,'y':1383},{'x':302,'y':1384},{'x':303,'y':1385},{'x':304,'y':1386},{'x':303,'y':1387},{'x':-1,'y':0},{'x':311,'y':1346},{'x':314,'y':1346},{'x':317,'y':1346},{'x':325,'y':1350},{'x':327,'y':1354},{'x':326,'y':1357},{'x':321,'y':1364},{'x':312,'y':1370},{'x':306,'y':1372},{'x':317,'y':1375},{'x':326,'y':1380},{'x':329,'y':1383},{'x':331,'y':1386},{'x':330,'y':1387},{'x':326,'y':1391},{'x':323,'y':1393},{'x':318,'y':1394},{'x':303,'y':1395},{'x':294,'y':1395},{'x':-1,'y':0}";
		System.out.println(parse(data));

		// Map<String, Object> data = new HashMap<String, Object>();
		// data.put("result", "1");
		// List<String> names = new ArrayList<String>();
		// names.add("jack");
		// names.add("tom");
		// names.add("lily");
		// data.put("names", names);
		// Gson gson = new Gson();
		// System.out.println(gson.toJson(names));

	}

	/**
	 * 将Map<String, Object> dataMap转换成json格式,并传递给InputStream
	 * 
	 * @param dataMap
	 */
	private void dataFillStream(Map<String, Object> dataMap) {
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		try {
			inputStream = new ByteArrayInputStream(jsonStr.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

}
