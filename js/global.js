window.addEventListener("load", function(){
	global_execAll();
}, false);

function global_execAll(){
	global_Prep();
	global_addEventListeners();
	
	global_detectPlatform();
}

function global_Prep(){
	return false;
}

function global_addEventListeners(){
	return false;
}



function global_detectPlatform(){
	var userAgent = window.navigator.appVersion;
	
	if (userAgent.match("Win")){
		localStorage["OS"] = "Windows";
	} else if (userAgent.match("Mac")){
		localStorage["OS"] = "Mac";
	} else if (userAgent.match("Linux")){
		localStorage["OS"] = "Linux";
	} else {
		localStorage["OS"] = "Unknown";
	}
}