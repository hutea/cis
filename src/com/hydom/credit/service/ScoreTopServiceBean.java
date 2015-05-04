package com.hydom.credit.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import sun.java2d.ScreenUpdateManager;

import com.hydom.account.ebean.Account;
import com.hydom.credit.ebean.ScoreTop;
import com.hydom.dao.DAOSupport;
import com.hydom.util.HelperUtil;

@Service
public class ScoreTopServiceBean extends DAOSupport<ScoreTop> implements ScoreTopService {
	@Resource
	private ScoreRecordService scoreRecordService;

	/**
	 * 系统每隔2小时定时生成当天积分榜单
	 */
	public void generate() {
		try {
			Date now = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String todayStr = sdf.format(now);
			Date todayStartDate = sdf.parse(todayStr);
			Date todayEndDate = HelperUtil.addDays(todayStartDate, 1);
			List<Object[]> list = scoreRecordService.top(todayStartDate, todayEndDate, 3);
			for (int i = 0; i < list.size(); i++) {
				ScoreTop scoreTop = new ScoreTop();
				Object[] obj = list.get(i);
				scoreTop.setAccount((Account) obj[0]);
				scoreTop.setGenDate(now);
				scoreTop.setLv(i + 1);
				scoreTop.setScore((Double) obj[1]);
				autoUpate(scoreTop);
			}
		} catch (Exception e) {

		}
	}



	/**
	 * 每天晚上12点过后，更新昨日榜单
	 */
	public void updateYestoady() {
		try {
			Date now = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String todayStr = sdf.format(now);
			Date endDate = sdf.parse(todayStr);
			Date startDate = HelperUtil.
			List<Object[]> list = scoreRecordService.top(todayStartDate, todayEndDate, 3);
			for (int i = 0; i < list.size(); i++) {
				ScoreTop scoreTop = new ScoreTop();
				Object[] obj = list.get(i);
				scoreTop.setAccount((Account) obj[0]);
				scoreTop.setGenDate(now);
				scoreTop.setLv(i + 1);
				scoreTop.setScore((Double) obj[1]);
				autoUpate(scoreTop);
			}
		} catch (Exception e) {

		}
	}

	/**
	 * 获取当天榜单
	 */
	@SuppressWarnings("unchecked")
	public List<ScoreTop> listToday() {
		Date now = new Date();
		List<ScoreTop> list = em.createQuery(
				"select o from ScoreTop o where o.genDate=?1 order by o.lv desc").setParameter(1,
				now).setMaxResults(3).getResultList();
		if (list == null || list.size() == 0) {// 如果为空，则调用以下方法生成榜单
			this.generate();
		} else {
			list = em.createQuery("select o from ScoreTop o where o.genDate=?1 order by o.lv desc")
					.setParameter(1, now).setMaxResults(3).getResultList();
		}
		return list;
	}
	
	private void autoUpate(ScoreTop st) {
		try {
			ScoreTop entity = (ScoreTop) em.createQuery(
					"select o from ScoreTop o where o.lv=? and o.genDate=?2").setParameter(1,
					st.getLv()).setParameter(2, st.getGenDate()).setMaxResults(1).getSingleResult();
			entity.setGenDate(st.getGenDate());
			entity.setAccount(st.getAccount());
			entity.setLv(st.getLv());
			entity.setScore(st.getScore());
			this.update(entity);
		} catch (Exception e) {
			this.save(st);
		}
	}

}
