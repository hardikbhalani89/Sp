/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.sp.utility;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Hibernate Utility class with a convenient method to get Session Factory object.
 *
 * @author NICPC04
 */
public class Helper {
	
	@Autowired  
	public SessionFactory sessionFactory; 
	
    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            //sessionFactory = new Configuration().configure().buildSessionFactory();
        	
            
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
    public void openSession(){
    	try{
    		sessionFactory.openSession();
    	}catch(HibernateException e){
    		e.printStackTrace();
    	}
    }
    
    
}
