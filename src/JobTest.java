import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.IOUtils;

import com.hydom.util.HttpSender;
import com.hydom.util.StringGenerator;

public class JobTest {

	public static void main(String[] args) {
		//process_1();
		 process_2();
	}

	public static void process_2() {
		for (int i = 0; i < 10; i++) {
			long s = System.currentTimeMillis();
			PhoneThread p1 = new PhoneThread(10004, "��ȷ123");
			PhoneThread p2 = new PhoneThread(10005, "��ȷ123");
			PhoneThread p3 = new PhoneThread(10006, "��ȷ123");
			p1.run();
			p2.run();
			p3.run();
			long e = System.currentTimeMillis();
			System.out.println("��" + i + "�Σ���ʱ��ms��=" + (e - s));
		}
	}

	public static void process_1() {
		for (int i = 0; i < 5; i++) {
			long s = System.currentTimeMillis();
			if (i % 2 != 0) {
				PhoneThread p1 = new PhoneThread(10001, "��ȷ123");
				PhoneThread p2 = new PhoneThread(10002, "��ȷ123");
				PhoneThread p3 = new PhoneThread(10003, "��ȷ123");
				p1.run();
				p2.run();
				p3.run();
			} else {
				PhoneThread p1 = new PhoneThread(10001, "��ȷ123");
				PhoneThread p2 = new PhoneThread(10002, "xyz");
				PhoneThread p3 = new PhoneThread(10003, "test");
				p1.run();
				p2.run();
				p3.run();
			}
			long e = System.currentTimeMillis();
			System.out.println("��" + i + "�Σ���ʱ��ms��=" + (e - s));
		}
	}

}

class PhoneThread implements Runnable {

	private long tid;
	private String postData;
	private static String fetchUrl = "http://localhost:8060/cis/app/fetch_note.action";
	private static String postUrl = "http://localhost:8060/cis/app/post_note.action";

	public PhoneThread(long uid, String postData) {
		this.postData = postData;
		Map<String, String> fetchParam = new HashMap<String, String>();
		fetchParam.put("uid", uid + "");
		try {
			InputStream inputStream = HttpSender.postFromHttpClient(fetchUrl, fetchParam, "utf-8");
			String result = IOUtils.toString(inputStream, "utf-8");
			System.out.println(result);
			int is = result.indexOf("\"tid\":");
			int ie = result.indexOf(",", is);
			String tidStr = result.substring(is + 6, ie);
			if ("\"\"".equals(tidStr)) {
				tid = 0;
				System.out.println("û�п��Է������Ŀ��");
			} else {
				tid = Long.parseLong(tidStr);
				System.out.println("��������uid=" + uid + " tid=" + tid);
			}
		} catch (Exception e) {
			// e.printStackTrace();
		}
	}

	@Override
	public void run() {
		if (tid == 0) {
			return;
		}
		System.out.println("��ʼ�ύ��");
		Map<String, String> fetchParam = new HashMap<String, String>();
		fetchParam.put("tid", tid + "");
		fetchParam.put("result_str", postData);
		try {
			long ms = Long.parseLong(StringGenerator.SerialNumber(4));
			System.out.println("�������ʱ�䣺" + ms + "���룬ģ���û�ʶ��");
			Thread.sleep(ms);
		} catch (Exception e) {
			e.printStackTrace();
		}
		try {
			InputStream inputStream = HttpSender.postFromHttpClient(postUrl, fetchParam, "utf-8");
			String result = IOUtils.toString(inputStream, "utf-8");
			System.out.println(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
