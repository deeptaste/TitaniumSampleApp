//var args = arguments[0] || {};

var watchingAccelerometer = false;

function startAccelerometer() {
	if(!watchingAccelerometer) {
		if (Titanium.Platform.model === "Simulator" || Titanium.Platform.model.indexOf("sdk") !== -1 ){
			alert("Accelerometer does not work on a virtual device");
		} 
		else {
			Titanium.Accelerometer.addEventListener("update", watchAccelerometer);
			watchingAccelerometer = true;
		}
	}
}

function stopAccelerometer() {
	if(watchingAccelerometer) {
		if (Titanium.Platform.model === "Simulator" || Titanium.Platform.model.indexOf("sdk") !== -1 ){
			alert("Accelerometer does not work on a virtual device");
		} 
		else {
			Titanium.Accelerometer.removeEventListener("update", watchAccelerometer);
			watchingAccelerometer = false;
		}
	}
}

var watchAccelerometer = function(e) {
	$.xVal.title = "X-val : " + e.x;
	$.yVal.title = "Y-val : " + e.y;
	$.zVal.title = "Z-val : " + e.z;
	$.tsVal.title = "Timestamp : " + e.timestamp;
};

function goBack(e) {
	stopAccelerometer();
	$.accelerometer.close();
}
