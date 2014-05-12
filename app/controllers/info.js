//var args = arguments[0] || {};

function goBack(e) {
	$.info.close();
}

function showDeviceInfo(e) {
	$.appDetails.html = "<div style='text-align: justify;width: 100%;'>" + 
						 "This cross-platform mobile app has been developed using Appcelerometer Titanium which uses JavaScript programming language. " +
						 "<br/><br/>" + 
						 "This mobile app test some of the mobile device features such as Accelerometer, Camera, Geolocation, and more." +
						 "<br/><br/>" + 
						 "This mobile app has been developed as a part of my dissertation project for MSc. in Software Engineering." +
						 "<br/><br/><u>Developer's Details:</u><br/><b>Diptesh Shrestha</b><br/>diptesh.shrestha@gmail.com" +
						 "<br/><br/><u>Project Supervisor:</u><br/><b>Samia Oussena</b><br/>University of West London" +
						 "</div>";
}
