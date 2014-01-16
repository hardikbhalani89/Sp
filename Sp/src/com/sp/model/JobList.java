package com.sp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity  
@Table(name="joblist")
public class JobList {

	@Id
	@Column(name="jobcode")
	private int jobcode;
	
	@Column(name="jobname")
	private String jobname;
	
	@Column(name="addbyuser")
	private char addbyuser;

	public char getAddbyuser() {
		return addbyuser;
	}

	public void setAddbyuser(char addbyuser) {
		this.addbyuser = addbyuser;
	}

	public int getJobcode() {
		return jobcode;
	}

	public void setJobcode(int jobcode) {
		this.jobcode = jobcode;
	}

	public String getJobname() {
		return jobname;
	}

	public void setJobname(String jobname) {
		this.jobname = jobname;
	}
	
	
		
}
