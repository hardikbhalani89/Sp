package com.sp.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="countrylist")  
public class Countrylist implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5148477630271439092L;

	@Id
	@Column(name="countrycode")  
	private String countryCode;
	
	@Column(name="countryname")  
	private String countryName;
	
	@Column(name="phonecode")  
	private String phoneCode;

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getPhoneCode() {
		return phoneCode;
	}

	public void setPhoneCode(String phoneCode) {
		this.phoneCode = phoneCode;
	}
	
}
