package com.hydom.util;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 
 * @author www.hydom.cn [heou]
 * 
 */
public class HelperUtil {

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
