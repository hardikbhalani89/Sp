package com.sp.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity  
@Table(name="userdetail")  
public class UserDetail {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid2")
	@Column(name = "userid",unique=true)
	private String userid;
	
	@Column(name="email")  
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="firstname")
	private String firstname;
	@Column(name="lastname")
	private String lastname;
	@Column(name="imdbprofile")
	private String imdbprofile;
	@Column(name="country")
	private String country;
	
	@Column(name="profilepic")
	private String profilepic;
	@Column(name="industry")
	private String industry;
	
	@Column(name="primaryjob")
	private String primaryjob;
	@Column(name="aboutme")
	private String aboutme;
	@Column(name="facebookemail")
	private String facebookemail;
	@Column(name="twitteremail")
	private String twitteremail;
	@Column(name="linkedinemail")
	private String linkedinemail;
	@Column(name="entrydate")
	private String entrydate;
	@Column(name="profilestatus")
	private String profilestatus;
	@Column(name="profilecreatedate")
	private String profilecreatedate;
	@Column(name="profileupdatedate")
	private String profileupdatedate;
	@Column(name="gender")
	private String gender;
	@Column(name="weburl")
	private String weburl;
	@Column(name="postcode")
	private String postcode;
	@Column(name="phonecountry")
	private String phonecountry;
	@Column(name="phonecode")
	private String phonecode;
	@Column(name="mobilephone")
	private String mobilephone;
	@Column(name="altemail")
	private String altemail;
	@Column(name="profileurl")
	private String profileurl;
	
	
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
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
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
