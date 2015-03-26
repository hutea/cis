package com.hydom.server;

import java.util.Random;

import com.google.gson.Gson;

public class SvgImage {

	private String data; // 原始JSON数据
	// 解析出的数据：<line x1="234" y1="1346" x2="232" y2="1347" ... /> ...
	private String svgdata;
	private int minX = 10000;// 最小的x
	private int minY = 10000;// 最小的y

	/**
	 * 
	 * @param data
	 *            ：原始数据
	 */
	public SvgImage(String data) {
		this(data, 99, 99, 99, 2, false);
	}

	/**
	 * 
	 * @param data
	 *            ：原始数据
	 * @param r
	 *            ：rgb的r值
	 * @param g
	 *            ：rgb的g值
	 * @param b
	 *            ：rgb的b值
	 * @param w
	 *            ：stroke-width的值
	 * @param random
	 *            ：是否机rgb
	 */
	public SvgImage(String data, int r, int g, int b, int w, boolean random) {
		String rgb = "(" + r + "," + g + "," + b + ")";
		StringBuffer result = new StringBuffer();
		String[] arys = data.split(",\\{\"x\":-1,\"y\":0\\}");
		for (String ary : arys) {// 每笔
			if (ary.startsWith(",")) {
				ary = ary.replaceFirst(",", "");
			}
			String[] ss = ary.split("\\},");
			String p1 = ss[0].replace("{\"x\":", "").replace("\"y\":", "").replace("}", "");
			for (int i = 1; i < ss.length; i++) {// 点
				if (random) {// 随机rgb
					rgb = "(" + this.random(1, 255) + "," + this.random(1, 255) + ","
							+ this.random(1, 255) + ")";
				}
				String p2 = ss[i].replace("{\"x\":", "").replace("\"y\":", "").replace("}",
						"");
				String[] xy1 = p1.split(",");
				String[] xy2 = p2.split(",");
				String line = "<line x1=\"" + xy1[0] + "\" y1=\"" + xy1[1] + "\""
						+ " x2=\"" + xy2[0] + "\" y2=\"" + xy2[1]
						+ "\"  style=\"stroke:rgb" + rgb + ";stroke-width:" + w + "\" />";
				if (Integer.valueOf(xy1[0]) < this.getMinX()) {
					this.setMinX(Integer.valueOf(xy1[0]));
				}
				if (Integer.valueOf(xy2[0]) < this.getMinX()) {
					this.setMinX(Integer.valueOf(xy2[0]));
				}

				if (Integer.valueOf(xy1[1]) < this.getMinY()) {
					this.setMinY(Integer.valueOf(xy1[1]));
				}
				if (Integer.valueOf(xy2[1]) < this.getMinY()) {
					this.setMinY(Integer.valueOf(xy2[1]));
				}
				result.append(line);
				p1 = p2;
			}
		}
		this.setSvgdata(result.toString());
	}

	/**
	 * 生成指定范围的随机数理
	 * 
	 * @param min
	 * @param max
	 * @return
	 */
	public  int random(int min, int max) {
		Random random = new Random();
		return random.nextInt(max) % (max - min + 1) + min;
		
	}

