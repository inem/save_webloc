function save_replaceInvalidChars(shortcut_Name, regex_invalidChars){
	shortcut_Name = shortcut_Name.replace("&gt;", ">").replace("&lt;", "<").replace("&amp;", "&").replace("&nbsp;", " ");
	shortcut_Name = shortcut_Name.replace(regex_invalidChars, "");

	return shortcut_Name;
}

function save_replaceAmp(url){
  shortcut_Url = url.replace(/\&/g, "&amp;");
  return shortcut_Url;
}

chrome.browserAction.onClicked.addListener(function(tab) {
	var regex_invalidChars, shortcut_Name, shortcut_Ext, shortcut_Content = "";

	regex_invalidChars = /[:]/g;
	shortcut_Name = save_replaceInvalidChars(tab.title, regex_invalidChars);
	if (shortcut_Name.charAt(0) == "."){
		// On Mac OS X, if a file begins with "." it is marked as hidden

		var array_Shortcut_Name = shortcut_Name.split("");
		array_Shortcut_Name[0] = "";
		shortcut_Name = array_Shortcut_Name.join("");
	}

	shortcut_Ext = "webloc";

	shortcut_Content = "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'><plist version='1.0'><dict><key>URL</key><string>" + save_replaceAmp(tab.url) + "</string></dict></plist>";

	var shortcut_Name_Full = shortcut_Name + "." + shortcut_Ext;

	var blob = new Blob([shortcut_Content]);

	var link = document.createElement("a");
	link.download = shortcut_Name_Full;
	link.href = window.webkitURL.createObjectURL(blob);
	link.click();
	});
