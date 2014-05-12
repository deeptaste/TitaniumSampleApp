//var args = arguments[0] || {};

function goBack(e) {
	$.deviceInfo.close();
}

function showDeviceInfo(e) {
	$.deviceName.title = "Manufacurer : " + Titanium.Platform.manufacturer;
	$.deviceModel.title = "Model : " + Titanium.Platform.model;
	$.deviceUUID.title = "UUID : " + Titanium.Platform.id;
	$.devicePlatform.title = "Platform (OS) : " + Titanium.Platform.name;
	$.devicePlatformVersion.title = "OS Version : " + Titanium.Platform.version;
	$.deviceDefaultLanguage.title = "Default Language : " + Titanium.Platform.locale;
	
	if (Titanium.Platform.name === "android") {
		$.deviceAvailableMemory.title = "Available Memory : " + Titanium.Platform.availableMemory + " Bytes";
	} 
	else if (Titanium.Platform.name === "iPhone") {
		$.deviceAvailableMemory.title = "Available Memory : " + Titanium.Platform.availableMemory + " MegaBytes";
	}
	else {
		$.deviceAvailableMemory.title = "Available Memory : " + Titanium.Platform.availableMemory;
	}
		
	$.deviceNetworkConnection.title = "Network Status : " + showNewtworkType();
}

function showNewtworkType() {
	
	var nType = Titanium.Network.networkType;
	var text = "";
	
	if (nType == Titanium.Network.NETWORK_LAN) {
		text = "LAN Connection";
	}
	else if (nType == Titanium.Network.NETWORK_MOBILE) {
		text = "Mobile Connection";
	}
	else if (nType == Titanium.Network.NETWORK_WIFI) {
		text = "WiFi Connection";
	}
	else if (nType == Titanium.Network.NETWORK_NONE) {
		text = "No Connection";
	}
	else {
		text = "Unknown Connection";
	}
	
	return text;
}