	public static void main(String[] args) {
		String json ="{\"x\":234,\"y\":1346},{\"x\":232,\"y\":1347},{\"x\":-1,\"y\":0},{\"x\":229,\"y\":1345},{\"x\":229,\"y\":1347},{\"x\":229,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":230,\"y\":1347},{\"x\":231,\"y\":1347},{\"x\":236,\"y\":1346},{\"x\":241,\"y\":1345},{\"x\":262,\"y\":1339},{\"x\":273,\"y\":1337},{\"x\":275,\"y\":1337},{\"x\":275,\"y\":1338},{\"x\":271,\"y\":1342},{\"x\":-1,\"y\":0},{\"x\":247,\"y\":1348},{\"x\":246,\"y\":1354},{\"x\":248,\"y\":1361},{\"x\":249,\"y\":1368},{\"x\":250,\"y\":1384},{\"x\":250,\"y\":1402},{\"x\":249,\"y\":1405},{\"x\":242,\"y\":1399},{\"x\":238,\"y\":1394},{\"x\":235,\"y\":1388},{\"x\":233,\"y\":1382},{\"x\":-1,\"y\":0},{\"x\":261,\"y\":1353},{\"x\":261,\"y\":1355},{\"x\":261,\"y\":1358},{\"x\":260,\"y\":1364},{\"x\":260,\"y\":1370},{\"x\":260,\"y\":1375},{\"x\":261,\"y\":1380},{\"x\":262,\"y\":1384},{\"x\":266,\"y\":1388},{\"x\":268,\"y\":1389},{\"x\":271,\"y\":1387},{\"x\":271,\"y\":1377},{\"x\":270,\"y\":1374},{\"x\":268,\"y\":1373},{\"x\":263,\"y\":1373},{\"x\":259,\"y\":1374},{\"x\":249,\"y\":1378},{\"x\":-1,\"y\":0},{\"x\":226,\"y\":1349},{\"x\":228,\"y\":1350},{\"x\":228,\"y\":1350},{\"x\":228,\"y\":1350},{\"x\":227,\"y\":1351},{\"x\":226,\"y\":1353},{\"x\":218,\"y\":1362},{\"x\":204,\"y\":1380},{\"x\":204,\"y\":1382},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1392},{\"x\":229,\"y\":1393},{\"x\":228,\"y\":1393},{\"x\":-1,\"y\":0},{\"x\":176,\"y\":1360},{\"x\":188,\"y\":1365},{\"x\":197,\"y\":1370},{\"x\":200,\"y\":1373},{\"x\":192,\"y\":1399},{\"x\":187,\"y\":1406},{\"x\":191,\"y\":1407},{\"x\":195,\"y\":1407},{\"x\":199,\"y\":1407},{\"x\":205,\"y\":1406},{\"x\":209,\"y\":1405},{\"x\":214,\"y\":1402},{\"x\":-1,\"y\":0},{\"x\":296,\"y\":1354},{\"x\":299,\"y\":1355},{\"x\":299,\"y\":1356},{\"x\":288,\"y\":1366},{\"x\":283,\"y\":1371},{\"x\":278,\"y\":1378},{\"x\":280,\"y\":1379},{\"x\":289,\"y\":1382},{\"x\":300,\"y\":1383},{\"x\":302,\"y\":1384},{\"x\":303,\"y\":1385},{\"x\":304,\"y\":1386},{\"x\":303,\"y\":1387},{\"x\":-1,\"y\":0},{\"x\":311,\"y\":1346},{\"x\":314,\"y\":1346},{\"x\":317,\"y\":1346},{\"x\":325,\"y\":1350},{\"x\":327,\"y\":1354},{\"x\":326,\"y\":1357},{\"x\":321,\"y\":1364},{\"x\":312,\"y\":1370},{\"x\":306,\"y\":1372},{\"x\":317,\"y\":1375},{\"x\":326,\"y\":1380},{\"x\":329,\"y\":1383},{\"x\":331,\"y\":1386},{\"x\":330,\"y\":1387},{\"x\":326,\"y\":1391},{\"x\":323,\"y\":1393},{\"x\":318,\"y\":1394},{\"x\":303,\"y\":1395},{\"x\":294,\"y\":1395},{\"x\":-1,\"y\":0}";
		SvgImage svg1 = new SvgImage(json, 12, 25, 233, 2,true);
		 SvgImage svg2 = new SvgImage(json);
		System.out.println(svg1.getSvgdata());
		System.out.println(svg1.getMinX());
		System.out.println(svg1.getMinY());
	}

	public String getData() {
		return data;
	}

	public String getSvgdata() {
		return svgdata;
	}

	public void setSvgdata(String svgdata) {
		this.svgdata = svgdata;
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
