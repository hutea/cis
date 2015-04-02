package com.hydom.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 
 * @author www.hydom.cn [heou]
 * 
 */
public class HelperUtil {

	public static void printLog() {
		System.out.println(Thread.currentThread().getStackTrace()[1].getClassName());
		System.out.println(Thread.currentThread().getStackTrace()[1].getMethodName());
	}

	/**
	 * 对原始日期增加天数
	 * 
	 * @param srcDate
	 *            ：原始日期
	 * @param day
	 *            ：要增加的天数
	 * @return
	 */
	public static Date addDays(Date srcDate, int day) {
		SimpleDateFormat dft = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cale = Calendar.getInstance();
		cale.setTime(srcDate);
		cale.set(Calendar.DATE, cale.get(Calendar.DATE) + day);
		Date date = null;
		try {
			date = dft.parse(dft.format(cale.getTime()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}

	/**
	 * 获取当月第一天
	 * 
	 * @return
	 */
	public static Date firstDayThisMonth() {
		Calendar cal = Calendar.getInstance();
		cal.set(GregorianCalendar.DAY_OF_MONTH, 1);
		cal.set(GregorianCalendar.HOUR_OF_DAY, 0);
		cal.set(GregorianCalendar.MINUTE, 0);
		cal.set(GregorianCalendar.SECOND, 0);
		return cal.getTime();
	}

	/**
	 * 获取当月最后一天
	 * 
	 * @return
	 */
	public static Date lastDayThisMonth() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DATE, 1);
		cal.roll(Calendar.DATE, -1);
		cal.set(GregorianCalendar.HOUR_OF_DAY, 23);
		cal.set(GregorianCalendar.MINUTE, 59);
		cal.set(GregorianCalendar.SECOND, 59);
		return cal.getTime();
	}

	public static void main(String[] args) {
		System.out.println(firstDayThisMonth());
		System.out.println(lastDayThisMonth());
	}
}
