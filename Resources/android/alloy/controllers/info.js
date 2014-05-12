function Controller() {
    function goBack() {
        $.info.close();
    }
    function showDeviceInfo() {
        $.appDetails.html = "<div style='text-align: justify;width: 100%;'>This cross-platform mobile app has been developed using Appcelerometer Titanium which uses JavaScript programming language. <br/><br/>This mobile app test some of the mobile device features such as Accelerometer, Camera, Geolocation, and more.<br/><br/>This mobile app has been developed as a part of my dissertation project for MSc. in Software Engineering.<br/><br/><u>Developer's Details:</u><br/><b>Diptesh Shrestha</b><br/>diptesh.shrestha@gmail.com<br/><br/><u>Project Supervisor:</u><br/><b>Samia Oussena</b><br/>University of West London</div>";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.info = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "info",
        title: "About the App"
    });
    $.__views.info && $.addTopLevelView($.__views.info);
    showDeviceInfo ? $.__views.info.addEventListener("focus", showDeviceInfo) : __defers["$.__views.info!focus!showDeviceInfo"] = true;
    $.__views.__alloyId55 = Ti.UI.createView({
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
        id: "__alloyId55"
    });
    $.__views.info.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createButton({
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
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    goBack ? $.__views.__alloyId56.addEventListener("click", goBack) : __defers["$.__views.__alloyId56!click!goBack"] = true;
    $.__views.__alloyId57 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "About the App",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId58"
    });
    $.__views.info.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.appDetails = Ti.UI.createLabel({
        top: "2dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "appDetails"
    });
    $.__views.__alloyId59.add($.__views.appDetails);
    $.__views.__alloyId60 = Ti.UI.createView({
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
        id: "__alloyId60"
    });
    $.__views.info.add($.__views.__alloyId60);
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
    $.__views.__alloyId60.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.info!focus!showDeviceInfo"] && $.__views.info.addEventListener("focus", showDeviceInfo);
    __defers["$.__views.__alloyId56!click!goBack"] && $.__views.__alloyId56.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;