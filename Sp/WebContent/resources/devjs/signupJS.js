var firstNameError = 0;
var lastNameError = 0;
var imdbProfileError = 1;
var primaryJobError = 0;
var aboutYouError = 0;
var industryError = 0;
var genderError = 0;
var webError=1;
var uploadImage=0;
var altemailError=1;
var mobilenoError=1;
var profileurlError=1;
var passwordError=1;
var altemailOrMobile=0;

//var redirectURL="http://54.229.89.145/PostConnect/";
var redirectURL="http://127.0.0.1:8080/APIDemo/";
var sessionEmail="";
var folderEmail="";


  
function stopReload(idv){
  	if(idv=="fbconnect"){
  		 $('#fb').attr('checked','checked');
	     	 $('#fb').attr('disabled',false);
  	}
  	$("form").submit(function() { return false; });
  }

function displayImageDialog() {


	/*var imageDiv = "";
			//imageDiv +="<div><img id='target3' class='crop_me' src=\""+$("#browse").attr("src")+"\"  />" +
			//imageDiv +="<img id='target3' class='crop_me'  alt=''  src=\""+$("#browse").attr("src")+"\"  />"+
	imageDiv +="<div id='imageloading' style='font-size:10px;'>Loading...</div><img id='target3' class='crop_me'  alt=''  src='"+$('#profileurl').val()+"'  />"+
	"<div class='jwc_zoom_in'></div>"+
	"<div class='jwc_zoom_out'></div><br>"+
	"<table style='margin-left:auto;margin-right:auto;'>"+
		"<tr>"+
			"<td style='background-image: url(img/slidericon.png);background-position: -40px -900px;height: 16px;width: 18px;'></td>"+
			"<td><div id='slider'  style='width:255px;margin-left:auto;margin-right:auto;'></div></td>"+
			"<td style='background-image: url(img/slidericon.png);background-position: -60px -900px;height: 16px;width: 18px;'></td>"+
		"</tr>"+
	"</table><br>" +
					"</div><div class='popup-crop-btn'><form name='myForm' class='cropForm' action='cropper' method='post' id='myForm'  target='content_frame'>";
			imageDiv +="<input type='hidden' name='x' value=''/>";
			imageDiv +="<input type='hidden' name='y' value=''/>";
			imageDiv +="<input type='hidden' name='w' value=''/>";
			imageDiv +="<input type='hidden' name='h' value=''/>";
			imageDiv +="<input type='hidden' name='image' value='"+$('#profileurl').val()+"'/>";
			imageDiv +="<input type='hidden' name='userId' value='"+$('#userid').val()+"'/>";
imageDiv +="<input type='button' id='canclecrop' style='display:none;margin-right:10px;' value='Cancel' onclick='parent.$(\"#showImageDialog\").empty().dialog(\"destroy\");' />";
			imageDiv +="<input type='submit' id='cropthisphoto' style='display:none;' value='Apply' />";
			imageDiv +="</form></div>";*/
			
			
	
	/*var imageDiv = "";
	//imageDiv +="<div><img id='target3' class='crop_me' src=\""+$("#browse").attr("src")+"\"  />" +
	//imageDiv +="<img id='target3' class='crop_me'  alt=''  src=\""+$("#browse").attr("src")+"\"  />"+
imageDiv +="<div id='imageloading' style='font-size:10px;'>Loading...</div><img id='target3' class='crop_me'  alt=''  src='"+$('#profileurl').val()+"'  />"+
"<div class='jwc_zoom_in'></div>"+
"<div class='jwc_zoom_out'></div><br>"+
"<table style='margin-left:auto;margin-right:auto;'>"+
"<tr>"+
	"<td style='background-image: url(img/slidericon.png);background-position: -40px -900px;height: 16px;width: 18px;'></td>"+
	"<td><div id='slider'  style='width:255px;margin-left:auto;margin-right:auto;'></div></td>"+
	"<td style='background-image: url(img/slidericon.png);background-position: -60px -900px;height: 16px;width: 18px;'></td>"+
"</tr>"+
"</table><br>" +
			"</div><div class='popup-crop-btn'><form:form name='myForm' class='cropForm' action='/Sp/imagecrop' id='myForm'  >";
	imageDiv +="<form:input type='hidden' name='x' value='' path='x' id='x' />";
	imageDiv +="<form:input type='hidden' name='y' value='' path='y' id='y' />";
	imageDiv +="<form:input type='hidden' name='w' value='' path='w' id='w' />";
	imageDiv +="<form:input type='hidden' name='h' value='' path='h' id='h' />";
	
	imageDiv +="<form:input type='hidden' name='weburl' value='"+$('#profileurl').val()+"' path='weburl' id='weburl' />";
	imageDiv +="<form:input type='hidden' name='userid' value='"+$('#userid').val()+"' path='userid' id='userid' />";
	
	
imageDiv +="<input type='button' id='canclecrop' style='display:none;margin-right:10px;' value='Cancel' onclick='parent.$(\"#showImageDialog\").empty().dialog(\"destroy\");' />";
	imageDiv +="<input type='submit' id='cropthisphoto' style='display:none;' value='Apply' />";
	imageDiv +="</form:form></div>";*/
			
			//imageDiv += "<div style='height:740px;width:960px;overflow:auto;'><img id='target3' class='crop_me' src=\""+$("#browse").attr("src")+"\"  /></div>";
	
			
			$("#showImageDialog").dialog({
				height : 440,
				width : 350,
				autoOpen : true,
				modal : true,
				title : "Position and size your photo"
			});
		//alert(imageDiv);
			$("#target3").attr("src",$('#profileurl').val());
		$("#showImageDialog").show();
		//$("#showImageDialog").html(imageDiv);	
		
		$("#weburl").val($('#profileurl').val());
		$("#userIdCrop").val($('#userid').val());
		
	
		$('.crop_me').jWindowCrop({
			targetWidth:200,
			targetHeight:200,
			loadingText: 'hello world',
			onChange: function(result) {
				$("#x").val(result.cropX);
				$("#y").val(result.cropY);
				$("#w").val(result.cropW);
				$("#h").val(result.cropH);
				/*document.myForm.x.value = result.cropX;
				document.myForm.y.value = result.cropY;
				document.myForm.w.value = result.cropW;
				document.myForm.h.value = result.cropH;*/
			}
		});
		
		var currentSlide = 0; var nextSlide = 1;
		$( "#slider" ).slider({
				animate: "slow"
				
		}).bind("slide",function(event,ui){
		    currentSlide = jQuery('#slider').slider('value');
			nextSlide = ui.value;
			
			if(nextSlide>currentSlide){
				for(var i=0;i<nextSlide-currentSlide;i++){
					$(".jwc_zoom_in").click();
				}
			}else{
				for(var i=0;i<currentSlide-nextSlide;i++){
					$(".jwc_zoom_out").click();
				}
			}
		});
			

	
	$("#cropthisphoto").show();	
	$("#canclecrop").show();
	document.getElementById("imageloading").style.visibility='hidden';
}




