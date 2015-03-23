package com.hydom.credit.ebean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.hydom.account.ebean.Account;

/**
 * 积分消费记录表
 * 
 * @author www.hydom.cn [heou]
 * 
 */

@Entity
@Table(name = "t_creditexpense")
public class CreditExpense {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "trophy_id")
	private Trophy trophy;// 奖品
	@Column
	private Integer number = 1;// 奖品的数量，给定默认值=1
	@ManyToOne(cascade = { CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "accout_id")
	private Account acount;// 用户

}
