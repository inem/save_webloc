window.addEventListener("load", function(){
	save_execAll();
}, false);

function save_execAll(){
	save_Prep();
	save_addEventListeners();
}

function save_Prep(){
	/* glob */ element_save_Content_Wrapper = document.getElementById("save_Content_Wrapper");
	/* glob */ element_save_Name_Field = document.getElementById("save_Name_Field");
	/* glob */ element_save_URL_Field = document.getElementById("save_URL_Field");
	/* glob */ element_save_Button = document.getElementById("save_Download_Button");
	/* glob */ button_Shortcut_Download = document.getElementById("save_Download_Button_Label");
	
	chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
		var tab = tabs[0];
		
		/* glob */ page_Title = tab.title;
		/* glob */ page_URL = tab.url;
	
		save_Inject_Page_Values(page_Title, page_URL);
	});
}

function save_addEventListeners(){
	document.getElementById("save_Download_Button").addEventListener("click", function(){
		save_Generate();
	}, false);
	
	document.getElementById("save_Label").addEventListener("click", function(){
		save_Collapse();
	}, false);
	
	document.getElementById("wrapper").addEventListener("keyup", function(e){
        if (e.keyCode === 13) {
            button_Shortcut_Download.click();
        }
    }, false);
}

function save_Generate(){
	console.log("type_toUse: '" + type_toUse + "'");
	
	var regex_invalidChars, shortcut_Name, shortcut_Ext, shortcut_Content = "";
	
	regex_invalidChars = /[:]/g;
	shortcut_Name = save_replaceInvalidChars(element_save_Name_Field.value, regex_invalidChars);
	if (shortcut_Name.charAt(0) == "."){
		// On Mac OS X, if a file begins with "." it is marked as hidden
		
		var array_Shortcut_Name = shortcut_Name.split("");
		array_Shortcut_Name[0] = "";
		shortcut_Name = array_Shortcut_Name.join("");
	}
	
	shortcut_Ext = "webloc";
	
	shortcut_Content = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'><plist version='1.0'><dict><key>URL</key><string>" + element_save_URL_Field.value + "</string></dict></plist>";

	var shortcut_Name_Full = shortcut_Name + "." + shortcut_Ext;
	
	var blob = new Blob([shortcut_Content]);
	button_Shortcut_Download.setAttribute("download", shortcut_Name_Full);
	button_Shortcut_Download.setAttribute("href", window.webkitURL.createObjectURL(blob));
}

function save_replaceInvalidChars(shortcut_Name, regex_invalidChars){
	shortcut_Name = shortcut_Name.replace("&gt;", ">").replace("&lt;", "<").replace("&amp;", "&").replace("&nbsp;", " ");
	shortcut_Name = shortcut_Name.replace(regex_invalidChars, "");
	
	return shortcut_Name;
}

function save_Inject_Page_Values(page_Title, page_URL){
	element_save_Name_Field.value = page_Title;
	element_save_URL_Field.value = page_URL;
	
	element_save_Name_Field.focus();
}

function save_Collapse(){
	var currentState = element_save_Content_Wrapper.style.display;
	
	if (currentState == "block"){
		element_save_Content_Wrapper.style.display = "none";
	} else {
		element_save_Content_Wrapper.style.display = "block";
	}
}