function performImageUpload(str) {
	
	/*var inp = document.getElementById('fileField');
	var name = "";
	name = inp.files.item(0).name;
	for ( var i = 0; i < inp.files.length; ++i) {
		name = inp.files.item(i).name;
	}
	$("#uidfolder").val(folderEmail.replace(/^\s+|\s+$/g,''));*/
	//str.submit();
	 document.form1.action = "/Sp/uploadtest";
	 
	//document.getElementById('form1').target = 'content_frame';
	$("#form1").submit();
	
	
	
}

function formsubmit(){
	document.getElementById('form1').action = '/Sp/thankyou';
	$("#form1").submit();
}


function deleteEntry(idelem){
			if(idelem!=""){
				var postdata = new Object();
				postdata.Email = folderEmail.replace(/^\s+|\s+$/g,'');
				postdata.sm = idelem;
			
				$.ajax({
					type:"POST",
				  	url: "service/deleteConnectIn",
				  	contentType: "application/json",
					data: JSON.stringify(postdata),
					success: function(data){
						var response=eval("("+JSON.stringify(data)+")");
						
						if(response.status="success"){
							if(idelem=="tw"){
								
						  		$(".social-twitter").removeClass("Disconnect");
						  		$("#twittersignup").show();
						  		$("#tw").hide();
						  		
							}else if(idelem=="fb"){
								
								$(".social-fb").removeClass("Disconnect");
						  		$("#fbsignup").show();
						  		$("#fb").hide();
						  		
							}else if(idelem=="li"){
								
								$(".social-linkdein").removeClass("Disconnect");
						  		$("#linkedinsignup").show();
						  		$("#li").hide();
						  		
						  		
							}
							
							//$("#"+idelem).attr("disabled","disabled");
						}	
						else{
							//alert("in error" +response.status );
						}
					},
					error: function() {
					}
				});
			}
		}
	
