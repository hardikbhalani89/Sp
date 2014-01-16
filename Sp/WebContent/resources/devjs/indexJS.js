var pageloading=0;
var redirectURL="http://127.0.0.1:8080/APIDemo/signup.html";

$("#submit").click(function(){
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
    if (reg.test($("#username").val()))
    {
		var postdata = new Object();
		postdata.Email = $("#username").val();
		postdata.sm = "normal";
		
		
		$.ajax({
			type:"POST",
		  	url: "service/signUpUser",
		  	contentType: "application/json",
			data: JSON.stringify(postdata),
			success: function(data){
				var response=eval("("+JSON.stringify(data)+")");
				if(response.successurl=="exist"){
					loadPopupBox("Sorry, this email is already registered. Please try again with a different email address","");
				}else{
					var queryString = addToQueryStringEncode(queryString,'sm',"normal");
					queryString = addToQueryStringEncode(queryString,'eMail',$("#username").val());
					window.location.href = response.successurl+"?" + encode64(queryString);
				}
			},
			error: function() {
				window.location.href = response.failureurl;
			}
		});
	}
    else
    {
    	$("#username").val("");
    	loadPopupBox("Please enter valid email Address\ne.g. abc@xyz.com","");
    }
});

function onLinkedIn() {
	IN.API.Profile("me").fields("id,firstName,lastName,headline,emailAddress,pictureUrl").result(displayProfiles);
}
function displayProfiles(profiles) {
	
	var member = profiles.values[0];

	var postdata = new Object();
	postdata.Email = member.emailAddress;
	postdata.sm = "li";
	postdata.picture = member.pictureUrl;
	

	$.ajax({
		type:"POST",
	  	url: "service/signUpUser",
	  	contentType: "application/json",
		data: JSON.stringify(postdata),
		success: function(data){
			var response=eval("("+JSON.stringify(data)+")");
			//var response=JSON.parse(data);
			
			if(response.status=="success"){
				
				var queryString = addToQueryStringEncode(queryString,'firstName',member.firstName);
				queryString = addToQueryStringEncode(queryString,'lastName',member.lastName);
				queryString = addToQueryStringEncode(queryString,'sm',"li");
				queryString = addToQueryStringEncode(queryString,'eMail',member.emailAddress);
				queryString = addToQueryStringEncode(queryString,'picture',member.pictureUrl);
				
				
				window.location.href = "signup.html"+"?" + encode64(queryString);
				
				
				/*var queryString = addToQueryString(queryString,'firstName',member.firstName);
				queryString = addToQueryString(queryString,'lastName',member.lastName);
				queryString = addToQueryString(queryString,'sm',"li");
				queryString = addToQueryString(queryString,'eMail',member.emailAddress);
				window.location.href = response.successurl +queryString;*/
			}
		},
		error: function() {
			window.location.href = response.failureurl;
		}
	});
}
function onLinkedInLoad() {
	
	if(pageloading==0){
		return false;
	}
		IN.ENV.js.scope = new Array();
		IN.ENV.js.scope[0] = 'r_emailaddress';
		IN.User.authorize();
		IN.Event.on(IN, "auth", onLinkedIn);
}
function addToQueryString(queryString,key,value)
{
	if(queryString == '' || queryString==undefined)
	{
		queryString = '?' ;
	}else
	{
		queryString = queryString + '&' ;
	}
	queryString = queryString + key + "=" + value;
	return queryString ;
}
function addToQueryStringEncode(queryString,key,value)
{
	if(queryString == '' || queryString==undefined)
	{
		queryString = '' ;
	}else
	{
		queryString = queryString + '&' ;
	}
	queryString = queryString + key + "=" + value;
	return queryString ;
}

function passparamtw(sm,fn,ln,error,picture){
	   
	   if(sm!=undefined && error==undefined){
		   	var queryString = addToQueryStringEncode(queryString,'sm',sm);
			queryString = addToQueryStringEncode(queryString,'firstName',fn);
			queryString = addToQueryStringEncode(queryString,'lastName',ln);
			queryString = addToQueryStringEncode(queryString,'picture',picture);
			
			
		   	window.location.href= redirectURL+"?" + encode64(queryString);
	   }
}