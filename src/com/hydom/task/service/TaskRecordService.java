package com.hydom.task.service;

import java.util.List;

import com.hydom.dao.DAO;
import com.hydom.task.ebean.TaskRecord;

public interface TaskRecordService extends DAO<TaskRecord> {
	/**
	 * 给指定帐号分配一个识别任务【一个识别区块】
	 * 
	 * @param accountId
	 *            ：帐户ID
	 * @return:TaskRecord 已持久化到数据库中
	 */
	public TaskRecord fetchTaskRecord(long accountId);

	/**
	 * 返回用户识别记录列表
	 * 
	 * @param accountId
	 *            ：用户ID
	 * @param sign
	 *            :1表示返回识别正确的，0表示返回识别错误的
	 * @return
	 */
	List<TaskRecord> listTaskRecord(long accountId, int sign);

	/**
	 * 处理用户提交的识别结果
	 * 
	 * @param tid
	 *            ：TaskRecord ID
	 * @param resultStr
	 *            :用户的识别结果
	 * @return
	 */
	public int processTaskRecord(long tid, String resultStr);

	/**
	 * 列出所有超时任务
	 * 
	 * @return
	 */
	public List<TaskRecord> listOverTimeRecord();

	/**
	 * 统计用户平均处理速度
	 * 
	 * @param accid
	 * @return
	 */
	public double countProcessTime(long accid);

	/**
	 * 统计用户识别正确率
	 * 
	 * @param accid
	 * @return
	 */
	public double countRightPercent(long accid);

	/**
	 * 统计用户识别总数<br>
	 * 不包含超时识别记录，即在规定时间内返回了识别结果的所有记录
	 * 
	 * @param accid
	 * @return
	 */
	public long count(long accid);

	/**
	 * 统计用户最近一月识别数<br>
	 * 时间界限(如当天为2015-3-13，则最近一月指：2015-2-13~2015-3-13)<br>
	 * 超时识别不纳入计算
	 * 
	 * @param accid
	 * @return
	 */
	public long countThisMonth(long accid);
}