function loadUserAccountData(eMail,picture){
  		
  		
  		var postdata = new Object();
  		postdata.eMail = eMail;
  		
  		$.ajax({
  			type:"POST",
  		  	url: "service/getUserAccountInfo",
  		  	contentType: "application/json",
  			data: JSON.stringify(postdata),
  			success: function(data){
  				var response=eval("("+JSON.stringify(data)+")");
  				
  				if(response.status=="success"){

  						
  						if(response.userinfo.profilepic!=""){
  							//$("#cropphoto").show();
  							$("#browse").attr("src",response.userinfo.profilepic);
  						}else if(picture!=""){
  							$("#browse").attr("src",picture);
  							//$("#cropphoto").hide();
  						}
  					
  								
				    			if(response.userinfo.firstname!=""){
				    				$("#firstName").val(response.userinfo.firstname);
				    			}else{
				    				$("#submit").attr("title","Continue");
			  						$("#submit").text("Continue");
				    			}
				    			if(response.userinfo.lastname!=""){
					    			$("#lastName").val(response.userinfo.lastname);
	    						}
			    			
				    			if(response.userinfo.imdbprofile!=""){
				    				$("#IMDBProfile").val(response.userinfo.imdbprofile);
				    				$("#lbl-IMDBProfile").hide();
				    				
				    			}
				    			$("select#countryList option[value='"+response.userinfo.country+"']").attr("selected", "selected");
				    			
				    			
				    			
								//$("[name=industry]").filter("[value="+response.userinfo.industry+"]").attr("checked","checked").parent().addClass('r_on');
				    			industryArr= new Array();
				    			for(var k=0;k<response.userinfo.industry.split(",").length;k++){
				    				$("#"+response.userinfo.industry.split(",")[k]).attr("checked","checked").parent().addClass('c_on');
				    				industryArr.push(response.userinfo.industry.split(",")[k]);
				    			}
				    		
								$("#jobList").val(response.userinfo.jobname);
								$("#jobList_hidden").val(response.userinfo.primaryjob);
				    			
								/*if(response.userinfo.primaryjob!="" && response.userinfo.primaryjob!="undefined"){
				    				$("select#jobList option[value='"+response.userinfo.primaryjob+"']").attr("selected", "selected");
				    			}else{
				    			}*/
				    			
				    			
				    			
				    			if(response.userinfo.aboutme.replace(/^\s+|\s+$/g,'')!=""){
				    				$("#aboutMe").val(response.userinfo.aboutme);
				    				$("#lbl-aboutMe").hide();
				    			}
				    			
				    			$("#aboutLength").html(140-response.userinfo.aboutme.length+" Char");
				    			
				    			
				    			$("[name=gender]").filter("[value="+response.userinfo.gender+"]").attr("checked","checked").parent().addClass('r_on');
				    		    if(response.userinfo.linkedinemail!="" && response.userinfo.linkedinemail!="undefined")	
				    			{
				    			  
				    		    	$(".social-linkdein").addClass("Disconnect");
					   		  		$("#linkedinsignup").hide();
					   		  		$("#li").show();
				   		  		
				    			}
				    		    if(response.userinfo.facebookemail!="" && response.userinfo.facebookemail!="undefined")	
				    			{
				    		    	$(".social-fb").addClass("Disconnect");
							  		$("#fbsignup").hide();
							  		$("#fb").show();
				    			}
				    		    if(response.userinfo.twitteremail!="" && response.userinfo.twitteremail!="undefined")	
				    			{
				    		    	$(".social-twitter").addClass("Disconnect");
							  		$("#twittersignup").hide();
							  		$("#tw").show();
				    			}
				    			
				    		   
				    		   
				    		   
				    			if(response.userinfo.country!="" && response.userinfo.country!="undefined"){
				    				$("select#countryList option[value='"+response.userinfo.country+"']").attr("selected", "selected");
				    				
				    				//$('#phonecountry option[value^='+response.userinfo.country+']').prop("selected", true);
				    				$("select#phonecountry option[value^="+response.userinfo.country+"]").prop("selected", true);
				    				//$("select#phonecountry").find(":contains('"+response.userinfo.country+"')").attr('selected', 'selected');
				    				
				    				
				    			}else{
				    				var str=geoip_country_code();
				    				$("select#countryList option[value='"+str+"']").attr("selected", "selected");
				    				
				    				$("select#phonecountry option[value^="+str+"]").prop("selected", true);
				    				//$('#phonecountry option[value^='+str+']').prop("selected", true);
				    				//$("select#phonecountry").find(":contains('"+str+"')").attr('selected', 'selected');
				    			}
				    			
				    			
				    			$('#countryList').parent().attr("class","");
				    			$('#countryList').parent().parent().find("em").hide();
				    			$('.types').selectBox({
				    				selectedClass:'.types',
				    				contWidth:200
				    			});
				    			
				    			
				    			
				    			if(response.userinfo.weburl!=""){
				    				$("#WebURL").val(response.userinfo.weburl)
				    			}	
				    			
				    			if(response.userinfo.postcode!=""){
				    				$("#postcode").val(response.userinfo.postcode);
				    			}
				    			
				    			
				    			if(response.userinfo.phonecountry!="" && response.userinfo.phonecountry!="undefined"){
				    				//alert("IN if ph"+response.userinfo.phonecountry+"-"+response.userinfo.phonecode);
				    				var setval = response.userinfo.phonecountry+"-"+response.userinfo.phonecode;
				    				//alert("#"+setval+"#");
				    				$("select#phonecountry option[value="+setval+"]").attr("selected", "selected");
				    				
				    			}
				    			
				    			$('#phonecountry').parent().attr("class","");
				    			$('#phonecountry').parent().parent().find("em").hide();
				    			$('.types1').selectBox({
				    				selectedClass:'.types',
				    				contWidth:160
				    			});
				    			
				    			
				    			/*
				    			else{
				    				
				    				var str=geoip_country_code();
				    				$('#phonecountry option[value^="'+str+'"]').prop("selected", true); 
				    				//$("select#phonecountry").find(":contains('"+str+"')").attr('selected', 'selected');
				    				//$("#select#phonecountry option:contains(" + str+ ")").attr('selected', 'selected');
				    				//$("select#phonecountry option:contains([value='"+str+"'])").attr("selected", "selected");	
				    			}
				    			*/
				    			
				    			if(response.userinfo.mobilephone!=""){
				    				$("#mobilephone").val(response.userinfo.mobilephone);
				    				altemailOrMobile=1;
				    			}
				    			if(response.userinfo.altemail!=""){
				    				altemailOrMobile=1;
				    				$("#altemail").val(response.userinfo.altemail);
				    			}
				    			
				    			/*if(response.userinfo.password!=""){
				    				//alert("IN:"+response.userinfo.password)
				    				$("#password_user-password-2").val(response.userinfo.password);
				    				$("#user-password-3").val(response.userinfo.password);
				    			}*/
				    			
				    			
				    			orignalProfileurl=response.userinfo.profileurl;
				    			if(orignalProfileurl!=""){
					    			//if(orignalProfileurl.substring(orignalProfileurl.lastIndexOf("/")+1,orignalProfileurl.length)!=""){
					    				//$("#profileURL").html(response.userinfo.profileurl);
					    				$("#urlname").val(orignalProfileurl.substring(orignalProfileurl.lastIndexOf("/")+1,orignalProfileurl.length));
					    				$("#profileURL").html(orignalProfileurl.substring(0,orignalProfileurl.lastIndexOf("/")+1));
					    				$("#urlname").show();
					    			//}
				    			}
				    			else if($("#firstName").val()!="" && $("#lastName").val()!=""){
				    				var urlname=$("#firstName").val()+$("#lastName").val();
				    				$("#profileURL").html("www.apidemo.co.in/people/"+urlname);
				    				$("#urlname").val(urlname);
				    				$("#toggleurl").html("confirm");
				    				changeProfileUrl();
				    				
				    			}
				    			else{
				    				$("#profileURL").html("www.apidemo.co.in/people/");
				    				//$("#toggleurl").html("confirm");
				    				$("#urlname").val();
				    				//changeProfileUrl();
				    			}
				    		
  					}else{
  						
  						
  						var str=geoip_country_code();
  	    	    		$("select#countryList option[value='"+str+"']").attr("selected", "selected");
//  	    				$('.types').selectBox({
//  	    					selectedClass:'.types',
//  	    					contWidth:200
//  	    				});
//  	    				$('.types1').selectBox({
//		    				selectedClass:'.types1',
//		    				contWidth:200
//		    			});
  					}
	    		},
  			error: function() {
  				window.location.href = response.failureurl;
  				
  			}
  		});
  		
  	}
  	
