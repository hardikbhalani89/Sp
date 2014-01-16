package com.sp.dao;
import java.util.List;
import java.util.UUID;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sp.bean.UserBean;
import com.sp.model.UserDetail;

@Repository
public class UserDAOImpl extends GeneralDAOImpl1 implements UserDAO {
	
	@Override
	@Transactional
	public String addUser(UserDetail userBeanObj) {
		
		Session session = sessionFactory.getCurrentSession();
		System.out.println("UserDAOImpl.java :: addUser()" +sessionFactory.hashCode() +" session :"+session.hashCode()); 
        /*Transaction transaction = null;
        transaction = session.beginTransaction();*/
        
		/*	  SessionFactoryImplementor sessionFactoryImplementation = (SessionFactoryImplementor) session.getSessionFactory();
	    ConnectionProvider connectionProvider = sessionFactoryImplementation.getConnectionProvider();
	
	        try {
				connectionProvider.getConnection().close();
				System.out.println(session.isConnected());
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
	        
		 Criteria cr = session.createCriteria(UserDetail.class);
		 cr.add(Restrictions.eq("email", userBeanObj.getEmail()));

		 cr.setProjection(Projections.rowCount()).uniqueResult();

		 
		 List<Long> rowCount = cr.list();

	     System.out.println("Total Coint: " + rowCount.get(0) );
		 if(rowCount.get(0)==0){
			 session.save(userBeanObj);
			 return userBeanObj.getUserid();
		 }else{
			 return null;	 
		 }
		
        //transaction.commit();
        //session.flush();
        //session.close();
		
	}

	@Override
	@Transactional
	public int updateUser(UserDetail userBeanObj) {
		try{
			Session session = sessionFactory.getCurrentSession();
			
			session.saveOrUpdate(userBeanObj);
			return 1;
		}catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		
	}

	@Override
	public UserBean getUserAccountDetails(String eMail) {
		// TODO Auto-generated method stub
		return null;
	}

}
