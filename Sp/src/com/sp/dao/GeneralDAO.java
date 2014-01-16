package com.sp.dao;

import java.util.List;

import com.sp.model.Countrylist;
import com.sp.model.JobList;

public interface GeneralDAO {

		public List<Countrylist> getCountryList();
		public  List<JobList> getJobList();
		
}