var orignalProfileurl="";
function changeProfileUrlDynamic(){
	if(orignalProfileurl.length==0){
		$("#urlname").val($("#firstName").val()+$("#lastName").val());
	}
	//changeProfileUrl();
	
}

function changeProfileUrl(){
	
	var orignalProfileurl = $("#profileURL").html();
	var urlpart1 = orignalProfileurl.substring(0,orignalProfileurl.lastIndexOf("/")+1);
	//var urlpart2 = orignalProfileurl.substring(orignalProfileurl.lastIndexOf("/")+1,orignalProfileurl.length);
	//var urlpart2 = $("#urlname").val();
	
	//alert(urlpart1+"="+urlpart2)
	//$("#urlname").val(urlpart2);
	//$("#urlname").show();
	
	/*if($("#toggleurl").html()=="change"){
		//$("#urlname").val(urlpart2);
		$("#profileURL").html(urlpart1);
		//$("#urlname").show();
		$("#toggleurl").html("confirm");
	}else{*/
		
		var reg = /^[a-z\d\-_\.\s]+$/i ;
		if (reg.test($("#urlname").val())){
			document.getElementById("urlnameValid").style.display="";
			document.getElementById("urlnameInvalid").style.display="none";	
		}else{
			document.getElementById("urlnameValid").style.display="none";
			document.getElementById("urlnameInvalid").style.display="";
			return false;
		}
		
		
		
		var postdata = new Object();
		postdata.eMail = folderEmail.replace(/^\s+|\s+$/g,'');
		postdata.profileurl = urlpart1+$("#urlname").val();
		
		$.ajax({
			type:"POST",
		  	url: "service/updateProfileUrl",
		  	contentType: "application/json",
			data: JSON.stringify(postdata),
			success: function(data){
				var response=eval("("+JSON.stringify(data)+")");
				
				if(response.status="success"){
					//$("#profileURL").html(response.profileurl);
					//$("#urlname").hide();
					//$("#toggleurl").html("change");
					
					var orignalProfileurl = response.profileurl;
					var urlpart1 = orignalProfileurl.substring(0,orignalProfileurl.lastIndexOf("/")+1);
					var urlpart2 = orignalProfileurl.substring(orignalProfileurl.lastIndexOf("/")+1,orignalProfileurl.length);
					
					$("#profileURL").html(urlpart1);
					$("#urlname").val(urlpart2);
					
				}	
			},
			error: function() {
			}
		});
	//}
}

function getQueryParameters(){
  		
  		var QueryString = function () {
	   			  // This function is anonymous, is executed immediately and 
	   			  // the return value is assigned to QueryString!
	   			  var query_string = {};
	   			  var query = window.location;
	   			 //alert(query);
	   			 query=(""+query).replace("#","&");
	   			 var parameters=query.split("?");
	   			//  alert(query);
	   			  //query=".replace("#","&");
	   			  //alert("Replace"+query);
	   		//	  alert("Parameters"+parameters[1]);
		   		if(parameters.length>1){
		   			//alert("2="+parameters.toString());
		   			//parameters[1].toString().indexOf("sm=fb")!=-1 || 
		   		//	if(!(parameters[1].toString().indexOf("sm=tw")!=-1)){
			   		
		   				var asd = decode64(parameters[1]);
			   			parameters[1]=asd;
				//	}
		   			  var vars = parameters[1].split("&");
		   			  for (var i=0;i<vars.length;i++) {
		   			    // alert(vars[i].split("="));
		   				  var pair = vars[i].split("=");
		   			    	// If first entry with this name
		   			    	
		   			    if (typeof query_string[pair[0]] === "undefined") {
		   			      query_string[pair[0]] = pair[1];
		   			    	// If second entry with this name
		   			    	
		   			    } else if (typeof query_string[pair[0]] === "string") {
		   			      var arr = [ query_string[pair[0]], pair[1] ];
		   			      query_string[pair[0]] = arr;
		   			     
		   			    	// If third or later entry with this name
		   			    } else {
		   			      query_string[pair[0]].push(pair[1]);
		   			      
		   			    }
		   			    //alert(query_string[pair[0]]+" "+pair[0]);	
		   			  } 
		   		}
	   			    return query_string;
	   			} ();
	   			
	   			return QueryString;
  	}
  	
