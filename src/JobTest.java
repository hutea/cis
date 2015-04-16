import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;

import com.hydom.util.HttpSender;

public class JobTest {

	public static void main(String[] args) {

		for (int i = 0; i < 20; i++) {
			if (i % 3 == 0) {
				PhoneThread p1 = new PhoneThread(2, "正确123");
				PhoneThread p2 = new PhoneThread(3, "正确123");
				PhoneThread p3 = new PhoneThread(4, "正确123");
				p1.run();
				p2.run();
				p3.run();
			} else {
				PhoneThread p1 = new PhoneThread(2, "abc");
				PhoneThread p2 = new PhoneThread(3, "xyz");
				PhoneThread p3 = new PhoneThread(4, "test");
				p1.run();
				p2.run();
				p3.run();
			}
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
			InputStream inputStream = HttpSender.postFromHttpClient(fetchUrl, fetchParam,
					"utf-8");
			String result = IOUtils.toString(inputStream, "utf-8");
			System.out.println(result);
			int is = result.indexOf("\"tid\":");
			int ie = result.indexOf(",", is);
			String tidStr = result.substring(is + 6, ie);
			if ("\"\"".equals(tidStr)) {
				tid = 0;
				System.out.println("没有可以分配的题目了");
			} else {
				tid = Long.parseLong(tidStr);
				System.out.println("分配结果：" + uid + ":" + tid);
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
		System.out.println("开始提交：");
		Map<String, String> fetchParam = new HashMap<String, String>();
		fetchParam.put("tid", tid + "");
		fetchParam.put("result", postData);
		try {
			InputStream inputStream = HttpSender.postFromHttpClient(postUrl, fetchParam,
					"utf-8");
			String result = IOUtils.toString(inputStream, "utf-8");
			System.out.println(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
