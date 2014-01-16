package com.sp.service;

import com.sp.bean.UserBean;
import com.sp.model.UserDetail;


public interface UserService {
	public String addUser(UserDetail userBeanObj);
	public int updateUser(UserDetail userBeanObj);
	public UserBean getUserAccountDetails(String eMail);
}