function loadCountry(){
	
	$("#countryList").html("<option value='GB' selected='selected'>United Kingdom</option>");
	$('.types').selectBox({
		selectedClass:'.types',
		contWidth:200
	});
	$('.types1').selectBox({
		selectedClass:'.types',
		contWidth:160
	});
	
	
	var countryListVar;
	var phoneCountryListVar;
	var postdata = new Object();
	$.ajax({
		type: "GET",  
		url: "service/getCountryList",  
		dataType: "json",  //this is important
		contentType: "application/json",
		data:JSON.stringify(postdata),
		async: true,	
		success: function (data) {
			countryListVar=countryListVar+'<option value="" selected="selected">Select</option>'
			phoneCountryListVar=phoneCountryListVar+'<option value="" selected="selected">Select</option>'
			$.each( data.countryList, function( key, value) {
				countryListVar = countryListVar + '<option value='+value.countrycode+'>'+value.countryname+'</option>';
				if(value.phonecode!=null){
					phoneCountryListVar = phoneCountryListVar + '<option value='+value.countrycode+'-'+value.phonecode+'>'+value.countrynamephone+'</option>';
				}
			});
			$("#countryList").html(countryListVar);
			$("#phonecountry").html(phoneCountryListVar);
			
			
//add this code to live  site			
			var str=geoip_country_code();
			$("select#countryList option[value='"+str+"']").attr("selected", "selected");
			$('#countryList').parent().attr("class","");
			$('#countryList').parent().parent().find("em").hide();
			$('.types').selectBox({
				selectedClass:'.types',
				contWidth:200
			});
			
			$("select#phonecountry option[value^="+str+"]").prop("selected", true);
			$('#phonecountry').parent().attr("class","");
			$('#phonecountry').parent().parent().find("em").hide();
			$('.types1').selectBox({
				selectedClass:'.types',
				contWidth:160
			});
			
			//$("select#countryList option[value='GB']").attr("selected", "selected");
//			$('.types').selectBox({
//				selectedClass:'.types',
//				contWidth:200
//			});
		},
		error: function (request, status, error) {
			//alert("Error Occurred: " + request.responseText + ". Please try after sometime.");
			loadPopupBox("Error Occurred. Please try after sometime.","");
		}
	});
}
//old job list
/*function loadJobList(){
	
	$("#jobList").html("<option value='' selected='selected'>Select</option>");
	$('.types1').selectBox({
		selectedClass:'.types',
		contWidth:200
	});
	
	
	var postdata = new Object();
	var jobListVar;
	$.ajax({
		type: "GET",  
		url: "service/getjobList",  
		dataType: "json",  //this is important
		contentType: "application/json",
		data:JSON.stringify(postdata),
		//getdata:JSON.parse(postdata),
		async: true,	
		success: function (data) {
			jobListVar=jobListVar+'<option value="" selected="selected">Select</option>'
			$.each( data.jobList, function( key, value) {
				jobListVar = jobListVar + '<option value='+value.jobcode+'>'+value.jobname+'</option>';
			});
			$("#jobList").html(jobListVar);
			$("select#jobList option[value='']").attr("selected", "selected");
		},
		error: function (request, status, error) {
			loadPopupBox("Error Occurred. Please try after sometime.","");
		}
	}); 
}*/
var jobcode="";
var jobname="";
function loadJobList(){
	$.ajax({
		type: "GET",  
		url: "service/getjobList",  
		  	dataType: "json",
			contentType: "application/json",
			success: function(data){
			var response=eval("("+JSON.stringify(data)+")");
				jobcode=response.joblist[0].jobcode.split("$");
				jobname=response.joblist[0].jobname.split("$");
				var objnanana2 =new actb(document.getElementById("jobList"),jobname,jobcode,"");
		},
		error: function() {
             promptError("Error Loading Data");
		}
	});
}
function loadData(){
  			
	
	loadCountry();
	loadJobList();

	var QueryStringMain =getQueryParameters();
    eMail = QueryStringMain.eMail;
   
    if((eMail=="undefined" || eMail=="") && QueryStringMain.sm=="normal"){
	   
	   window.location.href=redirectURL;
	   return false;
    }else{
	  
    }
    folderEmail=eMail;
			    			
	   var QueryString =getQueryParameters();
	   eMail = QueryString.eMail;
	   
	   if((eMail=="undefined" || eMail=="") && QueryString.sm=="normal"){
		   window.location.href=redirectURL;
		   return false;
	   }
		
	if(QueryString.sm=="li")
	{
		$("#firstName").val(QueryString.firstName);
		$("#lastName").val(QueryString.lastName);
		//picture from linkedin
		//$("#browse").attr("src",QueryString.picture);
		
		folderEmail=eMail;
		loadUserAccountData(eMail,QueryString.picture);
	}
	else if(QueryString.sm=="tw")
	{
		folderEmail=eMail;
		loadPopupBox("Please provide twitter email address","e.g.abc@xyz.com");
		//HERE IT WILL CALL submitTW();
	}
	else if(QueryString.sm=="normal"){
		folderEmail=eMail;
		loadUserAccountData(eMail,"");
		
	}
	else if(QueryString.sm=="fb")
	{
		//alert("IN ");
		
		var accessToken=QueryString.access_token;
		$.ajax({
		       
			url: 'https://graph.facebook.com/me?access_token='+accessToken,
	        dataType: 'json',
	        success: function(json) {
	        	var b = new Array();
	        	b[0]=json.first_name;
	        	b[1]=json.last_name;
	        	b[2]=json.email;
	        	b[3]=json.gender;
	        	b[4]="http://graph.facebook.com/" + json.id + "/picture?redirect=true&type=large";
	        
	        	//picture from facebook
	        	//alert(json.gender)
	        	
				
	        	
	        	
	        	var postdata = new Object();
				postdata.Email = b[2];
				postdata.sm = "fb";
				postdata.gender=b[3];
				postdata.picture=b[4];
				
				//alert("a");
				
				
				eMail = b[2];
				
				$.ajax({
					type:"POST",
				  	url: "service/signUpUser",
				  	contentType: "application/json",
					data: JSON.stringify(postdata),
					success: function(data){
						var response=eval("("+JSON.stringify(data)+")");
						//alert("in success" +response.status +" my email "+response.email);
						
						if(response.status=="success"){
							//alert("b");
							$("#firstName").val(b[0]);
    		    			$("#lastName").val(b[1]);
    		    			$("[name=gender]").filter("[value="+b[3]+"]").attr("checked","checked").parent().addClass('r_on');
    		    			//$("#browse").attr("src", b[4]);
    		    			
    		    			folderEmail=eMail;
    		    			loadUserAccountData(eMail,b[4]);
							
						}else{
							//alert("c");
							loadPopupBox("Error loading data.","");
						}
					},
					error: function() {
						//alert("error");
						window.location.href = response.failureurl;
					}
				});
	        },
	        error: function() {
	            loadPopupBox("There was an error loading Facebook data.","");
	        }
		});
		
	}
}


  	

