package com.hydom.account.ebean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * 帐户表：用户、管理员共用此表，通过type区别
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_account")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(unique = true)
	private String username;// 用户名（前期手机号即用户名）
	@Column
	private String phone;// 手机（利于后期扩展）
	@Column
	private String password;// 密码
	@Column
	private String nickname;// /用户昵称
	@Column
	private String backname;// /银行名称
	@Column
	private String backaccount;// /银行帐号
	@Column
	private String pay;// 支付宝帐号
	@Column
	private int type = 1;// 帐户类型：1=普通用户、2=后台管理员
	@Column
	private double score;// 用户的总积分
	@Column
	private Integer state;// 0=休息一下，1=识别中，2=注销
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;// 创建时间
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastSigninTime;// 最后登录时间
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastSignoutTime;// 最后注销时间
	@Column
	private Boolean visible = true;

	public Account() {

	}

	public Account(String username, String password, String phone) {
		this.username = username;
		this.password = password;
		this.phone = phone;
		this.createTime = new Date();
	}

	public Long getId() {
		return id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getLastSigninTime() {
		return lastSigninTime;
	}

	public void setLastSigninTime(Date lastSigninTime) {
		this.lastSigninTime = lastSigninTime;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public Date getLastSignoutTime() {
		return lastSignoutTime;
	}

	public void setLastSignoutTime(Date lastSignoutTime) {
		this.lastSignoutTime = lastSignoutTime;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public String getPhone() {
		return phone;
	}

	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

}
