package com.sp.dao;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sp.model.Countrylist;
import com.sp.model.JobList;
@Repository
public class GeneralDAOImpl extends GeneralDAOImpl1 implements GeneralDAO{
	
	
	@Override
	@Cacheable("defaultCache")
	@Transactional
	public @ResponseBody List<Countrylist> getCountryList() {
		 
		 List<Countrylist> stlist= null;
		 try{
			 Session session = sessionFactory.getCurrentSession();
			 System.out.println("GeneralDAOImpl.java :: getCountryList()" +sessionFactory.hashCode() +" session :"+session.hashCode());
			 /*Transaction transaction = null;
             transaction = session.beginTransaction();
             */
             stlist= session.createCriteria(Countrylist.class).list();
    
             /*transaction.commit();
             session.flush();
             session.close();*/
             
			 /*	String countrylistQuery = "Select countrycode,countryname,phonecode,CONCAT(countryname,' (+',phonecode,')') as countrynamephone  " +
						"from countrylist ORDER BY countryname";
			 
			  	Class.forName("com.mysql.jdbc.Driver").newInstance();
		        Connection con = DriverManager.getConnection ("jdbc:mysql://10.2.5.142:3306/postconnect",
		    		   "root","indianic");
				Statement stmt=con.createStatement();
				rs = stmt.executeQuery(countrylistQuery);*/
			 
			// Session session = HibernateUtil.getSessionFactory().openSession();
			 //stlist=session.createSQLQuery("select * from countrylist").list();
				//List<CountryBean> slist = Session.createQuery("from countrylist").list();
		 }catch(Exception e){
			 e.printStackTrace();
		 }
		 return stlist;
	}
	
	@Override
	@Transactional
	public @ResponseBody List<JobList> getJobList() {
		
		List<JobList> joblist= null;
		 try{
			 Session session = sessionFactory.getCurrentSession();
			 System.out.println("GeneralDAOImpl.java :: getJobList()" +sessionFactory.hashCode() +" session :"+session.hashCode());
			 /*Transaction transaction = null;
             transaction = session.beginTransaction();
             */
             joblist= session.createCriteria(JobList.class).list();
             
            /* transaction.commit();
             session.flush();
             session.close();*/
         }catch(Exception e){
			 e.printStackTrace();
		 }
		 return joblist;
	}
}