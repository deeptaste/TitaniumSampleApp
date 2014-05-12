Alloy.Globals.Map = OS_ANDROID ? require('ti.map') : Ti.Map;

if (OS_IOS || OS_ANDROID) {
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '60dp';
	
	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '8w0dp';
		}
	} catch(e) {
		// catch and ignore
	}
}