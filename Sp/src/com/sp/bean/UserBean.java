package com.sp.bean;

import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;



public class UserBean {
	private String userid;
	private String email;
	private String password;
	private String firstname;
	private String lastname;
	private String imdbprofile;
	private String country;
	
	private String profilepic;
	private List<String> industry;
	
	private String primaryjob;
	private String aboutme;
	private String facebookemail;
	private String twitteremail;
	private String linkedinemail;
	private String entrydate;
	private String profilestatus;
	private String profilecreatedate;
	private String profileupdatedate;
	private String gender;
	private String weburl;
	private String postcode;
	private String phonecountry;
	private String phonecode;
	private String mobilephone;
	private String altemail;
	private String profileurl;
	
	private List<MultipartFile> fileField;

	public List<MultipartFile> getFileField() {
		return fileField;
	}

	public void setFileField(List<MultipartFile> fileField) {
		this.fileField = fileField;
	}

	public String getUserid() {
		return userid;
	}
	
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getImdbprofile() {
		return imdbprofile;
	}
	public void setImdbprofile(String imdbprofile) {
		this.imdbprofile = imdbprofile;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getProfilepic() {
		return profilepic;
	}
	public void setProfilepic(String profilepic) {
		this.profilepic = profilepic;
	}
	public List<String> getIndustry() {
		return industry;
	}
	public void setIndustry(List<String> industry) {
		this.industry = industry;
	}
	public String getPrimaryjob() {
		return primaryjob;
	}
	public void setPrimaryjob(String primaryjob) {
		this.primaryjob = primaryjob;
	}
	public String getAboutme() {
		return aboutme;
	}
	public void setAboutme(String aboutme) {
		this.aboutme = aboutme;
	}
	public String getFacebookemail() {
		return facebookemail;
	}
	public void setFacebookemail(String facebookemail) {
		this.facebookemail = facebookemail;
	}
	public String getTwitteremail() {
		return twitteremail;
	}
	public void setTwitteremail(String twitteremail) {
		this.twitteremail = twitteremail;
	}
	public String getLinkedinemail() {
		return linkedinemail;
	}
	public void setLinkedinemail(String linkedinemail) {
		this.linkedinemail = linkedinemail;
	}
	public String getEntrydate() {
		return entrydate;
	}
	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}
	public String getProfilestatus() {
		return profilestatus;
	}
	public void setProfilestatus(String profilestatus) {
		this.profilestatus = profilestatus;
	}
	public String getProfilecreatedate() {
		return profilecreatedate;
	}
	public void setProfilecreatedate(String profilecreatedate) {
		this.profilecreatedate = profilecreatedate;
	}
	public String getProfileupdatedate() {
		return profileupdatedate;
	}
	public void setProfileupdatedate(String profileupdatedate) {
		this.profileupdatedate = profileupdatedate;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getWeburl() {
		return weburl;
	}
	public void setWeburl(String weburl) {
		this.weburl = weburl;
	}
	public String getPostcode() {
		return postcode;
	}
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}
	public String getPhonecountry() {
		return phonecountry;
	}
	public void setPhonecountry(String phonecountry) {
		this.phonecountry = phonecountry;
	}
	public String getPhonecode() {
		return phonecode;
	}
	public void setPhonecode(String phonecode) {
		this.phonecode = phonecode;
	}
	public String getMobilephone() {
		return mobilephone;
	}
	public void setMobilephone(String mobilephone) {
		this.mobilephone = mobilephone;
	}
	public String getAltemail() {
		return altemail;
	}
	public void setAltemail(String altemail) {
		this.altemail = altemail;
	}
	public String getProfileurl() {
		return profileurl;
	}
	public void setProfileurl(String profileurl) {
		this.profileurl = profileurl;
	}
	
	
	

}
