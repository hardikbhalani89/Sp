<%-- 	 --%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
  <head> 
    <title>Osbourne Carter</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="" /> 
     <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/styles.css" /> 
    
    
	<link type="text/css" href="${pageContext.request.contextPath}/resources/css/smoothness/jquery-ui-1.8.10.custom.css" rel="stylesheet" /> 
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/1.7.2.jquery.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-ui-1.8.7.custom.min.js"></script> 
    <!-- <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script> -->
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/modernizr.custom.61720.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/general.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/radio_checkbox.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/selectbox.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/jquery.Jcrop.min.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/jquery.Jcrop.min.css" type="text/css" />
    <script type="text/javascript" src="http://platform.linkedin.com/in.js">
	 	//api_key:ilugyru6bcsu
		api_key:cf4m1iy9akp0
		authorize: true
	</script>
	<link href="${pageContext.request.contextPath}/resources/css/jWindowCrop.css" media="screen" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.jWindowCrop.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/actb.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/common.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/jquery.infieldlabel.min.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" charset="utf-8">
		$(function(){ $(".placeholder").inFieldLabels(); });
	</script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jQuery.dPassword.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/iPhonePassword.js"></script>
	
	

	
	
	
	
	  <script type="text/javascript">
	 
	  
	  
	  function setMetadata(){
		  
			var postdata = new Object();
		  	postdata.page = "signup";
			 	$.ajax({
			  		type:"GET",
			  	  	url: "service/getAppSettings?page="+postdata.page,
			  	  	contentType: "application/json",
			  		success: function(data){
			  			var response=eval("("+JSON.stringify(data)+")");
			  			if(response.status=="success"){
			  		  		//page title
			  				document.title=response.appinfo.title;
			  		  		//meta description
							var meta=document.getElementsByTagName("meta");
							for (var i=0; i<meta.length; i++) {
							    if (meta[i].name.toLowerCase()=="description") {
							        meta[i].content=response.appinfo.description;
								}
							}
							//google analytics
							(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  				  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

							
				  				  ga('create', "'"+response.appinfo.trackingid+"'", '127.0.0.1:8080');
				  				  ga('send', 'pageview');
				  				  
			  			}
			  		},
			  		error: function() {
			  		}
			  	});
		}
	 
	  // $("select#country option[value='GB']").attr("selected", "selected");
	  $(function(){
		  	 $('.types').selectBox({
				selectedClass:'.types',
				contWidth:200
			});
		  	 /*$('.types1').selectBox({
				selectedClass:'.types1',
				contWidth:200
			}); */
		});
	
	//$("select#country option[value='GB']").attr("selected", "selected");
	//$("select#jobList option[value='0']").attr("selected", "selected");
	
	function processImage(){
			
			if($('#profileurl').val()!='' && $('#browse').attr('src')=="/Sp/resources/img/user-img.png"){
				displayImageDialog();
				//$('#browse').attr('src',$('#profileurl').val());
			}
			else if($('#profileurl').val()!='' && $('#browse').attr('src')!="" && $('#browse').attr('src')!="/Sp/resources/img/user-img.png"){
				$("#showImageDialog").empty().dialog("destroy");
				$('#browse').attr('src',$('#profileurl').val());
			}
		}
		
</script>

	
	<script language="JavaScript" src="http://j.maxmind.com/app/geoip.js"></script>
  </head>
  <body onload="processImage();">
 	
	
		
   	<div id="wrapper">
     	<div class="strechbg"><img src="${pageContext.request.contextPath}/resources/img/bgi/body-bg.jpg" height="100%" width="100%" />
    	</div> 
        <div class="center-wrapper">
        	<div class="header">
            	<h1 class="logo"><a href="#" title="logo"><img src="${pageContext.request.contextPath}/resources/img/logo.png" height="35" width="152" alt="Logo Image" /></a></h1>
            </div>
          
          <%--   <div>
            Welcome : ${eMail}
	
	<hr><br>
	Country: 
	<select name="countylist" id="countylist" >
		<c:forEach var="cList" items="${countryList}">
			<option value="${cList.countryCode}">${cList.countryName}</option>
		</c:forEach>
	</select></div> --%>
            
            <div class="content post-form">
            	
            
				<%-- <form:form method="post" enctype="multipart/form-data" modelAttribute="fileUploadForm" action="/Sp/upload">
				<input type="file" name="files"  />
				<input type="text" name="message" value=""  />
				<input type="submit" value="Upload" />
				
				</form:form> --%>
				
<%-- 				<form method="post" action="/Sp/uploadtest" enctype="multipart/form-data">

<p>Type: <input type="text" name="type" value="multiPartFileSingle" size="60" /></p>
<p>File 1: <input type="file" name="files" size="60" multiple="true" /></p>
<!-- <p>File 2: <input type="file" name="files[1]" size="60" /></p> -->
<p><input type="submit" value="Upload" /></p>
</form> --%>


            
            	<form:form  action="/Sp/thankyou"  name="form1" id="form1" modelAttribute="userdetails"  enctype="multipart/form-data" >
								
								 <input type="hidden" name="uidfolder" value="" id="uidfolder" />
								 
                	<fieldset>
                    	<p class="title bottom-bordr"><span>Create Account.</span> Set your basic account, details, Including name and location settings.</p>
                        <ul class="bottom-bordr">
                            <!-- <a href="javascript:void(0);" title="PopUp" onclick="loadPopupBox();">PopUp</a> -->
                 
	                            <form:label path="email" for="email">Enter your email address</form:label>
								<form:input path="email" id="email" class="txtbox" />
				
				
							<form:input type="hidden" path="userid" id="userid"  />
				
				
                            <li class="yourname">
                            <form:label path="firstname" for="firstname" >Your Name<span>*</span></form:label>
                            
                            
                            <div>
                            
								<form:input path="firstname" id="firstname" />
                           																																																																																																												
                           
                            <!-- <input type="text" id="firstName" 
                            onblur="checkFirstName();changeProfileUrlDynamic();" 
                            onkeyup="changeProfileUrlDynamic();" />
                            <img src="img/ok.png" alt="Valid"   style="display: none;" id="firstNameValid"/>
                            <img src="img/cancel.png" alt="Invalid"  style="display: none;" id="firstNameInvalid" /> -->
                            
                            </div>
                            <div>
                            	<form:input path="lastname" id="lastname" />
	                            <!-- <input type="text" id="lastName" 
	                            onblur="checkLastName();changeProfileUrlDynamic();changeProfileUrl();"  
	                            onkeyup="changeProfileUrlDynamic();"/>
	                            <img src="img/ok.png" alt="Valid"   style="display: none;" id="lastNameValid"/>
	                            <img src="img/cancel.png" alt="Invalid"  style="display: none;" id="lastNameInvalid" /> -->
                            </div>
                              </li>

							<li>
							<!-- <label>Postcode</label> -->
								<form:label path="postcode" for="postcode">Postcode</form:label>
								<form:input path="postcode" id="postcode" style="width: 100px;" />
						
							<!-- <input type="text" id="postcode" onblur="checkPostcode()" style="width: 100px;"/>
							<img src="img/ok.png" alt="Valid"   style="display: none;" id="postcodeValid"/>
							<img src="img/cancel.png" alt="Invalid"  style="display: none;" id="postcodeInvalid" /> --> 
							</li>
                            
                            
                            <li>
                            	<!-- <label>Country</label> -->
                            	<form:label path="country" for="countryList">Country<span>*</span></form:label>
                            	<div class="usertype">
									<form:select path="country"  id="countryList" class="types">
										<form:option value="0" label="Select" />
										<form:options items="${countryList}" itemValue="countryCode" itemLabel="countryName" />
									</form:select>
									<!-- <select class="types" id="countryList" onchange="changeMobileCountry(this.value);">
                                    <option>Select</option>
                                  </select> -->
                                  
                                  
                                </div>
                              <!--   <div style="float:right; width: 40px;text-align: left; margin-right: 130px; margin-top: 5px;">
									 <img src="img/ok.png" alt="Valid"   style="display: none;" id="countryValid"/>
									 <img src="img/cancel.png" alt="Invalid"  style="display: none;" id="countryInvalid" />
								 </div> -->
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset class="bottom-bordr">
                    	<p class="title"><span>Profile Details.</span> Add details about your profession and biography.</p>
                        
                        
                        <ul class="top-space">
                        
          <li style="padding-bottom:5px;">
               <label>Profile Avatar</label>
                	<div class="upload-wrapper">
                      <div class="user-img">
                      <div>
                      <form:input type="hidden" path="profileurl" id="profileurl"/>
                      
                      <img id="browse" src="${pageContext.request.contextPath}/resources/img/user-img.png" width="80" height="80" alt="User Image" title="Select Avatar" />
                      
                    
                           
                      </div>
                      </div>
                           <div id="logoupload">
                           <label for="fileField"></label>
                		<input type="file" name="fileField" id="fileField" style="display: none;" accept="image/*" onchange="performImageUpload(this.form);" />

 <!-- <input type="file" name="files" size="60" multiple="true" /> -->

</div>
					<button type="button" class="crop-btn" onclick="displayImageDialog();" style="display: none;" id="cropphoto">crop photo</button>
                      <iframe id="content_frame" name="content_frame" frameborder="0" width='100%' height='1px' style="visibility: hidden;"></iframe> 
     </div>
                   </li>     
							<li style="padding-bottom:5px;">
							
								<label>Gender<span>*</span></label>
                        	 <!-- <div class="gender">
                        	 <label class="label_radio" for="male"><input id="male" type="radio" name="gender"  value="male"  onchange="checkGender()" />Male</label>
                        	 <label  class="label_radio" for="female"><input type="radio" name="gender" id="female" value="female" onchange="checkGender()"/>Female</label>
                        	 <img src="img/ok.png" alt="Valid"   style="display: none;padding-top:5px;" id="genderValid"/>
                        	 <img src="img/cancel.png" alt="Invalid"  style="display: none;padding-top:5px;" id="genderInvalid" />
                        	 </div> 
		                        	<form:radiobutton path="gender" value="M" label="M" />
		                        	<form:radiobutton path="gender" value="F" label="F" />
		                        	-->
		                        	<form:radiobutton path="gender" value="male" id="male"/>Male 
                					<form:radiobutton path="gender" value="female" id="female" />Female
		                        	
                        	 </li>
                            
                            
                        	<li style="padding-bottom:5px;"><label>Industry<span>*</span></label>
                        <!--
                        	<div class="gender">
                        	 <label class="label_radio" for="television"><input id="television" type="radio" name="industry"  value="television" onchange="checkIndustry()" />Television</label>
                        	 <label  class="label_radio" for="film"><input type="radio" name="industry" id="film" value="film" onchange="checkIndustry()" /> Film</label>
                        	 <label  class="label_radio" for="other"><input type="radio" name="industry" id="other" value="other" onchange="checkIndustry()" /> Other</label>

                        	 
                        	 
                        	 <img src="img/ok.png" alt="Valid"   style="display: none;" id="industryValid"/><img src="img/cancel.png" alt="Invalid"  style="display: none;" id="industryInvalid" />
                        	 </div>
                        	                         	  -->
                        	 
                        	 
                     
                        	 
                        	 <div>
                        	 
                        	 	<form:checkbox path="industry" id="television" value="television"/> Television
                        	 	<form:checkbox path="industry" id="film" value="film"/> Film
                        	 	<form:checkbox path="industry" id="other" value="other"/> Other
                        	 
                        	 <!-- <label class="label_check" for="television">
                        	  <input type="checkbox" name="industry" id="television" value="television" onclick="addremoveIndustry(this.value,this.id);"/> Television
                        	  </label>
                        	  <label class="label_check" for="film">
                        	  <input type="checkbox" name="industry" id="film" value="film" onclick="addremoveIndustry(this.value,this.id);"/> Film
                        	  </label>
                        	  <label class="label_check" for="other">
                        	  <input type="checkbox" name="industry" id="other" value="other" onclick="addremoveIndustry(this.value,this.id);"/> Other
                        	  </label>
<img src="img/ok.png" alt="Valid"   style="display: none;" id="industryValid"/><img src="img/cancel.png" alt="Invalid"  style="display: none;" id="industryInvalid" /> -->                        	  
                        	  </div>
                        	 </li>
                        	 
                        	 
                            <li><label>Primary Job<span>*</span></label>
                            	 <!--<div class="usertype">
                                  <select class="types1" id="jobList" onblur="checkPrimaryJob()">
                                    <option value="">Select</option>
                                    
                                  </select>
                                  </div> 
                                 -->
                                 
                                 
									
                                	<form:select path="primaryjob" class="types1">
										<form:option value="0" label="Select" />
										<form:options items="${jobList}" itemValue="jobcode" itemLabel="jobname" />
									</form:select>
                                 
                                 <div style="float:right; width: 40px;text-align: left; margin-right: 70px; margin-top: 5px;">
									 <img src="img/ok.png" alt="Valid"   style="display: none;" id="jobProfileValid"/>
									 <img src="img/cancel.png" alt="Invalid"  style="display: none;" id="jobProfileInvalid" />
								 </div>
                                <!--  <div>
                                 <input type="text" id="jobList" name="jobList" value="" onblur="checkPrimaryJob();"  />
                                   <input type="hidden" id="jobList_hidden" name="jobList_hidden" value="" />
                                   </div> -->
                                 
								                              
                             </li>
                            <li class="cf">
                           
                           		 <img src="img/ok.png" alt="Valid"   style="display: none; float:right; margin-right:24px;" id="aboutYouValid"/>
                            	<img src="img/cancel.png" alt="Invalid"  style="display: none; float:right; margin-right:24px;" id="aboutYouInvalid" />
                            
                            <label class="alignleft">2 Lines About You<span>*</span><br><span id="aboutLength">140 Char</span></br></label>
                            
                            
                            <div class="txt-wrap aboutMe-outer">
                        <!--    <label for="aboutMe" id="lbl-aboutMe" class="placeholder">
                    	 i.e. Editor, Avid Media Composer Lover, Tea Drinker, Just finished Working on World War Z</label>
                    	<label>
                    	 <textarea class="alignleft" cols="50" rows="10" id="aboutMe" onkeydown="ckeckAboutYouLength()" onkeyup="ckeckAboutYouLength()"; onblur="checkAboutYou()" ></textarea> 
                    	    	
                    	</label> -->
                    	
                    			<form:textarea path="aboutme"  cols="50" rows="10" />
                    	
                    	</div>
                            	
                            	
                         
                            	
                            	<br/>
                            	 
                            </li>
                            <li>
                            
                             <!-- <label>IMDB Profile</label> -->
                             <form:label path="imdbprofile" for="IMDBProfile">IMDB Profile</form:label>
                             
                             
                            <div class="txt-wrap IMDBProfile-outer">
                            		<!-- <label for="IMDBProfile" id="lbl-IMDBProfile" class="placeholder">i.e. http://www.imdb.com/name/nm0041644/</label>
                    				<label><input type="text" id="IMDBProfile" class="txtbox" onblur="checkImdbProfile()" value="" /></label> --> 
                    		
                    		 
								<form:input path="imdbprofile" id="IMDBProfile" />
                    			 
                    			
                    	
                    	</div>
                            
                            
<a href="#" onclick="window.open('http://www.imdb.com/','newwindow','width=450,height=300,status=yes,resizable=yes,scrollbars=yes');return false;" title="IMDB Profile">
<img src="${pageContext.request.contextPath}/resources/img/imdb-img.png" width="48" height="23" alt="IMDB Profile" /></a>
                            
                            <img src="img/ok.png" alt="Valid"   style="display: none;" id="ImdbValid"/><img src="img/cancel.png" alt="Invalid"  style="display: none;" id="ImdbInvalid" /> 
                            </li>
                            
                            
                            <!-- <li><label>Website URL</label><input type="text" id="WebURL" onblur="checkWebSiteURL()"/><img src="img/ok.png" alt="Valid"   style="display: none;" id="WebValid"/><img src="img/cancel.png" alt="Invalid"  style="display: none;" id="WebInvalid" /> </li>
							<li>
								<label>Profile URL</label>
								<label id="profileURL">www.postconnect.co.uk/people/</label>
								<input type="text" name="urlname" id="urlname" value="" 
								onblur="checkProfileURL();changeProfileUrl();" style="width: 108px;margin-left: -14px;"/>
								<img src="img/ok.png" alt="Valid"   style="display: none;" id="urlnameValid"/>
                                 <img src="img/cancel.png" alt="Invalid"  style="display: none;" id="urlnameInvalid" />
    						</li> -->
							<!--<li>
								<label id="toggleurl" onclick="changeProfileUrl();" 
								style="cursor: pointer;color: purple;
								float: left;font-size: 12px;font-weight: normal;">change</label>
							</li>-->					
						</ul>
                    </fieldset>
                    <fieldset class="bottom-bordr">
                    	<p class="title"><span>Social Links.</span> Add details about your profiles on social networks.</p>
                   <div class="social-wrapper social-connect-wrapper">  
                  <ul style="text-align: left;">
                  <li><label>Facebook</label></li>
                  	<li class="social-fb">
	               
	                 <!-- 
	                 <a target="content_frame" href="https://graph.facebook.com/oauth/authorize?type=user_agent&client_id=487825607966908&scope=read_stream,offline_access,email&redirect_uri=http://54.229.89.145/PostConnect/signup.html?sm=fb" onclick="stopReload(this.id);" title="Connect with Facebook">Connect with Facebook</a> 
	                  	  -->
	                	<!-- 
	                  	<a  href="https://graph.facebook.com/oauth/authorize?type=user_agent&client_id=621104157908543&scope=read_stream,offline_access,email&redirect_uri=http://localhost:8080/PostConnect/signup.html?sm=fb" id="fbconnect" onclick="stopReload(this.id);" title="Connect with Facebook">Connect with Facebook</a>
	                 -->
	                 
		                   <a href="#"  id="fbsignup"
	                  	onclick="return window.open('https://graph.facebook.com/oauth/authorize?type=user_agent&client_id=621104157908543&scope=read_stream,offline_access,email&redirect_uri=http://localhost:8080/PostConnect/access.html?sm=fb','newwindow','width=450,height=500,status=yes,resizable=yes,scrollbars=yes');"  
	                  	title="Connect with Facebook">Connect with Facebook</a> 
	                  
	                  
	                  	 <a href="#" id="fb"  style="display: none;" 
		                    onclick="deleteEntry(this.id);" 
		                    title="Connect from Facebook">Disconnect from Facebook</a>
		                    
	                  	<!-- <input type="checkbox" name="sm" id="fb" onclick="deleteEntry(this.id);" disabled="disabled" /> -->
                  	</li>
                  
                  	</br>
					<li><label>Twitter</label></li>                    
                    <li class="social-twitter">

                    	<!-- <a href="signin" id="twittersignup"  title="Connect with Twitter">Connect with Twitter</a> -->
                    	
	                    	<a href="#" id="twittersignup"
	                    onclick="return window.open('signin','newwindow','width=450,height=500,status=yes,resizable=yes,scrollbars=yes');" 
	                    title="Connect with Twitter">Connect with Twitter</a>
                    
                    	<!-- <input type="checkbox" name="sm" id="tw" onclick="deleteEntry(this.id);" disabled="disabled" /> -->
                    	 <a href="#" id="tw"  style="display: none;" 
	                    onclick="deleteEntry(this.id);" 
	                    title="Connect from Twitter">Disconnect from Twitter</a>
	                    
	                    
                    </li>
                     
                    
                      
                     
                    </br>
					<li><label>LinkdeIn</label></li>
                    <li class="social-linkdein">
                    
	                    <a href="javascript:void(0);" id="linkedinsignup" 
	                    title="Connect with LinkedIn" onclick="onLinkedInLoad_connect();">Connect with LinkedIn</a>
	                    
	               <!--      <input type="checkbox" name="sm" id="li" onclick="deleteEntry(this.id);" disabled="disabled" /> -->
	                
	                 <a href="#" id="li"  style="display: none;" 
	                    onclick="deleteEntry(this.id);" 
	                    title="Disconnect from LinkedIn">Disconnect from LinkedIn</a>
	                    
	                </li>
                    
                    
                    
                  </ul>
               </div>
               	
              
                    </fieldset><!-- 
                    <fieldset class="bottom-bordr">
                    <p class="title"><span>Security</span> Choose a password and provide backup security details.</p>
                     <ul class="top-space">
                        <li>         
                            <label for="user-password-2">Password</label>
		      				<input type="password" id="user-password-2" name="user-password-2" />
		      		   </li>
		      		   <li>         
                            <label for="user-password-3">Confirm Password</label>
		      				<input type="password" id="user-password-3" name="user-password-3" onblur="checkConfirmPassword();"/>
		      				<img src="img/ok.png" alt="Valid"   style="display: none;vertical-align: super;" id="cpValid" />
                                  <img src="img/cancel.png" alt="Invalid"  style="display: none;vertical-align: super;" id="cpInvalid" />
		      		   </li>
		      		 <li>
                    	<p style="color: #929292;float: left;font-family: sans-serif;
                    	font-weight: normal;padding-left: 68px;">
                    	If you cant sign in, we can help you using these options</p>
                    </li>
                    <li>	
                    	<label>Mobile phone</label>
             			<div class="usertype">
             			<select id="phonecountry" class="types1" style="width: 163px;!important;">
                                    <option>Select</option>
                                  </select></div>
                                  <input type="text" id="mobilephone" name="mobilephone" value="" 
                                  onblur="allowNumerics();" style="width: 85px;vertical-align: bottom;"/>
                                  <img src="img/ok.png" alt="Valid"   style="display: none;vertical-align: super;" id="mobilephoneValid" />
                                  <img src="img/cancel.png" alt="Invalid"  style="display: none;vertical-align: super;" id="mobilephoneInvalid" />       	
                    </li>
                    <li><label>Alternate email</label>
                    
                    <input type="text" id="altemail" name="altemail" value="" onblur="checkAlternateEmail();"/>
               		 	<div style="float:right; width: 40px;text-align: left; margin-right: 70px; 
               		 	margin-top: 5px;">
						<img src="img/ok.png" alt="Valid"   style="display: none;" id="altemailValid"/>
						<img src="img/cancel.png" alt="Invalid"  style="display: none;" id="altemailInvalid" />
                    	</div>
                    </li>
                     
                    </ul>
                    </fieldset>
                	 --><span class="btn-account">
                	 
                	 	 <!-- <a href="/Sp/thankyou" title="Update Account" id="submit" onclick="createAccount()">Update Account</a> -->
                	 	
                	 		
                	 	</span>
                	 	
                	 		 <input id="sdf" type="submit" value="Update Account" onclick="formsubmit();" />  
                </form:form>
            
                    
            </div>
            <div class="footer">
            	<h1 class="logo"><a href="#" title="logo"><img src="${pageContext.request.contextPath}/resources/img/logo.png" height="25" width="119" alt="Logo Image" /></a></h1>
            	<p>Copyright PostConnect and affiliates. All rights reserved.</p>    
            </div>
        </div>
    </div>
	<!--Start of PopUp-->
    <div id="popup_box"> 
            <ul class="detail-form">
                <li>
                      <label id="pouptext">Catagory Title</label>
                      <input type="text" id="popupvalue" value=""  style="display: none;" />
                </li>
                <li>
                    <div class="cf btn-wrapper">
                        <div class="alignleft">
                            <a href="javascript:void(0)" title="Cancel" class="green-btn"  
                            onclick="unloadPopupBox();window.location.href='http://54.229.89.145/PostConnect/'">Cancel</a>
                            <a href="javascript:void(0)" title="Save" onclick="submitTW();" class="green-btn">Save</a>
                        </div>
                    </div>
                </li>
                
            </ul>
            <a id="popupBoxClose" href="javascript:void(0)" title="Close" 
            onclick="unloadPopupBox();window.location.href='http://54.229.89.145/PostConnect/'">
            
            <img src="img/popupclose.png" width="35" height="35" alt="Close Icon" /></a>   
        </div><!--End of Pop UP--> 
	 
	 <div id="showImageDialog" style="display: none;margin: 10px auto;overflow:inherit;
	max-width: 1024px;
	font-family: sans-serif;
	height: 720px;">
	
	<div id='imageloading' style='font-size:10px;'>Loading...</div>
            <img id='target3' class='crop_me'  alt=''  src=''  />
			<div class='jwc_zoom_in'></div>
			<div class='jwc_zoom_out'></div>
			<br>
			<table style='margin-left:auto;margin-right:auto;'>
			<tr>
				<td style='background-image: url(img/slidericon.png);background-position: -40px -900px;height: 16px;width: 18px;'></td>
				<td><div id='slider'  style='width:255px;margin-left:auto;margin-right:auto;'></div></td>
				<td style='background-image: url(img/slidericon.png);background-position: -60px -900px;height: 16px;width: 18px;'></td>
			</tr>
			</table>
			<br>
			<div class='popup-crop-btn'>
				<form:form name='myForm' class='cropForm' modelAttribute="cropperbean" action='/Sp/imagecrop' id='myForm'  >
					<form:input type='hidden' name='x' value='' path='x' id='x' />
					<form:input type='hidden' name='y' value='' path='y' id='y' />
					<form:input type='hidden' name='w' value='' path='w' id='w' />
					<form:input type='hidden' name='h' value='' path='h' id='h' />
					<form:input type='hidden' name='weburl' value='' path='weburl' id='weburl' />
					<form:input type='hidden' name='userIdCrop' value='' path='userIdCrop' id='userIdCrop' />
					<input type='button' id='canclecrop' style='display:none;margin-right:10px;' value='Cancel' onclick='parent.$("#showImageDialog").empty().dialog("destroy");' />
					<input type='submit' id='cropthisphoto' style='display:none;' value='Apply' />
				</form:form>
			</div>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/devjs/urlencodeJS.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/devjs/signupJS.js"></script>
	
	
	
	
  	</body>
</html>