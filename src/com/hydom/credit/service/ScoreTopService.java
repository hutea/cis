package com.hydom.credit.service;

import java.util.Date;
import java.util.List;

import com.hydom.credit.ebean.ScoreTop;
import com.hydom.dao.DAO;

public interface ScoreTopService extends DAO<ScoreTop> {

	/**
	 * ��ȡָ�����ڰ�
	 * 
	 * @param date
	 * @return
	 */
	public List<ScoreTop> listTheDay(Date date);

	/**
	 * ϵͳÿ��2Сʱ��ʱˢ�µ�����ְ�
	 */
	public void generate();

	/**
	 * ÿ������12����󣬸������հ�
	 */
	public void updateYestoady();

}
