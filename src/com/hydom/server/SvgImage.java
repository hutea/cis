package com.hydom.server;

public class SvgImage {

	private String data;// 数据
	private int minX = 0;// 最大的x
	private int minY = 0;// 最大的y

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public int getMinX() {
		return minX;
	}

	public void setMinX(int minX) {
		this.minX = minX;
	}

	public int getMinY() {
		return minY;
	}

	public void setMinY(int minY) {
		this.minY = minY;
	}

}
