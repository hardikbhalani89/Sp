package com.sp.utility;

import java.io.File;
import java.net.InetAddress;


public enum Constants {
	SUCCESS,FAILURE,SERVER_PATH,REDIRECT_PATH,IMAGE_DISP_PATH,IMAGE_DISP_PATH_IP,NEWVAR;
	
	
  public String toString(){
	  switch (this) {
		case SUCCESS:
			return "success";
		case FAILURE:
			return "failure";
		case SERVER_PATH:	
			return System.getProperty("catalina.base") + File.separator+"spimages"+File.separator;
		case REDIRECT_PATH:
			return "http://localhost:8080/Sp/";
		case IMAGE_DISP_PATH:
			return "http://127.0.0.1:8080/spimages"+File.separator;
		case IMAGE_DISP_PATH_IP:
			return "http://127.0.0.1:8080";
		case NEWVAR:
			return "ASDEd";
			//return "http://127.0.0.1:8080";
			//return "/postconnectimages"+File.separator;
		default:
			break;
	  }
	  return "nothing";
  }
  public static void main(String[] args) {
	  try {
		  System.out.println(InetAddress.getLocalHost().getHostAddress());
	} catch (Exception e) {
		// TODO: handle exception
	}
  }
  public static String getIp(){
	  try {
		return InetAddress.getLocalHost().getHostAddress();
	} catch (Exception e) {}
	  return "54.229.89.145" ;
  }
}
