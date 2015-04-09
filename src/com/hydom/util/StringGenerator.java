package com.hydom.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

/**
 * ����ID/���ɶ�����֤��
 * 
 * @author www.hydom.cn [heou]
 * 
 */
public class StringGenerator {

	private StringGenerator() {
	}

	public static String generatorID() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		Date date = new Date();
		String dateStr = sdf.format(date);
		String id = dateStr + getRandomString(3);
		return id;
	}

	/**
	 * �������ⳤ���������
	 * 
	 * @param length
	 * @return
	 */
	public static String SerialNumber(int length) {
		String base = "0123456789";
		Random random = new Random();
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < length; i++) {
			int number = random.nextInt(base.length());
			sb.append(base.charAt(number));
		}
		return sb.toString();

	}

	/**
	 * ��ȡָ�����ȵ������
	 * 
	 * @param length
	 * @return
	 */
	private static String getRandomString(int length) {
		String base = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
		Random random = new Random();
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < length; i++) {
			int number = random.nextInt(base.length());
			sb.append(base.charAt(number));
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(generatorID().length());
		System.out.println(generatorID());
	}
}
