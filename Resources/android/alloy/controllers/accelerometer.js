function Controller() {
    function startAccelerometer() {
        if (!watchingAccelerometer) if ("Simulator" === Titanium.Platform.model || -1 !== Titanium.Platform.model.indexOf("sdk")) alert("Accelerometer does not work on a virtual device"); else {
            Titanium.Accelerometer.addEventListener("update", watchAccelerometer);
            watchingAccelerometer = true;
        }
    }
    function stopAccelerometer() {
        if (watchingAccelerometer) if ("Simulator" === Titanium.Platform.model || -1 !== Titanium.Platform.model.indexOf("sdk")) alert("Accelerometer does not work on a virtual device"); else {
            Titanium.Accelerometer.removeEventListener("update", watchAccelerometer);
            watchingAccelerometer = false;
        }
    }
    function goBack() {
        stopAccelerometer();
        $.accelerometer.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accelerometer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.accelerometer = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "accelerometer",
        title: "Accelerometer"
    });
    $.__views.accelerometer && $.addTopLevelView($.__views.accelerometer);
    $.__views.__alloyId0 = Ti.UI.createView({
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
        id: "__alloyId0"
    });
    $.__views.accelerometer.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
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
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    goBack ? $.__views.__alloyId1.addEventListener("click", goBack) : __defers["$.__views.__alloyId1!click!goBack"] = true;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Accelerometer",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId3"
    });
    $.__views.accelerometer.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        top: 0,
        left: 0,
        height: "80dp",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        top: 0,
        bottom: 0,
        left: "5dp",
        width: "125dp",
        height: "30dp",
        color: "#224455",
        font: {
            fontFamily: "Tahoma",
            fontSize: "13dp",
            fontWeight: "bold"
        },
        text: "Device Orientation",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.buttonStart = Ti.UI.createButton({
        top: "40dp",
        bottom: 0,
        width: "100dp",
        height: "30dp",
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
        title: "Start Watching",
        id: "buttonStart",
        left: "5dp"
    });
    $.__views.__alloyId5.add($.__views.buttonStart);
    startAccelerometer ? $.__views.buttonStart.addEventListener("click", startAccelerometer) : __defers["$.__views.buttonStart!click!startAccelerometer"] = true;
    $.__views.buttonStop = Ti.UI.createButton({
        top: "40dp",
        bottom: 0,
        width: "100dp",
        height: "30dp",
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
        title: "Stop Watching",
        id: "buttonStop",
        left: "120dp"
    });
    $.__views.__alloyId5.add($.__views.buttonStop);
    stopAccelerometer ? $.__views.buttonStop.addEventListener("click", stopAccelerometer) : __defers["$.__views.buttonStop!click!stopAccelerometer"] = true;
    var __alloyId8 = [];
    $.__views.xVal = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "xVal",
        title: "X-val : "
    });
    __alloyId8.push($.__views.xVal);
    $.__views.yVal = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "yVal",
        title: "Y-val : "
    });
    __alloyId8.push($.__views.yVal);
    $.__views.zVal = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "zVal",
        title: "Z-val : "
    });
    __alloyId8.push($.__views.zVal);
    $.__views.tsVal = Ti.UI.createTableViewRow({
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "tsVal",
        title: "Time-stamp : "
    });
    __alloyId8.push($.__views.tsVal);
    $.__views.__alloyId7 = Ti.UI.createTableView({
        top: "80dp",
        left: "5dp",
        data: __alloyId8,
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId9 = Ti.UI.createView({
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
        id: "__alloyId9"
    });
    $.__views.accelerometer.add($.__views.__alloyId9);
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
    $.__views.__alloyId9.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var watchingAccelerometer = false;
    var watchAccelerometer = function(e) {
        $.xVal.title = "X-val : " + e.x;
        $.yVal.title = "Y-val : " + e.y;
        $.zVal.title = "Z-val : " + e.z;
        $.tsVal.title = "Timestamp : " + e.timestamp;
    };
    __defers["$.__views.__alloyId1!click!goBack"] && $.__views.__alloyId1.addEventListener("click", goBack);
    __defers["$.__views.buttonStart!click!startAccelerometer"] && $.__views.buttonStart.addEventListener("click", startAccelerometer);
    __defers["$.__views.buttonStop!click!stopAccelerometer"] && $.__views.buttonStop.addEventListener("click", stopAccelerometer);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;