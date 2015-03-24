package com.hydom.extra.ebean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 基本配置信息： id=about：关于、id=manual：积分说明、id=phone：客户电话、 id=taskcount:分配上限
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_systemconfig")
public class SystemConfig {

	/*
	 * id=about：关于、id=manual：积分说明、id=phone：客户电话、 id=taskcount:分配上限
	 */
	@Id
	private String id;
	@Column
	private Integer valueInt; // int值
	@Column
	private Double valueDouble; // int值
	@Column
	private String valueText;// 纯文本
	@Column
	private String valueContent;// 内容

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getValueInt() {
		return valueInt;
	}

	public void setValueInt(Integer valueInt) {
		this.valueInt = valueInt;
	}

	public Double getValueDouble() {
		return valueDouble;
	}

	public void setValueDouble(Double valueDouble) {
		this.valueDouble = valueDouble;
	}

	public String getValueText() {
		return valueText;
	}

	public void setValueText(String valueText) {
		this.valueText = valueText;
	}

	public String getValueContent() {
		return valueContent;
	}

	public void setValueContent(String valueContent) {
		this.valueContent = valueContent;
	}

}
