package com.sp.bean;

public class CropperBean {
	private int x;
	private int y;
	private int w;
	private int h;
	private String weburl;
	private String physicalurl;
	private String userIdCrop;
	
	public String getUserIdCrop() {
		return userIdCrop;
	}
	public void setUserIdCrop(String userIdCrop) {
		this.userIdCrop = userIdCrop;
	}

	public String getWeburl() {
		return weburl;
	}

	public void setWeburl(String weburl) {
		this.weburl = weburl;
	}

	public String getPhysicalurl() {
		return physicalurl;
	}

	public void setPhysicalurl(String physicalurl) {
		this.physicalurl = physicalurl;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getW() {
		return w;
	}

	public void setW(int w) {
		this.w = w;
	}

	public int getH() {
		return h;
	}

	public void setH(int h) {
		this.h = h;
	}

}
