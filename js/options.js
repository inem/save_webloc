window.addEventListener("load", function(){
	options_execAll();
}, false);

function options_execAll(){
	options_Prep();
	options_addEventListeners();
	
	options_showDefaultType();
}

function options_Prep(){
	/* glob */ element_options_Content_Wrapper = document.getElementById("options_Content_Wrapper");
	/* glob */ element_Radio_Win = document.getElementById("options_shortcutType_Win");
	/* glob */ element_Radio_Mac = document.getElementById("options_shortcutType_Mac");
	/* glob */ element_Radio_Linux = document.getElementById("options_shortcutType_Linux");
	/* glob */ element_Checkbox_Preference = document.getElementById("options_shortcutType_Preference");
	/* glob */ type_toUse = "test";
}

function options_addEventListeners(){
	document.getElementById("options_Label").addEventListener("click", function(){
		options_Collapse();
	}, false);
	
	element_Checkbox_Preference.addEventListener("click", function(){
		options_setDefaultType();
	}, false);
	element_Radio_Win.addEventListener("click", function(){
		options_setDefaultType();
	}, false);
	element_Radio_Mac.addEventListener("click", function(){
		options_setDefaultType();
	}, false);
	element_Radio_Linux.addEventListener("click", function(){
		options_setDefaultType();
	}, false);
}



function options_setDefaultType(){
	console.log("options_setDefaultType()");
	
	if (element_Checkbox_Preference.checked == true){
		localStorage["type_Remember"] = true;
	} else if (element_Checkbox_Preference.checked == false){
		localStorage["type_Remember"] = false;
	}
	
	if (element_Radio_Win.checked == true){
		localStorage["type_Remembered"] = "Windows";
	} else if (element_Radio_Mac.checked == true){
		localStorage["type_Remembered"] = "Mac";
	} else if (element_Radio_Linux.checked == true){
		localStorage["type_Remembered"] = "Linux";
	}
	
	type_toUse = localStorage["type_Remembered"];
	
	console.log("localStorage['type_Remember']: '" + localStorage["type_Remember"] + "'");
	console.log("localStorage['type_Remember'] onclick: '" + localStorage["type_Remember"] + "'");
	console.log("localStorage['type_Remembered'] onclick: '" + localStorage["type_Remembered"] + "'");
	console.log("");
}

function options_showDefaultType(){
	console.log("options_showDefaultType()");
	console.log("localStorage['type_Remember'] onload: '" + localStorage["type_Remember"] + "'");
	console.log("localStorage['type_Remembered'] onload: '" + localStorage["type_Remembered"] + "'");
	
	if ((!localStorage["type_Remember"]) || (localStorage["type_Remember"] == "false")){
		console.log("localStorage['type_Remember'] is undefined or false. Don't tick box.");
		
		element_Checkbox_Preference.checked = false;
		
		if (localStorage["OS"] == "Windows"){
			console.log("localStorage['OS'] is Windows. Tick radio.");
			element_Radio_Win.checked = true;
		} else if (localStorage["OS"] == "Mac"){
			console.log("localStorage['OS'] is Mac. Tick radio.");
			element_Radio_Mac.checked = true;
		} else if (localStorage["OS"] == "Linux"){
			console.log("localStorage['OS'] is Linux. Tick radio.");
			element_Radio_Linux.checked = true;
		}
		
		type_toUse = localStorage["OS"];
	} else if (localStorage["type_Remember"] == "true"){
		console.log("localStorage['type_Remember'] is true. Tick box.");
		
		element_Checkbox_Preference.checked = true;
		
		if (localStorage["type_Remembered"] == "Windows"){
			console.log("localStorage['type_Remembered'] is Windows. Tick radio.");
			element_Radio_Win.checked = true;
		} else if (localStorage["type_Remembered"] == "Mac"){
			console.log("localStorage['type_Remembered'] is Mac. Tick radio.");
			element_Radio_Mac.checked = true;
		} else if (localStorage["type_Remembered"] == "Linux"){
			console.log("localStorage['type_Remembered'] is Linux. Tick radio.");
			element_Radio_Linux.checked = true;
		}
		
		type_toUse = localStorage["type_Remembered"];
	}
	
	console.log("");
}

function options_Collapse(){
	var currentState = element_options_Content_Wrapper.style.display;
	
	if (currentState == "block"){
		element_options_Content_Wrapper.style.display = "none";
	} else {
		element_options_Content_Wrapper.style.display = "block";
	}
}