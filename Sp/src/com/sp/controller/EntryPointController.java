package com.sp.controller;


import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.imageio.ImageIO;

import org.apache.commons.fileupload.FileItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.sp.utility.Constants;
import com.sp.bean.CropperBean;
import com.sp.bean.UserBean;
import com.sp.model.Countrylist;
import com.sp.model.JobList;
import com.sp.model.UserDetail;
import com.sp.service.GeneralService;
import com.sp.service.UserService;
import com.sp.utility.FileUploadForm;

@Controller
public class EntryPointController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private GeneralService generalService;
	
	
	@RequestMapping(value = {"/","/index"}, method = RequestMethod.GET)
	public ModelAndView doLogin(ModelMap model) {
		model.addAttribute("message", "");
		return new ModelAndView("index", "command", new UserBean());		
		//return "index";
	}

	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ModelAndView signupUser(@ModelAttribute("user") UserBean userBeanObj, ModelMap model) {
		
		UserDetail userDetailModel=prepareModel(userBeanObj);
		String userid = userService.addUser(userDetailModel);
		System.out.println("user:"+userid);
		
		if(userid!=null){
			userBeanObj.setUserid(userid);
			List<Countrylist> countryList = generalService.getCountryList();
			List<JobList> jobList = generalService.getJobList();
			model.addAttribute("countryList", countryList);
			model.addAttribute("jobList", jobList);	
			model.addAttribute("userdetails", userBeanObj);
			model.addAttribute("cropperbean", new CropperBean());
			return new ModelAndView("signup",model);
		}else{
			model.addAttribute("message", "User Already Exist");
			model.addAttribute("userdetails", userBeanObj);
			return new ModelAndView("index","command", new UserBean());	
		}
		
	}
	

	@RequestMapping(value = "/uploadtest", method = RequestMethod.POST)
	public ModelAndView uploadtestProcess(UserBean userBeanObj,ModelMap model) throws IOException {
	    
		InputStream inputStream = null;  
		OutputStream outputStream = null;  
		String fileName=null;
		String imagePath=null;
	    String userID=null;
	  
	    
	    List<MultipartFile> files = userBeanObj.getFileField();
	   
	    for(MultipartFile f:files){
	        System.out.println("File: "+f.getOriginalFilename());
	        fileName=f.getOriginalFilename();
	        userID = userBeanObj.getUserid();
	        try {  
				inputStream = f.getInputStream();
				
				File f1 = new File(Constants.SERVER_PATH+userID);
				if(!f1.exists())
					f1.mkdir();
				
				imagePath = Constants.SERVER_PATH+""+userID+"/"+fileName;
				System.out.println("imagePath : "+imagePath);
				java.io.File newFile = new File(imagePath);
				if (!newFile.exists()) {
					newFile.createNewFile();
				}
				outputStream = new FileOutputStream(newFile);
				int read = 0;
				byte[] bytes = new byte[1024];

				while ((read = inputStream.read(bytes)) != -1) {
					outputStream.write(bytes, 0, read);
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	      
	    }
	    
	    imagePath=Constants.IMAGE_DISP_PATH+""+userID+"/"+fileName;
	    System.out.println("Image Disp path:"+imagePath);
	  
	    userBeanObj.setProfileurl(imagePath);
	    
	    
	    System.out.println("Profileurl : "+userBeanObj.getProfileurl());
	    
	    List<Countrylist> countryList = generalService.getCountryList();
		List<JobList> jobList = generalService.getJobList();
		model.addAttribute("countryList", countryList);
		model.addAttribute("jobList", jobList);	
		model.addAttribute("userdetails", userBeanObj);
		model.addAttribute("cropperbean", new CropperBean());
		return new ModelAndView("signup",model);
	    //ssreturn new ModelAndView("signup","user",model);
	    //return "uploadimage";
	}
	
	@RequestMapping(value = "/imagecrop", method = RequestMethod.POST)
	public ModelAndView imagecropProcess(CropperBean cropperBeanObj,UserBean userBeanObj,ModelMap model) throws IOException {
	
		
		System.out.println(cropperBeanObj.getX());
		System.out.println(cropperBeanObj.getY());
		System.out.println(cropperBeanObj.getW());
		System.out.println(cropperBeanObj.getH());
		System.out.println(cropperBeanObj.getUserIdCrop());
		System.out.println(cropperBeanObj.getWeburl());
		
		
		

		String croppedImagePath =cropImage(cropperBeanObj.getX(),cropperBeanObj.getY(),cropperBeanObj.getW(),cropperBeanObj.getH(),cropperBeanObj.getWeburl(),cropperBeanObj.getUserIdCrop());
		
		userBeanObj.setProfileurl(croppedImagePath);
		
		System.out.println("croppedImagePath : "+ croppedImagePath);
		
		model.addAttribute("userdetails", userBeanObj);
		model.addAttribute("cropperbean", new CropperBean());

		return new ModelAndView("signup",model);
	
	}
	
	public String cropImage(int x, int y, int w, int h,String image,String userId) {
		try {
			image = image.replace(Constants.IMAGE_DISP_PATH_IP.toString(), "");
			System.out.println(image);;
//			String str = getServletContext().getRealPath("/").replace('\\', '/');
//			String str = System.getProperty("CATALINA_HOME");
			String str = "/home/indianic/work/servers/apache-tomcat-7.0.34/webapps/Sp/";
			System.out.println("str="+str);
			File f = new File(str);
			
			String s=f.getParent();
			
			
			
			String temp=s.substring(0,s.lastIndexOf("/"));
			str = str.substring(0,temp.length());
			
			
			
			System.out.println(str + image);
			File originalFile = new File(str+ image);
			String finalImage =null;
			
			if(originalFile.exists()){
				BufferedImage originalImgage = ImageIO.read(originalFile);
	
				System.out.println("Original image dimension: "+ originalImgage.getWidth() + "x"+ originalImgage.getHeight());
	
				BufferedImage SubImgage = originalImgage.getSubimage(x, y, w, h);
				System.out.println("Cropped image dimension: "+ SubImgage.getWidth() + "x" + SubImgage.getHeight());
	
				finalImage = Constants.IMAGE_DISP_PATH_IP+image.substring(0,image.lastIndexOf('.'))+"thumb"+image.substring(image.lastIndexOf('.'), image.length());
//				
//				String croppedImagePath=str + finalImage;

				File tempDir = new File(Constants.SERVER_PATH + userId);
				File[] files = tempDir.listFiles();
				for (File file : files) {
					File oldfiles = new File(Constants.SERVER_PATH + userId+ file.separator + file.getName());
					oldfiles.delete();
				}
				
				File outputfile = new File(str+ image.substring(0,image.lastIndexOf('.'))+"thumb"+image.substring(image.lastIndexOf('.'), image.length()));
				
				ImageIO.write(SubImgage, "jpg", outputfile);
				System.out.println("Image cropped successfully: "+ outputfile.getPath());
//				finalImage =outputfile.getPath();
				
				
				try {
				//	originalFile.delete();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			//return outputfile.getName();
			return finalImage;

		} catch (IOException e) {
			e.printStackTrace();
			return "";
		}
	}
	
	
	
	@RequestMapping(value = "/thankyou")
	public ModelAndView doSave(@ModelAttribute("user") UserBean userBeanObj,ModelMap model) {
		model.addAttribute("message", "Welcome Spring MVC Framework!");
	
		UserDetail userDetailModel=prepareModel(userBeanObj);
		userService.updateUser(userDetailModel);
		
		return new ModelAndView("thankyou", "user",model);
	}
	
	private UserDetail prepareModel(UserBean userobj){
		UserDetail u = new UserDetail();
		
		u.setUserid(userobj.getUserid());
		u.setAboutme(userobj.getAboutme());
		u.setAltemail(userobj.getAltemail());
		u.setCountry(userobj.getCountry());
		u.setEmail(userobj.getEmail());
		u.setEntrydate(userobj.getEntrydate());
		u.setFacebookemail(userobj.getFacebookemail());
		u.setFirstname(userobj.getFirstname());
		u.setGender(userobj.getGender());
		u.setImdbprofile(userobj.getImdbprofile());
		//u.setIndustry(userobj.getIndustry());
		u.setLastname(userobj.getLastname());
		u.setLinkedinemail(userobj.getLinkedinemail());
		u.setMobilephone(userobj.getMobilephone());
		u.setPassword(userobj.getPassword());
		u.setPhonecode(userobj.getPhonecode());
		u.setPhonecountry(userobj.getPhonecountry());
		u.setPostcode(userobj.getPostcode());
		u.setPrimaryjob(userobj.getPrimaryjob());
		u.setProfilecreatedate(userobj.getProfilecreatedate());
		u.setProfilepic(userobj.getProfilepic());
		u.setProfilestatus(userobj.getProfilestatus());
		u.setProfileupdatedate(userobj.getProfileupdatedate());
		u.setProfileurl(userobj.getProfilepic());
		u.setTwitteremail(userobj.getTwitteremail());
		u.setWeburl(userobj.getWeburl());
		return u;
	}
	
	/*@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String signupUser(@ModelAttribute UserBean user,ModelMap model) {
		System.out.println("user name:"+user.getEmail());
		List<Countrylist> jo = generalService.getCountryList();
		System.out.println(jo.get(0).getCountryCode()+"-"+jo.get(0).getCountryName()+"-"+jo.get(0).getPhoneCode());
		userService.addUser(user);
		model.addAttribute("eMail", user.getEmail());
		return "signup";
	}*/
	
}
