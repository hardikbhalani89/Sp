<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
  <head> 
    <title></title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
	<meta http-equiv="X-UA-Compatible" content="IE=8" />
	<meta name="description" content="" />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/styles.css" />

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/modernizr.custom.61720.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/general.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.infieldlabel.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jwplayer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/devjs/urlencodeJS.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/devjs/indexJS.js"></script>
 <script src="http://malsup.github.com/jquery.form.js"></script> 
<script type="text/javascript" charset="utf-8">
		$(function(){ $(".placeholder").inFieldLabels(); });
	</script>
  
<script type="text/javascript">

function setload(){
	if($("#errormsg").val()!=""){
		loadPopupBox("Sorry, this email is already registered. Please try again with a different email address","");
		$("#errormsg").val("");
	}
}

/* 
function urlReload(){
  	if(window.location.href.indexOf("www") > -1)
    	{
    	  return true;
    	}
    else{
		window.location.replace("http://www.postconnect.co.uk");
		return true;
    }
}
 */
function setMetadata(){
	var postdata = new Object();
  	postdata.page = "index";
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
 
 

function validateForm(){
	 if($("#email").val()!=""){
			return true;
	 }else{
		 loadPopupBox("Please enter valid email Address\ne.g. abc@xyz.com","");
		 return false;
	 }
 }

</script>

	 <script type="text/javascript" src="http://platform.linkedin.com/in.js">
	    api_key:za9kg51l0njt
		authorize: true
	</script>
	</head>
  <body onload="javascript:pageloading++;setload();">
  	
  	<input type="hidden" id="errormsg" value="${message}" />
  	<div id="wrapper">
    	 <div class="strechbg"><img src="<c:url value="/resources/img/bgi/body-bg.jpg" />" height="100%" width="100%" alt="backimage" /></div> 
        <div class="center-wrapper">
        	<div class="header">
            	<h1 class="logo"><a href="#" title="logo"><img src="<c:url value="/resources/img/logo.png" />" height="35" width="152" alt="Logo Image" /></a></h1>
            	
            </div>
           
                <div class="newslatter-block">
                	 <h2>1. Connecting people in Post.</h2> 
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper, sem sed lobortis imperdiet, orci risus convallis orci, non luctus neque dui id libero. Etiam laoreet ante consectetur urna sagittis sit amet pretium sem aliquam.</p> -->
                     <p>Backed by some of the best names in the industry from Editors to Post Production Supervisors, Post Connect is an exciting new project aimed at bringing the post production community together on all levels.<br>Join us now ready for the launch!</p>
                    <%-- <form action="" method="get" class="sub-form">
                    	<div class="txt-wrap">
                    	<label for="username" class="placeholder">
                    	Enter your email address</label><label>
                    	<input type="text" class="txtbox" value="" name="username"  
                    	id="username" /></label></div>
                    	<!-- <Button>title="Sign Up for Free">Sign Up for Free</Button> -->
                    	<input type="submit" id="submit" value="Sign Up for Free" />
                    </form>  --%>
                    
                    

	<form:form method="POST" action="/Sp/signup" class="sub-form" id="form1" onsubmit="return validateForm()">
		<div class="txt-wrap">
				<form:label for="email" path="email" class="placeholder" >Enter your email address</form:label>
				<form:input type="text" path="email" class="txtbox" value="" name="email" id="email" />
				<input type="submit" id="submit" value="Sign Up for Free" onclick="sub();" />
		</div>
	</form:form>
	
	<%-- <form action="/Sp/signup" method="post" class="sub-form">
                    	<div class="txt-wrap"><label for="username" class="placeholder">
                    	Enter your email address</label><label>
                    	<input type="text" class="txtbox" value="" name="username"  
                    	id="username" /></label></div>
                    	<!-- <Button>title="Sign Up for Free">Sign Up for Free</Button> -->
                    	<input type="submit" id="submit" value="Sign Up for Free" />
                    </form>  --%>
	
                </div>
                
              <div class="social-wrapper">
                  <p>Or</p>	
                  <ul>
                  	<li class="social-fb">
                  	 <a href="#"
                  	onclick="return window.open('https://graph.facebook.com/oauth/authorize?type=user_agent&client_id=557850514273427&scope=read_stream,offline_access,email&redirect_uri=http://localhost:8080/APIDemo/access.html?sm=fb','newwindow','width=450,height=500,status=yes,resizable=yes,scrollbars=yes');"  
                  	title="Sign-in with Facebook">Sign-in with Facebook</a> 
                
                  	
                  	</li>
                    
                    <li class="social-twitter">
                    <a href="#" id="twittersignup"
                    onclick="return window.open('signin','newwindow','width=450,height=500,status=yes,resizable=yes,scrollbars=yes');" 
                    title="Sign-in with Twitter">Sign-in with Twitter</a>
                    
                    </li>
                    
                    <li class="social-linkdein">
                    <a href="javascript:void(0);" id="linkedinsignup" 
                    title="Sign-in with LinkedIn" onclick="onLinkedInLoad();" >Sign-in with LinkedIn</a>
                    </li>
                  </ul>
                </div>
              
            </div>
            
        </div>
    </div>
    <!--Start of PopUp-->
    <div id="popup_box"> 
            <ul class="detail-form">
                <li>
                      <label id="pouptext">Catagory Title</label>
                </li>
                <li> <input type="text" id="popupvalue" value="" style="display: none;" /></li>
                <li>
                    <div class="cf btn-wrapper">
                        <div style="text-align: center;">
                            <a href="javascript:void(0)" title="Ok" class="green-btn"  onclick="unloadPopupBox();">Ok</a>
                        </div>
                    </div>
                </li>
            </ul>
            <a id="popupBoxClose" href="javascript:void(0)" title="Close" onclick="unloadPopupBox();">
            <img src="<c:url value="/resources/img/popupclose.png" />" width="35" height="35" alt="Close Icon" /></a>   
        </div><!--End of Pop UP--> 
        
        
   
 <script type="text/javascript">
		function passparamfb(sm,at,ei,error){
			
	   if(sm!=undefined && error==undefined){
		   
		  	var queryString = addToQueryStringEncode(queryString,'sm',sm);
			queryString = addToQueryStringEncode(queryString,'access_token',at);
			queryString = addToQueryStringEncode(queryString,'expires_in',ei);

			
			window.location.href = "signup.html"+"?" + encode64(queryString);


	   }else{
		  
	   }
	   	
		} 	
	</script>
    </body>
 </html>