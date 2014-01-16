package com.sp.service;

import java.util.List;
import com.sp.model.Countrylist;
import com.sp.model.JobList;

public interface GeneralService {
	public List<Countrylist> getCountryList();
	public List<JobList> getJobList();
}
