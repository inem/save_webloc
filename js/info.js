window.addEventListener("load", function(){
	info_execAll();
}, false);

function info_execAll(){
	info_Prep();
	info_addEventListeners();
	
}

function info_Prep(){
	/* glob */ element_info_Content_Wrapper = document.getElementById("info_Content_Wrapper");
	
}

function info_addEventListeners(){
	document.getElementById("info_Label").addEventListener("click", function(){
		info_Collapse();
	}, false);
}

function info_Collapse(){
	var currentState = element_info_Content_Wrapper.style.display;
	
	if (currentState == "block"){
		element_info_Content_Wrapper.style.display = "none";
	} else {
		element_info_Content_Wrapper.style.display = "block";
	}
}