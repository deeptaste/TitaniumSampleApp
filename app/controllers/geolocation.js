//var args = arguments[0] || {};

if(Alloy.Globals.Map == null || Alloy.Globals.Map == undefined) {
	alert("Map module not loaded.");
}

function loadData() {
	$.mapView.region = {
		latitude: 51.50944861,
	    longitude: -0.3807556629, 
	    latitudeDelta: 0.2, 
	    longitudeDelta: 0.2
	};
	
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	//Titanium.Geolocation.distanceFilter = 10;
	
	Titanium.Geolocation.addEventListener('location',function() {
	    getCurrentLocation();
	});
}

function getCurrentLocation() {
	Titanium.Geolocation.getCurrentPosition(function(e) {
	    if (e.error) {
	        alert('Not able to get your current location.');
	        return;
	    }
	    
	    var region = {
	            latitude: e.coords.latitude,
	            longitude: e.coords.longitude,
	            latitudeDelta: 0.2,
	            longitudeDelta: 0.2
        };
        
    	$.mapView.region;
    	
    	$.currentlocation.title = "Latitude : " + e.coords.latitude + ", Latitude : " + e.coords.longitude;
	});
}

function goBack(e) {
	$.geolocation.close();
}