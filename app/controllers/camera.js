//var args = arguments[0] || {};

function showCamera() {
	Titanium.Media.showCamera({
		success:function(event) {
			Ti.API.debug("Our type was: " + event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.photoPreview.image = event.media;
				$.photoPreview.visible = true;
			} 
			else {
				alert("Got the wrong type back =" + event.mediaType);
			}
		},
		cancel:function() {
			// called when user cancels taking a picture
		},
		error:function(error) {
			var a = Titanium.UI.createAlertDialog({title:"Camera"});
			
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage("Please run this test on device");
			} 
			else {
				a.setMessage("Unexpected error: " + error.code);
			}
			a.show();
		},
		saveToPhotoGallery:true,
	    allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

function openGallery() {
	Titanium.Media.openPhotoGallery({
		success:function(event) {
			Ti.API.debug("Our type was: " + event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.photoPreview.image = event.media;
				$.photoPreview.visible = true;
			} 
			else {
				alert("Got the wrong type back =" + event.mediaType);
			}
		},
		cancel:function() {
			// called when user cancels taking a picture
		},
		error:function(error) {
			var a = Titanium.UI.createAlertDialog({title:"Camera"});
			
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage("Please run this test on device");
			} 
			else {
				a.setMessage("Unexpected error: " + error.code);
			}
			a.show();
		},
		saveToPhotoGallery:true,
	    allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

function goBack(e) {
	$.camera.close();
}