function createAccount() 
  {
 
	
	checkFirstName();
  	checkLastName();
  	checkImdbProfile();
  	checkPrimaryJob();
  	//checkAboutYou();
  	checkIndustry();
  	checkGender();
  	checkWebSiteURL();
  	
	

	if(jobname.indexOf(document.getElementById("jobList").value)==-1){
		 document.getElementById("jobList_hidden").value="0";
	}	

	if(altemailOrMobile==0){
		$("#altemailInvalid").show();
	}
	
  	
  	if(firstNameError==1 && lastNameError==1 && imdbProfileError==1 
  			&& primaryJobError==1 &&  industryError==1 && genderError==1 
  			&& WebError==1 
  			&& profileurlError==1 && mobilenoError==1 && altemailError==1 
  			&& passwordError==1 && altemailOrMobile==1)
  	{
  		
  		var postdata = new Object();
  		postdata.eMail = eMail;
  		postdata.firstName = $("#firstName").val();
  		postdata.lastName = $("#lastName").val();
  		postdata.IMDBProfile = $("#IMDBProfile").val();
  		postdata.country = $("#countryList").val();
  		//postdata.industry =$('input:radio[name=industry]:checked').val();
  		postdata.industry=industryArr.toString();
  		postdata.primaryjob = $("#jobList_hidden").val();
  		postdata.primaryjobname = $("#jobList").val();
  		
  		postdata.aboutMe = $("#aboutMe").val();
  		postdata.gender = $('input:radio[name=gender]:checked').val();
  		postdata.WebURL = $("#WebURL").val();
  		postdata.postcode= $("#postcode").val();
  		
  		
  		postdata.phonecountry= $("#phonecountry").val().split("-")[0];
  		postdata.phonecode= $("#phonecountry").val().split("-")[1];
  		postdata.mobilephone= $("#mobilephone").val();
  		postdata.altemail= $("#altemail").val();
  		
  		postdata.password= $("#user-password-2").val();
  		
  		
  		
  	   
  		 $.ajax({
  			type:"POST",
  		  	url: "service/createAccount",
  		  	contentType: "application/json",
  			data: JSON.stringify(postdata),
  			success: function(data){
  				var response=eval("("+JSON.stringify(data)+")");
  				//alert("in success" +response.status +" my email "+response.email);
  				
  				window.location.href = response.successurl;
  			},
  			error: function() {
  				window.location.href = response.failureurl;
  				
  			}
  		}); 
  		 
  		
  	}

  }
  


//linked IN Connect in functionality
function onLinkedInLoad_connect() {
  	IN.ENV.js.scope = new Array();
  	IN.ENV.js.scope[0] = 'r_emailaddress';
  	IN.User.authorize();
  	IN.Event.on(IN, "auth", onLinkedIn_connect);
  }
function onLinkedIn_connect() {
  	IN.API.Profile("me").fields("id,firstName,lastName,headline,emailAddress").result(displayProfiles_connect);
  }
function displayProfiles_connect(profiles) {
  	
  	var member = profiles.values[0];

  	var postdata = new Object();
  	postdata.socialEmail = member.emailAddress;
  	
  	postdata.Email=folderEmail;
  
  	
  	postdata.sm = "li";
  	//alert("service/signUpUser?sm=li&Email="+postdata.Email+"&socialEmail="+postdata.socialEmail);
  	$.ajax({
  		type:"GET",
  	  	url: "service/signUpUser?sm=li&Email="+postdata.Email+"&socialEmail="+postdata.socialEmail,
  	  	contentType: "application/json",
  		
  		success: function(data){
  			var response=eval("("+JSON.stringify(data)+")");
  			//alert("in success" +response.status +" my email "+response.email);
  			
  			if(response.status=="success"){
  				
  				$("#firstName").val(member.firstName);
  				$("#lastName").val(member.lastName);
  				//$(".social-linkdein").addClass("Disconnect");
  				
		  		$(".social-linkdein").addClass("Disconnect");
		  		$("#linkedinsignup").hide();
		  		$("#li").show();
		  		
  			}
  		},
  		error: function() {
  			window.location.href = response.failureurl;
  		}
  	});
}





//FACEBOOK Connect in functionality  
function passparamfb(sm,at,ei,error){
	
	
	//alert(sm+"-"+at+"-"+ei);
	//var accessToken=QueryString.access_token;
	if(sm!=undefined && error==undefined){
		
		$.ajax({
		       
			url: 'https://graph.facebook.com/me?access_token='+at,
	        dataType: 'json',
	        success: function(json) {
	        	var b = new Array();
	        	b[0]=json.first_name+'\n';
	        	b[1]=json.last_name+'\n';
	        	b[2]=json.email+'\n';
	        	
	        	
	        	var postdata = new Object();
				postdata.Email = b[2];
				postdata.sm = "fb";
				
				eMail = b[2];
				
				$.ajax({
			  		type:"GET",
			  	  	url: "service/signUpUser?sm=fb&Email="+folderEmail+"&socialEmail="+eMail,
			  	  	contentType: "application/json",
			  		
			  		success: function(data){
			  			var response=eval("("+JSON.stringify(data)+")");
			  			//alert("in success" +response.status +" my email "+response.email);
			  			
			  			if(response.status=="success"){
			  				if($("#firstName").val()=="")$("#firstName").val(b[0]);
							if($("#lastName").val()=="")$("#lastName").val(b[1]);
							//$(".social-fb").addClass("Disconnect");
							$(".social-fb").addClass("Disconnect");
					  		$("#fbsignup").hide();
					  		$("#fb").show();
			  			}
			  		},
			  		error: function() {
			  			window.location.href = response.failureurl;
			  		}
			  	});
				
				
	        },
	        error: function() {
	            loadPopupBox("There was an error loading Facebook data.","");
	        }
		});
	}
} 



