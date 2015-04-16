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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.hydom.account.ebean.Account;
import com.hydom.account.service.AccountService;
import com.hydom.credit.ebean.Trophy;
import com.hydom.credit.ebean.TrophyRecord;
import com.hydom.credit.service.TrophyRecordService;
import com.hydom.credit.service.TrophyService;
import com.hydom.dao.PageView;
import com.hydom.extra.ebean.Message;
import com.hydom.extra.ebean.MessageDeleteRecord;
import com.hydom.extra.ebean.Sense;
import com.hydom.extra.service.MessageDeleteRecordService;
import com.hydom.extra.service.MessageService;
import com.hydom.extra.service.SenseService;
import com.hydom.extra.service.ShortMessageService;
import com.hydom.extra.service.SystemConfigService;
import com.hydom.task.ebean.TaskRecord;
import com.hydom.task.service.TaskRecordService;
import com.hydom.util.HelperUtil;
import com.hydom.util.StringGenerator;

/**
 * ������ͻ��˽������ݽ���
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
	@Resource
	private MessageDeleteRecordService messageDeleteRecordService;
	private Log log = LogFactory.getLog("appServerLog");

	private String username;
	private String password;
	private String oripwd;// ԭ����
	private String newpwd;// ������
	private String code;// ��֤��
	private int codeType;// ��֤�����ͣ�1=ע����֤�� 2=�һ�������֤��
	private long uid;// �û�ID
	private long tid;// ����ID[��Ӧ��TaskRecord ID]
	private String result_str;// ʶ������
	private int sign;// ʶ��Ľ�����ͣ�1=��ȷ 0=����
	private int num;// �һ���Ʒ������
	private InputStream inputStream;
	private String nickname; // �û��ǳ�
	private String backname;// ��������
	private String backaccount;// �����ʺ�
	private String pay;// ֧�����ʺ�
	private String contact;// �ύ���飺��ϵ��ʽ
	private String content;// �ύ���飺����
	private String phone; // ���Ͷ���ʱ�ĵ绰
	private String jsonStr;//
	private int page = 1;
	private int maxresult = 10;

	/**
	 * ע��
	 * 
	 * @return
	 */
	public String signup() {
		log.info("App���û�ע�᡿��" + "�û���=" + username + " ����=" + password + " ��֤��="
				+ code);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			if (code != null
					&& code
							.equals(shortMessageService.find(username)
									.getCode())) { // ��֤��ͨ��

				if (!HelperUtil.isPhoneNumber(username)) {// �ֻ��Ÿ�ʽ����ȷ
					dataMap.put("result", 10);
				} else if (password.length() > 12 || password.length() < 6) {// ���볤�Ȳ����Ϲ淶
					dataMap.put("result", 11);
				} else {
					Account account = new Account(username, password, username);
					accountService.save(account);
					account.setType(1);// ����Ϊ��ͨ�û�
					dataMap.put("result", 1);
				}
			} else {
				dataMap.put("result", 2);// ��֤�����
			}
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��¼
	 * 
	 * @return
	 */
	public String signin() {
		log.info("App���û���¼����" + "�û���=" + username + " ����=" + password);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.findByUP(username, password);
		if (account != null) { // ��¼�ɹ�
			account.setLastSigninTime(new Date());
			accountService.update(account);
			dataMap.put("result", 1);
			dataMap.put("username", account.getUsername());
			dataMap.put("nickname", account.getNickname() == null ? ""
					: account.getNickname());
			dataMap.put("uid", account.getId());
		} else {
			dataMap.put("result", 4);// �û������������
			dataMap.put("username", "");
			dataMap.put("nickname", "");
			dataMap.put("uid", "");
		}
		dataFillStream(dataMap);
		return "success";
	}

	public String signout() {
		log.info("App���û��ǳ�����" + "�û���=" + username + " ����=" + password
				+ " �û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.findByUP(username, password);
		if (account != null) { // ע���ɹ�
			account.setState(2);// ����״̬Ϊע��
			account.setLastSignoutTime(new Date());
			accountService.update(account);
			dataMap.put("result", 1);
		} else {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��ȡ�������Ŀ
	 * 
	 * @return
	 */
	public String fetchNote() {
		log.info("App����ȡ������Ŀ����" + "uid=" + uid);
		Map<String, Object> dataMap = new LinkedHashMap<String, Object>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		TaskRecord taskRecord = taskRecordService.fetchTaskRecord(uid);
		if (taskRecord != null) {
			dataMap.put("tid", taskRecord.getId());
			// ����MetricPoint����
			String[] data = taskRecord.getTask().getMetricPoint().replaceAll(
					"},", "}#").split("#");
			List<Map<String, Integer>> lineList = new ArrayList<Map<String, Integer>>();
			for (String str : data) {
				Map<String, Integer> xy = SvgImage.xy(str);
				Map<String, Integer> map = new LinkedHashMap<String, Integer>();
				map.put("x", xy.get("x"));
				map.put("y", xy.get("y"));
				lineList.add(map);
			}
			dataMap.put("result", 1);
			dataMap.put("tid", taskRecord.getId());
			dataMap.put("image", lineList);
			dataMap.put("timeout", taskRecord.getTask().getRecycleTime());
			dataMap.put("mathtime", sdf.format(taskRecord.getMatchTime()));
		} else {
			dataMap.put("result", 0);
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
	 * �ύʶ����
	 * 
	 * @return
	 */
	public String postNote() {
		log.info("App���ύʶ��������" + "tid=" + tid + " ʶ����=" + result_str);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			TaskRecord record = taskRecordService.find(tid);
			if (record.getIdentState() != null && record.getIdentState() == 0) {// ��ʱ�����������˳�ʱ
				record.setPostTime(new Date());
				record.setResult(result_str);
				taskRecordService.update(record);
				dataMap.put("result", 8);
			} else if (record.getPostTime() != null) {// �ύ��
				dataMap.put("result", 13);// �ظ��ύ
			} else {
				int result = taskRecordService.processTaskRecord(tid,
						result_str);
				dataMap.put("result", result);
			}
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��Ϣһ��
	 * 
	 * @return
	 */
	public String breakNote() {
		log.info("App����Ϣһ�¡���" + "�û�ID=" + uid);
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
	 * ͬ��ʶ������sign=1��ȡ�ɹ������sign=0��ȡʧ�ܽ��
	 * 
	 * @return
	 */
	public String synNote() {
		log.info("App��ͬ��ʶ��������" + "�û�ID=" + uid + " sign=" + sign);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		PageView<TaskRecord> pageView = new PageView<TaskRecord>(maxresult,
				page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer(
				"o.visible=?1 and o.account.id=?2 and o.sign=?3");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(uid);
		params.add(sign);
		pageView.setQueryResult(taskRecordService.getScrollData(pageView
				.getFirstResult(), maxresult, jpql.toString(),
				params.toArray(), orderby));
		List<TaskRecord> records = pageView.getRecords();

		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		for (TaskRecord tr : records) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			/** ����MetricPoint����START **/
			String[] data = tr.getTask().getMetricPoint()
					.replaceAll("},", "}#").split("#");
			List<Map<String, Integer>> lineList = new ArrayList<Map<String, Integer>>();
			for (String str : data) {
				Map<String, Integer> xy = SvgImage.xy(str);
				Map<String, Integer> xymap = new LinkedHashMap<String, Integer>();
				xymap.put("x", xy.get("x"));
				xymap.put("y", xy.get("y"));
				lineList.add(xymap);
			}
			/** ����MetricPoint����END **/
			map.put("sign", tr.getSign());
			map.put("score", tr.getScore() == null ? 0 : tr.getScore());
			map.put("post_time", sdf.format(tr.getPostTime()));
			map.put("image", lineList);
			map.put("result_str", tr.getResult());
			map.put("right_str", tr.getTask().getResult());
			list.add(map);
		}
		if (list.size() > 0) {
			dataMap.put("result", 1);
			dataMap.put("pages", pageView.getTotalPage());
		} else {
			dataMap.put("result", 7);// �б�Ϊ��
			dataMap.put("pages", 0);
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��ȡ��Ʒ�б�
	 * 
	 * @return
	 */
	public String listTrophy() {
		log.info("App����ȡ���н�Ʒ�б���" + "�û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		if (account != null) {
			PageView<Trophy> pageView = new PageView<Trophy>(maxresult, page);
			LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
			orderby.put("id", "desc");
			StringBuffer jpql = new StringBuffer("o.visible=?1");
			List<Object> params = new ArrayList<Object>();
			params.add(true);
			pageView.setQueryResult(trophyService.getScrollData(pageView
					.getFirstResult(), maxresult, jpql.toString(), params
					.toArray(), orderby));
			for (Trophy tr : pageView.getRecords()) {
				Map<String, Object> map = new LinkedHashMap<String, Object>();
				map.put("tid", tr.getId());
				map.put("name", tr.getName());
				map.put("detail", tr.getDetail());
				map.put("stock", tr.getStock());
				map.put("score", tr.getScore());
				map.put("type", tr.getTrophyType().getName());
				map.put("image", tr.getImage());
				list.add(map);
			}
			if (list.size() > 0) {
				dataMap.put("result", 1);
				dataMap.put("pages", pageView.getTotalPage());
			} else {
				dataMap.put("result", 7);// �б�Ϊ��
				dataMap.put("pages", 0);
			}
		} else {
			dataMap.put("result", 9); // �û�ID������
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * �ύ�һ���Ʒ�����Ϣ
	 * 
	 * @return
	 */
	public String exchangeTrophy() {
		log.info("App���ύ��Ʒ�һ���Ϣ����" + "�û�ID=" + uid + "��ƷID=" + tid + "��Ʒ����="
				+ num);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		Trophy trophy = trophyService.find(tid);
		double theScore = num * trophy.getScore(); // ���ζһ���Ҫ�Ļ���
		if (theScore > account.getScore()) {// ����û����ֲ��㹻�һ���ֱ�ӷ���
			dataMap.put("result", "0");
			dataMap.put("rid", "");
			dataFillStream(dataMap);
			return "success";
		}
		TrophyRecord record = new TrophyRecord();
		record.setPostTime(new Date());// �����ύ�һ���ʱ��Ϊ��ǰʱ��
		record.setAccount(account);
		record.setNumber(num);
		record.setScore(theScore);
		record.setTrophy(trophy);
		trophyRecordService.save(record);
		dataMap.put("result", "1");
		dataMap.put("rid", record.getId());
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��ȡ��ʷ�һ��б�
	 * 
	 * @return
	 */
	public String listHistory() {
		log.info("App����ȡ��ʷ�һ��б���" + "�û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		PageView<TrophyRecord> pageView = new PageView<TrophyRecord>(maxresult,
				page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");
		StringBuffer jpql = new StringBuffer("o.visible=?1 and o.account.id=?2");
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		params.add(uid);
		pageView.setQueryResult(trophyRecordService.getScrollData(pageView
				.getFirstResult(), maxresult, jpql.toString(),
				params.toArray(), orderby));

		List<TrophyRecord> records = pageView.getRecords();
		for (TrophyRecord tr : records) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("tid", tr.getTrophy().getId());
			map.put("name", tr.getTrophy().getName());
			map.put("type", tr.getTrophy().getTrophyType().getName());
			map.put("detail", tr.getTrophy().getDetail());
			map.put("score", tr.getScore());
			map.put("image", tr.getTrophy().getImage());
			map.put("image", tr.getTrophy().getImage());
			map.put("post_time", sdf.format(tr.getPostTime()));
			list.add(map);
		}
		if (list.size() > 0) {
			dataMap.put("result", 1);
			dataMap.put("pages", pageView.getTotalPage());
		} else {
			dataMap.put("result", 1);
			dataMap.put("pages", 0);// �б�Ϊ��
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * �����ʷ�һ���¼
	 * 
	 * @return
	 */
	public String clearHistory() {
		log.info("App�������ʷ�һ��б���" + "�û�ID=" + uid);
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
	 * ͳ����ضһ���Ϣ��
	 * 
	 * @return
	 */
	public String countExchange() {
		log.info("App��ͳ�ƶһ���Ϣ����" + "�û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("total", trophyRecordService.countAll(uid));
		dataMap.put("month", trophyRecordService.countMonth(uid));
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ���¸�������
	 * 
	 * @return
	 */
	public String updateProfile() {
		log.info("App�����¸������ϡ���" + "�û�ID=" + uid + " �û��ǳ�=" + nickname
				+ " ��������=" + backname + " �����ʺ�=" + backaccount + " ֧�����ʺ�="
				+ pay);
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
		accountService.update(account);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * �һ����롾�������롿
	 * 
	 * @return
	 */
	public String resetPassword() {
		log.info("App���һ����롿��" + "�û���=" + username + " ������=" + password
				+ " ��֤��=" + code);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			String sysCode = shortMessageService.findCode(username); // usernameΪ�ֻ���
			if (sysCode != null && sysCode.equals(code)) {// �ж���֤���Ƿ���ȷ����֤�볬ʱ����
				Account account = accountService.findByUsername(username);
				if (account != null) {
					account.setPassword(password);
					accountService.update(account);
					dataMap.put("result", 1);
				} else {
					dataMap.put("result", 6);// �û���������
				}
			} else {
				dataMap.put("result", 2); // ��֤�����
			}
		} catch (Exception e) {
			dataMap.put("result", 0);
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��������
	 * 
	 * @return
	 */
	public String updatePassword() {
		log.info("App���������롿��" + "�û�ID=" + uid + "�û���=" + username + " ԭ����="
				+ oripwd + " ������=" + newpwd);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		Account account = accountService.find(uid);
		if (account != null) {
			if (oripwd != null && oripwd.equals(account.getPassword())) {// ԭ������ȷ
				account.setPassword(newpwd);
				accountService.update(account);
				dataMap.put("result", 1);
			} else {
				dataMap.put("result", 0);
			}
		} else {
			dataMap.put("result", 9); // �û�ID������
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��ȡ��Ϣ�б�
	 * 
	 * @return
	 */
	public String listMessage() {
		log.info("App����ȡ��Ϣ�б���" + "�û�ID=" + uid + "page=" + page + "maxresult="
				+ maxresult);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		PageView<Message> pageView = new PageView<Message>(maxresult, page);
		LinkedHashMap<String, String> orderby = new LinkedHashMap<String, String>();
		orderby.put("id", "desc");

		/***** �û�ɾ����Ϣ��¼ID���� STRART ******/
		StringBuffer mids = new StringBuffer();
		List<Long> midList = messageDeleteRecordService.listMidsByAccid(uid);
		for (long mid : midList) {
			mids.append(mid + ",");
		}
		if (mids.length() > 0) {
			mids.deleteCharAt(mids.length() - 1);
		}
		/***** �û�ɾ������Ϣ��¼ID���� END *****/
		StringBuffer jpql = new StringBuffer("o.visible=?1");
		if (midList.size() > 0) {
			jpql.append(" and o.id not in(" + mids.toString() + ")");
		}
		List<Object> params = new ArrayList<Object>();
		params.add(true);
		pageView.setQueryResult(messageService.getScrollData(pageView
				.getFirstResult(), maxresult, jpql.toString(),
				params.toArray(), orderby));

		List<Message> messages = pageView.getRecords();
		for (Message message : messages) {
			Map<String, Object> map = new LinkedHashMap<String, Object>();
			map.put("mid", message.getId());
			map.put("title", message.getTitle());
			map.put("content", message.getContent());
			map.put("issuetime", sdf.format(message.getIssueTime()));
			list.add(map);
		}
		if (list.size() > 0) {
			dataMap.put("result", 1);
			dataMap.put("pages", pageView.getTotalPage());
		} else {
			dataMap.put("result", 7);// �б�Ϊ��
			dataMap.put("pages", 0);
		}
		dataMap.put("list", list);
		dataFillStream(dataMap);
		return "success";
	}

	@SuppressWarnings("unchecked")
	public String deleteMessage() {
		log.info("App��ɾ����Ϣ����" + "jsonStr=" + jsonStr);
		long accid = 0;
		ArrayList<String> messageIds = new ArrayList<String>();
		Gson gson = new Gson();
		Map<String, Object> map = gson.fromJson(jsonStr, Map.class);
		for (String key : map.keySet()) {
			if ("mids".equals(key)) {
				messageIds = (ArrayList) map.get(key);
			}
			if ("uid".equals(key)) {
				accid = Long.parseLong(map.get(key).toString());
			}
		}
		ArrayList<String> delSucMids = new ArrayList<String>();
		if (accid != 0 && accountService.find(accid) != null) {
			for (String mid : messageIds) {
				Long msgid = Long.parseLong(mid);
				Message message = messageService.find(msgid);
				if (message != null) {
					MessageDeleteRecord existMDR = messageDeleteRecordService
							.find(accid, msgid);
					if (existMDR == null) {
						MessageDeleteRecord mdr = new MessageDeleteRecord();
						mdr.setAccid(accid);
						mdr.setMsgid(msgid);
						mdr.setDeleteTime(new Date());
						messageDeleteRecordService.save(mdr);
					}
					delSucMids.add(mid + "");
				}
			}
		}
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", delSucMids.size() == messageIds.size() ? 1 : 0);
		dataMap.put("records", delSucMids.size());
		dataMap.put("mids", delSucMids);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ��ȡ����˵�����������ǣ��ͻ��绰
	 * 
	 * @return
	 */
	public String fetchAbout() {
		log.info("App����ȡ���ڵ���Ϣ����" + "�û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			dataMap.put("manual", systemConfigService.find("manual")
					.getValueText());
		} catch (Exception e) {
			dataMap.put("manual", "");
		}
		try {
			dataMap.put("about", systemConfigService.find("about")
					.getValueText());
		} catch (Exception e) {
			dataMap.put("about", "");
		}
		try {
			dataMap.put("phone", systemConfigService.find("phone")
					.getValueText());
		} catch (Exception e) {
			dataMap.put("phone", "");
		}
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * �ύ���飬���
	 * 
	 * @return
	 */
	public String postSense() {
		log.info("App���ύ���顿��" + "�û�ID=" + uid + " ��ϵ��ʽ=" + contact + " ����="
				+ content);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		try {
			Sense sense = new Sense();
			sense.setAccount(accountService.find(uid));
			sense.setContact(contact);
			sense.setContent(content);
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
	 * �������
	 * 
	 * @return
	 */
	public String update() {
		log.info("App��������¡���" + "�û�ID=" + uid);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", 0);
		dataFillStream(dataMap);
		return "success";
	}

	/**
	 * ���Ͷ���
	 * 
	 * @return
	 */
	public String sendCode() {
		log.info("App��������֤�롿��" + "�ֻ���=" + phone + " codeType=" + codeType);
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", 0);
		dataMap.put("code", "");
		dataMap.put("sendtime", "");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String smscode = StringGenerator.SerialNumber(4);
		String smscontent = "";
		if (codeType == 1) {// ע����֤��
			if (accountService.findByUsername(phone) != null) {// �û���(�ֻ���)����
				dataMap.put("result", 3);// �ֻ����ѱ�ע��
				dataFillStream(dataMap);
				return "success";
			}
			smscontent = "������֤��Ϊ��" + smscode + "������3���������ע�ᡣ";
		} else if (codeType == 2) {// �һ�����
			if (accountService.findByUsername(phone) == null) {// �û���(�ֻ���)������
				dataMap.put("result", 6);// �ֻ��Ų�����
				dataFillStream(dataMap);
				return "success";
			}
			smscontent = "������֤��Ϊ��" + smscode + "������3��������������һء�";
		} else {
			dataMap.put("result", 12);// ��֤�����ʹ���
			dataFillStream(dataMap);
			return "success";
		}

		try {
			boolean sendresult = shortMessageService.sendCode(phone, smscode,
					smscontent);
			if (sendresult) {
				dataMap.put("result", 1);
				dataMap.put("code", smscode);
				dataMap.put("sendtime", sdf.format(new Date()));
			}
		} catch (Exception e) {
			// e.printStackTrace();
		}
		dataFillStream(dataMap);
		return "success";
	}

	public static void main(String[] args) {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("result", 0);
		dataMap.put("result", 1);
		System.out.println(dataMap.get("result"));

	}

	/**
	 * ��Map<String, Object> dataMapת����json��ʽ,�����ݸ�InputStream
	 * 
	 * @param dataMap
	 */
	private void dataFillStream(Map<String, Object> dataMap) {
		Gson gson = new Gson();
		String jsonStr = gson.toJson(dataMap);
		log.info("App����Ӧ�������" + jsonStr);
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public long getTid() {
		return tid;
	}

	public void setTid(long tid) {
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

	public InputStream getInputStream() {
		return inputStream;
	}

	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
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

	public String getJsonStr() {
		return jsonStr;
	}

	public void setJsonStr(String jsonStr) {
		this.jsonStr = jsonStr;
	}

	public int getCodeType() {
		return codeType;
	}

	public void setCodeType(int codeType) {
		this.codeType = codeType;
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

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getMaxresult() {
		return maxresult;
	}

	public void setMaxresult(int maxresult) {
		this.maxresult = maxresult;
	}

}
