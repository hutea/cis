package com.hydom.server;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.credit.ebean.Trophy;
import com.hydom.credit.ebean.TrophyRecord;
import com.hydom.credit.service.TrophyRecordService;
import com.hydom.credit.service.TrophyService;
import com.hydom.extra.ebean.Message;
import com.hydom.extra.ebean.Sense;
import com.hydom.extra.service.MessageService;
import com.hydom.extra.service.SenseService;
import com.hydom.extra.service.ShortMessageService;
import com.hydom.extra.service.SystemConfigService;
import com.hydom.task.ebean.Task;
import com.hydom.task.ebean.TaskRecord;
import com.hydom.task.service.TaskRecordService;
import com.hydom.util.StringGenerator;

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
	private ShortMessageService shortMessageService;
	@Resource
	private TaskRecordService taskRecordService;
	@Resource
	private TrophyService trophyService;
	@Resource
	private TrophyRecordService trophyRecordService;
	@Resource
	private MessageService messageService;
	@Resource
	private SystemConfigService systemConfigService;
	@Resource
	private SenseService senseService;

	private String username;
	private String password;
	private String oripwd;// 原密码
	private String newpwd;// 新密码
	private String code;
	private long uid;// 用户ID
	private Long tid;// 任务ID[对应于TaskRecord ID]
	private String result_str;// 识别结果串
	private int sign;// 识别的结果类型：1=正确 0=错误
	private int num;// 兑换奖品的数量
	private InputStream inputStream;
	private String nickname; // 用户昵称
	private String backname;// 银行名称
	private String backaccount;// 银行帐号
	private String pay;// 支付宝帐号
	private String contact;// 提交建议：联系方式
	private String content;// 提交建议：内容
	private String phone; // 发送短信时的电话

	/**
	 * 注册
	 * 
	 * @return
	 */
	public String signup() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			if (code.equals(shortMessageService.find(username).getCode())) { // 验证码通过
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

	/**
	 * 登录
	 * 
	 * @return
	 */
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
			dataMap.put("nickname", "");
			dataMap.put("uid", "");
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 获取分配的题目
	 * 
	 * @return
	 */
	public String fetchNote() {
		Map<String, Object> dataMap = new LinkedHashMap<String, Object>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		TaskRecord taskRecord = taskRecordService.fetchTaskRecord(uid);
		if (taskRecord != null) {
			dataMap.put("tid", taskRecord.getId());
			//处理MetricPoint对象
			String[] data = taskRecord.getTask().getMetricPoint().replaceAll("},", "}#")
					.split("#");
			List<Map<String, Integer>> list = new ArrayList<Map<String, Integer>>();
			for (String str : data) {
				String[] xy = str.split(",");
				String[] x = xy[0].split(":");
				String[] y = xy[1].split(":");
				Map<String, Integer> map = new LinkedHashMap<String, Integer>();
				map.put("x", Integer.parseInt(x[1]));
				map.put("y", Integer.parseInt(y[1].substring(0, y[1].length() - 1)));
				list.add(map);
			}
			dataMap.put("image", list);
			dataMap.put("timeout", taskRecord.getTask().getRecycleTime());
			dataMap.put("mathtime", sdf.format(taskRecord.getMatchTime()));
		} else {
			dataMap.put("tid", "");
			dataMap.put("image", "");
			dataMap.put("timeout", "");
			dataMap.put("mathtime", "");
		}
		// String data =
		// "{'x':234,'y':1346},{'x':232,'y':1347},{'x':-1,'y':0},{'x':229,'y':1345},{'x':229,'y':1347},{'x':229,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':230,'y':1347},{'x':231,'y':1347},{'x':236,'y':1346},{'x':241,'y':1345},{'x':262,'y':1339},{'x':273,'y':1337},{'x':275,'y':1337},{'x':275,'y':1338},{'x':271,'y':1342},{'x':-1,'y':0},{'x':247,'y':1348},{'x':246,'y':1354},{'x':248,'y':1361},{'x':249,'y':1368},{'x':250,'y':1384},{'x':250,'y':1402},{'x':249,'y':1405},{'x':242,'y':1399},{'x':238,'y':1394},{'x':235,'y':1388},{'x':233,'y':1382},{'x':-1,'y':0},{'x':261,'y':1353},{'x':261,'y':1355},{'x':261,'y':1358},{'x':260,'y':1364},{'x':260,'y':1370},{'x':260,'y':1375},{'x':261,'y':1380},{'x':262,'y':1384},{'x':266,'y':1388},{'x':268,'y':1389},{'x':271,'y':1387},{'x':271,'y':1377},{'x':270,'y':1374},{'x':268,'y':1373},{'x':263,'y':1373},{'x':259,'y':1374},{'x':249,'y':1378},{'x':-1,'y':0},{'x':226,'y':1349},{'x':228,'y':1350},{'x':228,'y':1350},{'x':228,'y':1350},{'x':227,'y':1351},{'x':226,'y':1353},{'x':218,'y':1362},{'x':204,'y':1380},{'x':204,'y':1382},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1392},{'x':229,'y':1393},{'x':228,'y':1393},{'x':-1,'y':0},{'x':176,'y':1360},{'x':188,'y':1365},{'x':197,'y':1370},{'x':200,'y':1373},{'x':192,'y':1399},{'x':187,'y':1406},{'x':191,'y':1407},{'x':195,'y':1407},{'x':199,'y':1407},{'x':205,'y':1406},{'x':209,'y':1405},{'x':214,'y':1402},{'x':-1,'y':0},{'x':296,'y':1354},{'x':299,'y':1355},{'x':299,'y':1356},{'x':288,'y':1366},{'x':283,'y':1371},{'x':278,'y':1378},{'x':280,'y':1379},{'x':289,'y':1382},{'x':300,'y':1383},{'x':302,'y':1384},{'x':303,'y':1385},{'x':304,'y':1386},{'x':303,'y':1387},{'x':-1,'y':0},{'x':311,'y':1346},{'x':314,'y':1346},{'x':317,'y':1346},{'x':325,'y':1350},{'x':327,'y':1354},{'x':326,'y':1357},{'x':321,'y':1364},{'x':312,'y':1370},{'x':306,'y':1372},{'x':317,'y':1375},{'x':326,'y':1380},{'x':329,'y':1383},{'x':331,'y':1386},{'x':330,'y':1387},{'x':326,'y':1391},{'x':323,'y':1393},{'x':318,'y':1394},{'x':303,'y':1395},{'x':294,'y':1395},{'x':-1,'y':0}";
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 提交识别结果
	 * 
	 * @return
	 */
	public String postNote() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		
		
		try {
			TaskRecord entity = taskRecordService.find(tid);
			entity.setResult(result_str);
			entity.setPostTime(new Date());
			boolean overtime = entity.getPostTime().getTime()
					- entity.getMatchTime().getTime() > entity.getTask().getRecycleTime();
			System.out.println(overtime);
			if (overtime) {// 超时
				entity.setIdentState(0);// 设置状态为：超时
				taskRecordService.update(entity);
				dataMap.put("result", 0);
			} else {
				entity.setIdentState(1);
				taskRecordService.update(entity);
				dataMap.put("result", 1);
			}
		} catch (Exception e) {
			e.printStackTrace();
			dataMap.put("result", "0");
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 休息一下
	 * 
	 * @return
	 */
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

	/**
	 * 同步识别结果：sign=1获取成功结果，sign=0获取失败结果
	 * 
	 * @return
	 */
	public String synNote() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		List<TaskRecord> records = taskRecordService.listTaskRecord(uid, sign);
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		for (TaskRecord tr : records) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("sign", tr.getSign());
			map.put("score", tr.getScore());
			map.put("post_time", sdf.format(tr.getPostTime()));
			map.put("image", tr.getSign());
			map.put("result_str", tr.getResult());
			map.put("right_str", tr.getTask().getResult());
			list.add(map);
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 获取奖品列表
	 * 
	 * @return
	 */
	public String listTrophy() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		if (account != null) {
			List<Trophy> trophys = trophyService.list();
			for (Trophy tr : trophys) {
				Map<String, Object> map = new LinkedHashMap<String, Object>();
				map.put("tid", tr.getId());
				map.put("name", tr.getName());
				map.put("detail", tr.getDetail());
				map.put("stock", tr.getStock());
				map.put("score", tr.getScore());
				map.put("type", tr.getType());
				map.put("image", tr.getImage());
				list.add(map);
			}
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 提交兑换奖品相关信息
	 * 
	 * @return
	 */
	public String exchangeTrophy() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account accout = accountService.find(uid);
		Trophy trophy = trophyService.find(tid);
		double theScore = num * trophy.getScore(); // 本次兑换需要的积分
		if (theScore > accout.getScore()) {// 如果用户积分不足够兑换，直接返回
			dataMap.put("result", "0");
			dataMap.put("rid", "");
			dataFillStream(dataMap);
			return "success";
		}
		TrophyRecord record = new TrophyRecord();
		record.setPostTime(new Date());// 设置提交兑换的时间为当前时间
		record.setAcount(accout);
		record.setNumber(num);
		record.setScore(theScore);
		record.setTrophy(trophy);
		trophyRecordService.save(record);
		dataMap.put("result", "1");
		System.out.println("ID:" + record.getId());
		dataMap.put("rid", record.getId());//
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 获取历史兑换列表
	 * 
	 * @return
	 */
	public String listHistory() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		List<TrophyRecord> records = trophyRecordService.list(uid);
		for (TrophyRecord tr : records) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("tid", tr.getTrophy().getId());
			map.put("name", tr.getTrophy().getName());
			map.put("type", tr.getTrophy().getType());
			map.put("detail", tr.getTrophy().getDetail());
			map.put("score", tr.getScore());
			map.put("image", tr.getTrophy().getImage());
			map.put("image", tr.getTrophy().getImage());
			map.put("post_time", sdf.format(tr.getPostTime()));
			list.add(map);
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 清空历史兑换记录
	 * 
	 * @return
	 */
	public String clearHistory() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			trophyRecordService.clear(uid);
			dataMap.put("result", 1);
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 统计相关兑换信息：
	 * 
	 * @return
	 */
	public String countExchange() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("total", trophyRecordService.countAll(uid));
		dataMap.put("month", trophyRecordService.countMonth(uid));
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 更新个人资料
	 * 
	 * @return
	 */
	public String updateProfile() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		if (nickname != null && !"".equals(nickname)) {
			account.setNickname(nickname);
			dataMap.put("nickname_result", 1);
		} else {
			dataMap.put("nickname_result", 0);
		}
		if (backname != null && !"".equals(backname)) {
			account.setBackname(backname);
			dataMap.put("backname_result", 1);
		} else {
			dataMap.put("backname_result", 0);
		}
		if (backaccount != null && !"".equals(backaccount)) {
			account.setBackaccount(backaccount);
			dataMap.put("backaccount_result", 1);
		} else {
			dataMap.put("backaccount_result", 0);
		}
		if (pay != null && !"".equals(pay)) {
			account.setPay(pay);
			dataMap.put("pay_result", 1);
		} else {
			dataMap.put("pay_result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 找回密码【重设密码】
	 * 
	 * @return
	 */
	public String resetPasword() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		String sysCode = shortMessageService.findCode(username); // username为手机号
		if (sysCode != null && sysCode.equals(code)) {// 判断验证码是否正确：验证码超时问题
			Account account = accountService.findByUsername(username);
			account.setPassword(password);
			accountService.update(account);
			dataMap.put("result", 1);
		} else {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 更改密码
	 * 
	 * @return
	 */
	public String updatePassword() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		if (oripwd != null && oripwd.equals(account.getPassword())) {// 原密码正确
			account.setPassword(newpwd);
			accountService.update(account);
			dataMap.put("result", 1);
		} else {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 获取消息列表
	 * 
	 * @return
	 */
	public String listMessage() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		List<Message> messages = messageService.list();
		for (Message tr : messages) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("title", tr.getTitle());
			map.put("content", tr.getContent());
			map.put("issuetime", sdf.format(tr.getIssueTime()));
			list.add(map);
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 获取积分说明，关于我们，客户电话
	 * 
	 * @return
	 */
	public String fetchAbout() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			dataMap.put("manual", systemConfigService.find("manual").getValueText());
		} catch (Exception e) {
			dataMap.put("manual", "");
		}
		try {
			dataMap.put("about", systemConfigService.find("about").getValueText());
		} catch (Exception e) {
			dataMap.put("about", "");
		}
		try {
			dataMap.put("phone", systemConfigService.find("phone").getValueText());
		} catch (Exception e) {
			dataMap.put("phone", "");
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 提交建议，意见
	 * 
	 * @return
	 */
	public String postSense() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Sense sense = new Sense();
			sense.setAcount(accountService.find(uid));
			sense.setContact(contact);
			sense.setContact(content);
			sense.setPostTime(new Date());
			senseService.save(sense);
			dataMap.put("result", 1);
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 软件更新
	 * 
	 * @return
	 */
	public String update() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", 0);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * 发送短信
	 * 
	 * @return
	 */
	public String sendCode() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String smscode = StringGenerator.SerialNumber(4);
			String smsconent = "本次验证码为：" + smscode;
			boolean sendresult = shortMessageService.sendCode(phone, smscode, smsconent);
			if (sendresult) {
				dataMap.put("code", smscode);
				dataMap.put("sendtime", sdf.format(new Date()));
			} else {
				dataMap.put("code", "");
				dataMap.put("sendtime", "");
			}
		} catch (Exception e) {
			dataMap.put("code", "");
			dataMap.put("sendtime", "");
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

	public static void main(String[] args) {
		String str = "{\"x\":234,\"y\":1346},{\"x\":232,\"y\":1347},{\"x\":-1,\"y\":0},{\"x\":229,\"y\":1345},{\"x\":229,\"y\":1347},{\"x\":229,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":231,\"y\":1347},{\"x\":236,\"y\":1346},{\"x\":241,\"y\":1345},{\"x\":262,\"y\":1339},{\"x\":273,\"y\":1337},{\"x\":275,\"y\":1337},{\"x\":275,\"y\":1338},{\"x\":271,\"y\":1342},{\"x\":-1,\"y\":0},{\"x\":247,\"y\":1348},{\"x\":246,\"y\":1354},{\"x\":248,\"y\":1361},{\"x\":249,\"y\":1368},{\"x\":250,\"y\":1384},{\"x\":250,\"y\":1402},{\"x\":249,\"y\":1405},{\"x\":242,\"y\":1399},{\"x\":238,\"y\":1394},{\"x\":235,\"y\":1388},{\"x\":233,\"y\":1382},{\"x\":-1,\"y\":0},{\"x\":261,\"y\":1353},{\"x\":261,\"y\":1355},{\"x\":261,\"y\":1358},{\"x\":260,\"y\":1364},{\"x\":260,\"y\":1370},{\"x\":260,\"y\":1375},{\"x\":261,\"y\":1380},{\"x\":262,\"y\":1384},{\"x\":266,\"y\":1388},{\"x\":268,\"y\":1389},{\"x\":271,\"y\":1387},{\"x\":271,\"y\":1377},{\"x\":270,\"y\":1374},{\"x\":268,\"y\":1373},{\"x\":263,\"y\":1373},{\"x\":259,\"y\":1374},{\"x\":249,\"y\":1378},{\"x\":-1,\"y\":0},{\"x\":226,\"y\":1349},{\"x\":228,\"y\":1350},{\"x\":228,\"y\":1350},{\"x\":228,\"y\":1350},{\"x\":227,\"y\":1351},{\"x\":226,\"y\":1353},{\"x\":218,\"y\":1362},{\"x\":204,\"y\":1380},{\"x\":204,\"y\":1382},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1393},{\"x\":228,\"y\":1393},{\"x\":-1,\"y\":0},{\"x\":176,\"y\":1360},{\"x\":188,\"y\":1365},{\"x\":197,\"y\":1370},{\"x\":200,\"y\":1373},{\"x\":192,\"y\":1399},{\"x\":187,\"y\":1406},{\"x\":191,\"y\":1407},{\"x\":195,\"y\":1407},{\"x\":199,\"y\":1407},{\"x\":205,\"y\":1406},{\"x\":209,\"y\":1405},{\"x\":214,\"y\":1402},{\"x\":-1,\"y\":0},{\"x\":296,\"y\":1354},{\"x\":299,\"y\":1355},{\"x\":299,\"y\":1356},{\"x\":288,\"y\":1366},{\"x\":283,\"y\":1371},{\"x\":278,\"y\":1378},{\"x\":280,\"y\":1379},{\"x\":289,\"y\":1382},{\"x\":300,\"y\":1383},{\"x\":302,\"y\":1384},{\"x\":303,\"y\":1385},{\"x\":304,\"y\":1386},{\"x\":303,\"y\":1387},{\"x\":-1,\"y\":0},{\"x\":311,\"y\":1346},{\"x\":314,\"y\":1346},{\"x\":317,\"y\":1346},{\"x\":325,\"y\":1350},{\"x\":327,\"y\":1354},{\"x\":326,\"y\":1357},{\"x\":321,\"y\":1364},{\"x\":312,\"y\":1370},{\"x\":306,\"y\":1372},{\"x\":317,\"y\":1375},{\"x\":326,\"y\":1380},{\"x\":329,\"y\":1383},{\"x\":331,\"y\":1386},{\"x\":330,\"y\":1387},{\"x\":326,\"y\":1391},{\"x\":323,\"y\":1393},{\"x\":318,\"y\":1394},{\"x\":303,\"y\":1395},{\"x\":294,\"y\":1395},{\"x\":-1,\"y\":0}";
		Gson gson = new Gson();
		String[] strq = { str };

		System.out.println(gson.toJson(strq));
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

	public String getOripwd() {
		return oripwd;
	}

	public void setOripwd(String oripwd) {
		this.oripwd = oripwd;
	}

	public String getNewpwd() {
		return newpwd;
	}

	public void setNewpwd(String newpwd) {
		this.newpwd = newpwd;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public Long getTid() {
		return tid;
	}

	public void setTid(Long tid) {
		this.tid = tid;
	}

	public String getResult_str() {
		return result_str;
	}

	public void setResult_str(String resultStr) {
		result_str = resultStr;
	}

	public int getSign() {
		return sign;
	}

	public void setSign(int sign) {
		this.sign = sign;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getBackname() {
		return backname;
	}

	public void setBackname(String backname) {
		this.backname = backname;
	}

	public String getBackaccount() {
		return backaccount;
	}

	public void setBackaccount(String backaccount) {
		this.backaccount = backaccount;
	}

	public String getPay() {
		return pay;
	}

	public void setPay(String pay) {
		this.pay = pay;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
