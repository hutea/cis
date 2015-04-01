package com.hydom.extra.ebean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

/**
 * ����������Ϣ�� id=about�����ڡ�id=manual������˵����id=phone���ͻ��绰�� id=math��(short->������ᡢ int->�������ޡ�double=percent����ȷ������long=overtime����ʱʱ��)��
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_systemconfig")
public class SystemConfig {

	/*
	 * id=about�����ڡ�id=manual������˵����id=phone���ͻ��绰��
	 */
	@Id
	private String id;
	@Column
	private Integer valueInt; // intֵ
	@Column
	private Short valueShort; // shortֵ
	@Column
	private Long valueLong; // longֵ
	@Column
	private Double valueDouble; // doubleֵ
	@Lob
	private String valueText;// ���ı�
	@Lob
	private String valueContent;// ����

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Short getValueShort() {
		return valueShort;
	}

	public void setValueShort(Short valueShort) {
		this.valueShort = valueShort;
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

	public Long getValueLong() {
		return valueLong;
	}

	public void setValueLong(Long valueLong) {
		this.valueLong = valueLong;
	}

}
