package com.hydom.credit.ebean;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * ��Ʒ
 * 
 * @author www.hydom.cn [heou]
 * 
 */
@Entity
@Table(name = "t_trophy")
public class Trophy {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column
	private String name;// ����
	@Column
	private int state = 1;// ״̬
	@Lob
	private String detail;// ��Ʒ����
	@Lob
	private String detailText;// ��Ʒ����
	@Column
	private int stock;// �����
	@Column
	private int exchangeNum = 0;// ���һ�������
	@Column
	private int score;// ��Ҫ�Ļ���
	@Column
	private String image;// ��ƷͼƬ��ַ
	@Column
	private String imageName;// ��ƷͼƬ����
	@Column
	private String money;// ��ֵ
	@ManyToOne(cascade = { CascadeType.REFRESH, }, optional = false)
	@JoinColumn(name = "type_id")
	private TrophyType trophyType;// type;// ��Ʒ���
	@Column
	private Boolean visible = true;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TrophyType getTrophyType() {
		return trophyType;
	}

	public void setTrophyType(TrophyType trophyType) {
		this.trophyType = trophyType;
	}

	public String getMoney() {
		return money;
	}

	public void setMoney(String money) {
		this.money = money;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getState() {
		return state;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getDetailText() {
		return detailText;
	}

	public void setDetailText(String detailText) {
		this.detailText = detailText;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	public int getExchangeNum() {
		return exchangeNum;
	}

	public void setExchangeNum(int exchangeNum) {
		this.exchangeNum = exchangeNum;
	}

}
