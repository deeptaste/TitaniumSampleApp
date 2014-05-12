function Controller() {
    function showCamera() {
        Titanium.Media.showCamera({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    $.photoPreview.image = event.media;
                    $.photoPreview.visible = true;
                } else alert("Got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    function openGallery() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    $.photoPreview.image = event.media;
                    $.photoPreview.visible = true;
                } else alert("Got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    function goBack() {
        $.camera.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "camera";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.camera = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "camera",
        title: "Camera"
    });
    $.__views.camera && $.addTopLevelView($.__views.camera);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#223344",
                offset: 0
            }, {
                color: "#446699",
                offset: 1
            } ]
        },
        id: "__alloyId10"
    });
    $.__views.camera.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createButton({
        top: "5dp",
        left: "5dp",
        width: "50dp",
        height: "30dp",
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "10dp",
            fontWeight: "bold"
        },
        title: "Back",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    goBack ? $.__views.__alloyId11.addEventListener("click", goBack) : __defers["$.__views.__alloyId11!click!goBack"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Camera",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    $.__views.mainView = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "mainView"
    });
    $.__views.camera.add($.__views.mainView);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "__alloyId13"
    });
    $.__views.mainView.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "10dp",
        left: "10dp",
        height: "40dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.buttonCamera = Ti.UI.createButton({
        top: 0,
        bottom: 0,
        width: "110dp",
        height: "28dp",
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "10dp",
            fontWeight: "bold"
        },
        borderWidth: 1,
        borderColor: "#394453",
        borderRadius: 7,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#5B6A7E",
                offset: 0
            }, {
                color: "#526072",
                offset: 1
            } ]
        },
        title: "Capture Photo",
        id: "buttonCamera",
        left: "5dp"
    });
    $.__views.__alloyId14.add($.__views.buttonCamera);
    showCamera ? $.__views.buttonCamera.addEventListener("click", showCamera) : __defers["$.__views.buttonCamera!click!showCamera"] = true;
    $.__views.buttonGallery = Ti.UI.createButton({
        top: 0,
        bottom: 0,
        width: "110dp",
        height: "28dp",
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "10dp",
            fontWeight: "bold"
        },
        borderWidth: 1,
        borderColor: "#394453",
        borderRadius: 7,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#5B6A7E",
                offset: 0
            }, {
                color: "#526072",
                offset: 1
            } ]
        },
        title: "Photo Gallery",
        id: "buttonGallery",
        left: "135dp"
    });
    $.__views.__alloyId14.add($.__views.buttonGallery);
    openGallery ? $.__views.buttonGallery.addEventListener("click", openGallery) : __defers["$.__views.buttonGallery!click!openGallery"] = true;
    $.__views.photoPreview = Ti.UI.createImageView({
        top: "60dp",
        height: "60%",
        width: "100%",
        borderWidth: 1,
        borderColor: "#394453",
        borderRadius: 7,
        visible: false,
        id: "photoPreview"
    });
    $.__views.__alloyId13.add($.__views.photoPreview);
    $.__views.__alloyId15 = Ti.UI.createView({
        bottom: 0,
        height: "25dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#BCC5CF",
                offset: 0
            }, {
                color: "#8394A7",
                offset: 1
            } ]
        },
        id: "__alloyId15"
    });
    $.__views.camera.add($.__views.__alloyId15);
    $.__views.copyright = Ti.UI.createLabel({
        color: "#002451",
        font: {
            fontFamily: "Tahoma",
            fontSize: "11dp",
            fontWeight: "bold"
        },
        text: "Copyright, 2014. Diptesh Shrestha",
        id: "copyright"
    });
    $.__views.__alloyId15.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId11!click!goBack"] && $.__views.__alloyId11.addEventListener("click", goBack);
    __defers["$.__views.buttonCamera!click!showCamera"] && $.__views.buttonCamera.addEventListener("click", showCamera);
    __defers["$.__views.buttonGallery!click!openGallery"] && $.__views.buttonGallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;