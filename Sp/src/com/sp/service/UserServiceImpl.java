package com.sp.service;

import com.sp.bean.UserBean;
import com.sp.dao.UserDAO;
import com.sp.model.UserDetail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDao;
	
	@Override
	public String addUser(UserDetail userBeanObj) {
		String ans = userDao.addUser(userBeanObj);
		return ans;
	}

	@Override
	public int updateUser(UserDetail userBeanObj) {
		int ans = userDao.updateUser(userBeanObj);
		return ans;
	}

	@Override
	public UserBean getUserAccountDetails(String eMail) {
		// TODO Auto-generated method stub
		return null;
	}

}