//TWITTER Connect in functionality 
function passparamtw(sm,fn,ln,error,picture){
	   
	 if(sm!=undefined && error==undefined){
		if($("#firstName").val()=="")$("#firstName").val(fn);
		if($("#lastName").val()=="")$("#lastName").val(ln);

		loadPopupBox("Please provide twitter email address","e.g.abc@xyz.com");
		//HERE IT WILL CALL submitTW(); with get request
	 }
}
function submitTW(){
		
	var QueryString = getQueryParameters();
	//alert(QueryString.firstName+""+QueryString.lastName);
	
	
		email = $("#popupvalue").val();
  	
		
  		var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
		    
  		if(reg.test(email))
		    {   	
      	
			    	folderEmail=email;
		        	
					
					eMail = email;
				
					if(QueryString.firstName!=undefined){
						
						var postdata = new Object();
						postdata.Email = email;
						postdata.sm = "tw";
						postdata.picture=QueryString.picture;
						
						
				    	$.ajax({
							type:"POST",
						  	url: "service/signUpUser",
						  	contentType: "application/json",
							data: JSON.stringify(postdata),
							success: function(data){
								var response=eval("("+JSON.stringify(data)+")");
								//alert("in success" +response.status +" my email "+response.email);
								
								if(response.status=="success"){
									unloadPopupBox();
									if($("#firstName").val()=="")$("#firstName").val(QueryString.firstName);
									if($("#lastName").val()=="")$("#lastName").val(QueryString.lastName);
									//picture from twitter
									//$("#browse").attr("src",QueryString.picture);
									
									
									
					    			loadUserAccountData(eMail,QueryString.picture);
									
								}
							},
							error: function() {
								window.location.href = response.failureurl;
							}
						});
					}else{
						//for connect in fucntionality
						$.ajax({
					  		type:"GET",
					  	  	url: "service/signUpUser?sm=tw&Email="+folderEmail+"&socialEmail="+eMail,
					  	  	contentType: "application/json",
					  		
					  		success: function(data){
					  			var response=eval("("+JSON.stringify(data)+")");
					  			//alert("in success" +response.status +" my email "+response.email);
					  			
					  			if(response.status=="success"){
					  				unloadPopupBox();
					  				if($("#firstName").val()=="")$("#firstName").val(b[0]);
									if($("#lastName").val()=="")$("#lastName").val(b[1]);
								
									$(".social-twitter").addClass("Disconnect");
							  		$("#twittersignup").hide();
							  		$("#tw").show();
									
					  			}
					  		},
					  		error: function() {
					  			window.location.href = response.failureurl;
					  		}
					  	});
					}
		    }else{
		    	do{
		    		 unloadPopupBox();
		    		 loadPopupBox("Please provide twitter email address","e.g.abc@xyz.com");	
		    		 email = $("#popupvalue").val();
		    	}while(!reg.test(email));
		    } 
  		
  		
  		
  		
  		
  		
  		
  	}

//FORM VALIDATIONS START
function checkFirstName() 
{
	var regfirstname = /^[a-zA-Z]{2,254}$/;
	if (regfirstname.test($("#firstName").val()))
    {
		var temp = $("#firstName").val();
		temp = temp.charAt(0).toUpperCase() + temp.substring(1);
		$("#firstName").val(temp);

		document.getElementById("firstNameValid").style.display="";
		document.getElementById("firstNameInvalid").style.display="none";
		firstNameError = 1;
    }
	else
	{
		document.getElementById("firstNameValid").style.display="none";
		document.getElementById("firstNameInvalid").style.display="";
		firstNameError = 0;
	}
}
function checkLastName() 
{
	var reglastname = /^[a-zA-Z]{2,254}$/;
	if (reglastname.test($("#lastName").val()))
    {
		var temp = $("#lastName").val();
		temp = temp.charAt(0).toUpperCase() + temp.substring(1);
		$("#lastName").val(temp);
		
		document.getElementById("lastNameValid").style.display="";
		document.getElementById("lastNameInvalid").style.display="none";
		lastNameError = 1;
    }
	else
	{
		document.getElementById("lastNameValid").style.display="none";
		document.getElementById("lastNameInvalid").style.display="";
		lastNameError = 0;
	}
}
function checkWebSiteURL()
{
	
		
		
	if($("#WebURL").val().length>0)
	{
		//var regWeb1=/^(http(s)?\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\S*)?$/;
		var regWeb=/www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}.|\..*?\.(com|net|org)/;
		
		///(?i)\b((?:(?:[a-z][\w-]+:)?(?:/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€�â€˜â€™]))/;
    
		//if (regWeb1.test($("#WebURL").val()) && regWeb.test($("#WebURL").val()))
		if (regWeb.test($("#WebURL").val()))
	    {
			//error[error.length]="Enter valid IMDB\n";
			document.getElementById("WebValid").style.display="";
			document.getElementById("WebInvalid").style.display="none";
			WebError = 1;
	    }
		else
		{
			document.getElementById("WebValid").style.display="none";
			document.getElementById("WebInvalid").style.display="";
			WebError = 0;
		}
	}
	else{
		document.getElementById("WebValid").style.display="none";
		document.getElementById("WebInvalid").style.display="none";
		WebError = 1;
	}
	
	
	
}


function checkImdbProfile()
{
	if($("#IMDBProfile").val().length>0)
	{
		var str=(""+$("#IMDBProfile").val()).indexOf("imdb.com");
		
	
    
		if (str!=-1)
	    {
			//error[error.length]="Enter valid IMDB\n";
			document.getElementById("ImdbValid").style.display="";
			document.getElementById("ImdbInvalid").style.display="none";
			imdbProfileError = 1;
	    }
		else
		{
			document.getElementById("ImdbValid").style.display="none";
			document.getElementById("ImdbInvalid").style.display="";
			imdbProfileError = 0;
		}
	}
	

	else
	{
		document.getElementById("ImdbValid").style.display="none";
		document.getElementById("ImdbInvalid").style.display="none";
		imdbProfileError = 1;
	}
}



function checkPrimaryJob()
{

	var words = $("#jobList").val().replace(/^\s+|\s+$/g,'').split(" ");
	   var arr = Array();
	   for (i in words)
	   {
	      temp = words[i].toLowerCase();
	      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
	      arr.push(temp);
	   }
	   
	
	$("#jobList").val(arr.join(" "));

	if($("#jobList").val().replace(/^\s+|\s+$/g,'').length==0)
	{
		//alert("invalid");
		document.getElementById("jobProfileValid").style.display="none";
		document.getElementById("jobProfileInvalid").style.display="";
		primaryJobError = 0;
	}
	else
	{
		
		
		
		
		document.getElementById("jobProfileValid").style.display="";
		document.getElementById("jobProfileInvalid").style.display="none";
		primaryJobError = 1;
	}

}

