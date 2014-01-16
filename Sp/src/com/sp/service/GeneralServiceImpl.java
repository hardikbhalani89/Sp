package com.sp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sp.dao.GeneralDAO;
import com.sp.model.Countrylist;
import com.sp.model.JobList;

@Service
public class GeneralServiceImpl implements GeneralService {

	@Autowired
	private GeneralDAO generalDAO;
	
	
	@Override
	
	public @ResponseBody List<Countrylist> getCountryList() {
		//ResultSet rs = generalDAO.getCountryList();
		List<Countrylist>  list = generalDAO.getCountryList();
		/*
		try {
			JSONObject jsonObj = new JSONObject();
			JSONArray jsonarr = new JSONArray();
			while(rs.next()){
				jsonObj = new JSONObject();
				jsonObj.put("countrycode", rs.getString(1));
				jsonObj.put("countryname", rs.getString(2));
				jsonObj.put("phonecode", rs.getString(3));
				jsonObj.put("countrynamephone", rs.getString(4));
				jsonarr.put(jsonObj);
			}
			jsonObj = new JSONObject();
			jsonObj.put("countrylist", jsonarr);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		return list;
	}

	@Override
	public @ResponseBody List<JobList> getJobList() {
		// TODO Auto-generated method stub
		
		List<JobList>  list = generalDAO.getJobList();
		System.out.println(list.size());
		return list;
	}
	
}