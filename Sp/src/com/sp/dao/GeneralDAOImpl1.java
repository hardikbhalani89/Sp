package com.sp.dao;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class GeneralDAOImpl1 {

	@Autowired  
	public SessionFactory sessionFactory; 
	
	/*public GeneralDAOImpl1(){
		if(sessionFactory==null){
			System.out.println("session factory is null");
			sessionFactory = new Configuration().configure("/resources/hibernate.cfg.xml").buildSessionFactory();
		}
	}*/
	
	
}