function checkGender()
{
	if ($('input[name="gender"]:checked').val() == null)
    {
		document.getElementById("genderValid").style.display="none";
		document.getElementById("genderInvalid").style.display="";
		genderError = 0;
    }
	else
	{
		document.getElementById("genderValid").style.display="";
		document.getElementById("genderInvalid").style.display="none";
		genderError = 1;
	}
	
}
var industryArr= new Array();
function addremoveIndustry(myval,myid){
	if($("#"+myid).attr("checked")!=undefined){
		industryArr.push(myval);
	}else{
		var index = industryArr.indexOf(myval);
		industryArr.splice(index, 1);
	}
	checkIndustry();
}


function checkIndustry()
{
	if(industryArr.length>0){
		document.getElementById("industryValid").style.display="";
		document.getElementById("industryInvalid").style.display="none";
		industryError = 1;
	}else{
		document.getElementById("industryValid").style.display="none";
		document.getElementById("industryInvalid").style.display="";
		industryError = 0;
	}
	
	/*if ($('input[name="industry"]:checked').val() == null)
    {
		document.getElementById("industryValid").style.display="none";
		document.getElementById("industryInvalid").style.display="";
		industryError = 0;
    }
	else
	{
		
		document.getElementById("industryValid").style.display="";
		document.getElementById("industryInvalid").style.display="none";
		industryError = 1;
	}*/
	
}
function ckeckAboutYouLength() 
{

	var len = $("#aboutMe").val().length;
	var l = 140;
	var str = document.getElementById("aboutMe").value;
	if (len <= l) {
		$("#aboutLength").html(l - len +" Char");
	} else {
		$("#aboutMe").val(str.substr(0,str.length - 1));
		$("#aboutLength").html("0 Char");
	}
	
	
	
	
}
function checkAboutYou() 
{
	
	
	if($("#aboutMe").val().length==0)
	{
		document.getElementById("aboutYouValid").style.display="none";
		document.getElementById("aboutYouInvalid").style.display="none";
		aboutYouError = 0;
	}else if($("#aboutMe").val().length>140){
		$("#aboutMe").val($("#aboutMe").val().toString().substr(0,140));
	}
	else
	{
		document.getElementById("aboutYouValid").style.display="";
		document.getElementById("aboutYouInvalid").style.display="none";
		aboutYouError = 1;
	}
}

function checkPostcode()
{
	
	if($("#postcode").val().length>0)
	{
		document.getElementById("postcodeValid").style.display="";
		document.getElementById("postcodeInvalid").style.display="none";
	}
	else
	{
		
		document.getElementById("postcodeValid").style.display="none";
		document.getElementById("postcodeInvalid").style.display="none";
		
	}
	
	
}

function checkProfileURL(){
	if($("#urlname").val().length>0){
		var reg = /^[a-z\d\-_\.\s]+$/i ;
		if (reg.test($("#urlname").val())){
			
			document.getElementById("urlnameValid").style.display="";
			document.getElementById("urlnameInvalid").style.display="none";
			profileurlError=1;
		}else{
			document.getElementById("urlnameValid").style.display="none";
			document.getElementById("urlnameInvalid").style.display="";
			profileurlError=0;
		}
	}
}
function checkAlternateEmail(){
	
	if($("#altemail").val().length>0){
		var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
		if (reg.test($("#altemail").val())){
			document.getElementById("altemailValid").style.display="";
			document.getElementById("altemailInvalid").style.display="none";	
			altemailError=1;
			altemailOrMobile=1;
		}else{
			document.getElementById("altemailValid").style.display="none";
			document.getElementById("altemailInvalid").style.display="";
			altemailError=0;
			
			
		}
	}else{
		document.getElementById("altemailValid").style.display="none";
		document.getElementById("altemailInvalid").style.display="none";
	}
}
function allowNumerics(){
	var val=$("#mobilephone").val();
	if(val.length>0){
	    var string = val.length;
	    var iChars = "0123456789";
	    var cnt=0;
	    for (var i = 0; i < string; i++)
	    {
	        if (iChars.indexOf(val.charAt(i)) == -1){
	            cnt=1;
	        }
	    }
	    
	    if($("#phonecountry").val()!="" && $("#mobilephone").val().length>7 && cnt==0){
	    	document.getElementById("mobilephoneValid").style.display="";
			document.getElementById("mobilephoneInvalid").style.display="none";
			mobilenoError=1;
			altemailOrMobile=1;
	    }else
	    {
	    	document.getElementById("mobilephoneValid").style.display="none";
			document.getElementById("mobilephoneInvalid").style.display="";
			mobilenoError=0;
		}
	}else{
		document.getElementById("mobilephoneValid").style.display="none";
		document.getElementById("mobilephoneInvalid").style.display="none";
	}
}

function checkConfirmPassword(){
	
	if($("#user-password-2").val().length>0){
		
		if($("#user-password-3").val()!=$("#user-password-2").val()){
			
			document.getElementById("cpValid").style.display="none";
			document.getElementById("cpInvalid").style.display="";
			passwordError=0;
		}else{

			document.getElementById("cpValid").style.display="";
			document.getElementById("cpInvalid").style.display="none";
			passwordError=1;
		}
	}
}

function changeMobileCountry(str){
	
	
	
	if($("#mobilephone").val().length==0){
		
		$("select#phonecountry option[value^="+str+"]").prop("selected", true);
		$('#phonecountry').parent().attr("class","");
		$('#phonecountry').parent().parent().find("em").hide();
		$('.types1').selectBox({
			selectedClass:'.types',
			contWidth:160
		});
	}
}
//FORM VALIDATIONS OVER