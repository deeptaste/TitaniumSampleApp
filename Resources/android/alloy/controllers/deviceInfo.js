function Controller() {
    function goBack() {
        $.deviceInfo.close();
    }
    function showDeviceInfo() {
        $.deviceName.title = "Manufacurer : " + Titanium.Platform.manufacturer;
        $.deviceModel.title = "Model : " + Titanium.Platform.model;
        $.deviceUUID.title = "UUID : " + Titanium.Platform.id;
        $.devicePlatform.title = "Platform (OS) : android";
        $.devicePlatformVersion.title = "OS Version : " + Titanium.Platform.version;
        $.deviceDefaultLanguage.title = "Default Language : " + Titanium.Platform.locale;
        $.deviceAvailableMemory.title = "Available Memory : " + Titanium.Platform.availableMemory + " Bytes";
        $.deviceNetworkConnection.title = "Network Status : " + showNewtworkType();
    }
    function showNewtworkType() {
        var nType = Titanium.Network.networkType;
        var text = "";
        text = nType == Titanium.Network.NETWORK_LAN ? "LAN Connection" : nType == Titanium.Network.NETWORK_MOBILE ? "Mobile Connection" : nType == Titanium.Network.NETWORK_WIFI ? "WiFi Connection" : nType == Titanium.Network.NETWORK_NONE ? "No Connection" : "Unknown Connection";
        return text;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "deviceInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.deviceInfo = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "deviceInfo",
        title: "Device Info"
    });
    $.__views.deviceInfo && $.addTopLevelView($.__views.deviceInfo);
    showDeviceInfo ? $.__views.deviceInfo.addEventListener("open", showDeviceInfo) : __defers["$.__views.deviceInfo!open!showDeviceInfo"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
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
        id: "__alloyId22"
    });
    $.__views.deviceInfo.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createButton({
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
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    goBack ? $.__views.__alloyId23.addEventListener("click", goBack) : __defers["$.__views.__alloyId23!click!goBack"] = true;
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Device Info",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId25"
    });
    $.__views.deviceInfo.add($.__views.__alloyId25);
    var __alloyId27 = [];
    $.__views.deviceName = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceName"
    });
    __alloyId27.push($.__views.deviceName);
    $.__views.deviceModel = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceModel"
    });
    __alloyId27.push($.__views.deviceModel);
    $.__views.deviceUUID = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceUUID"
    });
    __alloyId27.push($.__views.deviceUUID);
    $.__views.devicePlatform = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "devicePlatform"
    });
    __alloyId27.push($.__views.devicePlatform);
    $.__views.devicePlatformVersion = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "devicePlatformVersion"
    });
    __alloyId27.push($.__views.devicePlatformVersion);
    $.__views.deviceDefaultLanguage = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceDefaultLanguage"
    });
    __alloyId27.push($.__views.deviceDefaultLanguage);
    $.__views.deviceAvailableMemory = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceAvailableMemory"
    });
    __alloyId27.push($.__views.deviceAvailableMemory);
    $.__views.deviceNetworkConnection = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "deviceNetworkConnection"
    });
    __alloyId27.push($.__views.deviceNetworkConnection);
    $.__views.__alloyId26 = Ti.UI.createTableView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        data: __alloyId27,
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId28 = Ti.UI.createView({
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
        id: "__alloyId28"
    });
    $.__views.deviceInfo.add($.__views.__alloyId28);
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
    $.__views.__alloyId28.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.deviceInfo!open!showDeviceInfo"] && $.__views.deviceInfo.addEventListener("open", showDeviceInfo);
    __defers["$.__views.__alloyId23!click!goBack"] && $.__views.__alloyId23.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;