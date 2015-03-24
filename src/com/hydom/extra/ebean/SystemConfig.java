package com.hydom.extra.ebean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ����������Ϣ�� id=about�����ڡ�id=manual������˵����id=phone���ͻ��绰�� id=taskcount:��������
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_systemconfig")
public class SystemConfig {

	/*
	 * id=about�����ڡ�id=manual������˵����id=phone���ͻ��绰�� id=taskcount:��������
	 */
	@Id
	private String id;
	@Column
	private Integer valueInt; // intֵ
	@Column
	private Double valueDouble; // intֵ
	@Column
	private String valueText;// ���ı�
	@Column
	private String valueContent;// ����

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
