package com.sp.dao;

import com.sp.bean.UserBean;
import com.sp.model.UserDetail;

public interface UserDAO {
	
	public String addUser(UserDetail UserBean);
	public int updateUser(UserDetail userBeanObj);
	public UserBean getUserAccountDetails(String eMail);
	
}
