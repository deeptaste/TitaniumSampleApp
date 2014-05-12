function Controller() {
    function showInfo() {
        var info = Alloy.createController("info").getView();
        info.open();
    }
    function showView(e) {
        var newWindowName = e.source.newWindowName;
        var newWindow = Alloy.createController(newWindowName).getView();
        newWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        exitOnClose: true,
        id: "index",
        title: "Main Window"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId35 = Ti.UI.createView({
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
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId35"
    });
    $.__views.index.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "My Demo App",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.viewInfo = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "40dp",
        id: "viewInfo",
        newWindowName: "info"
    });
    $.__views.__alloyId35.add($.__views.viewInfo);
    showInfo ? $.__views.viewInfo.addEventListener("click", showInfo) : __defers["$.__views.viewInfo!click!showInfo"] = true;
    $.__views.imgInfo = Ti.UI.createImageView({
        height: "20dp",
        width: "20dp",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        image: "/info.png",
        touchEnabled: false,
        id: "imgInfo"
    });
    $.__views.viewInfo.add($.__views.imgInfo);
    $.__views.__alloyId37 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId37"
    });
    $.__views.index.add($.__views.__alloyId37);
    var __alloyId38 = [];
    $.__views.__alloyId41 = Ti.UI.createLabel({
        height: "35dp",
        textAlign: "left",
        color: "#337799",
        font: {
            fontSize: "13dp",
            fontWeight: "bold"
        },
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
                color: "#EFEFEF",
                offset: 0
            }, {
                color: "#C3C3C3",
                offset: 1
            } ]
        },
        text: "	 Information",
        id: "__alloyId41"
    });
    $.__views.__alloyId39 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId41,
        id: "__alloyId39"
    });
    __alloyId38.push($.__views.__alloyId39);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Device Info",
        newWindowName: "deviceInfo",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    showView ? $.__views.__alloyId42.addEventListener("click", showView) : __defers["$.__views.__alloyId42!click!showView"] = true;
    $.__views.__alloyId45 = Ti.UI.createLabel({
        height: "35dp",
        textAlign: "left",
        color: "#337799",
        font: {
            fontSize: "13dp",
            fontWeight: "bold"
        },
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
                color: "#EFEFEF",
                offset: 0
            }, {
                color: "#C3C3C3",
                offset: 1
            } ]
        },
        text: "	 Hardware",
        id: "__alloyId45"
    });
    $.__views.__alloyId43 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId45,
        id: "__alloyId43"
    });
    __alloyId38.push($.__views.__alloyId43);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Accelerometer",
        newWindowName: "accelerometer",
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    showView ? $.__views.__alloyId46.addEventListener("click", showView) : __defers["$.__views.__alloyId46!click!showView"] = true;
    $.__views.__alloyId47 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Camera",
        newWindowName: "camera",
        id: "__alloyId47"
    });
    $.__views.__alloyId43.add($.__views.__alloyId47);
    showView ? $.__views.__alloyId47.addEventListener("click", showView) : __defers["$.__views.__alloyId47!click!showView"] = true;
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Geolocation",
        newWindowName: "geolocation",
        id: "__alloyId48"
    });
    $.__views.__alloyId43.add($.__views.__alloyId48);
    showView ? $.__views.__alloyId48.addEventListener("click", showView) : __defers["$.__views.__alloyId48!click!showView"] = true;
    $.__views.__alloyId51 = Ti.UI.createLabel({
        height: "35dp",
        textAlign: "left",
        color: "#337799",
        font: {
            fontSize: "13dp",
            fontWeight: "bold"
        },
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
                color: "#EFEFEF",
                offset: 0
            }, {
                color: "#C3C3C3",
                offset: 1
            } ]
        },
        text: "	 System",
        id: "__alloyId51"
    });
    $.__views.__alloyId49 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId51,
        id: "__alloyId49"
    });
    __alloyId38.push($.__views.__alloyId49);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Contacts",
        newWindowName: "contacts",
        id: "__alloyId52"
    });
    $.__views.__alloyId49.add($.__views.__alloyId52);
    showView ? $.__views.__alloyId52.addEventListener("click", showView) : __defers["$.__views.__alloyId52!click!showView"] = true;
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
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
                color: "#FDFDFD",
                offset: 0
            }, {
                color: "#FFFFFF",
                offset: 1
            } ]
        },
        title: "	 Media",
        newWindowName: "media",
        id: "__alloyId53"
    });
    $.__views.__alloyId49.add($.__views.__alloyId53);
    showView ? $.__views.__alloyId53.addEventListener("click", showView) : __defers["$.__views.__alloyId53!click!showView"] = true;
    $.__views.menuList = Ti.UI.createTableView({
        top: "2dp",
        bottom: "2dp",
        left: "2dp",
        right: "2dp",
        borderRadius: 7,
        data: __alloyId38,
        id: "menuList"
    });
    $.__views.__alloyId37.add($.__views.menuList);
    $.__views.__alloyId54 = Ti.UI.createView({
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
        id: "__alloyId54"
    });
    $.__views.index.add($.__views.__alloyId54);
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
    $.__views.__alloyId54.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.viewInfo!click!showInfo"] && $.__views.viewInfo.addEventListener("click", showInfo);
    __defers["$.__views.__alloyId42!click!showView"] && $.__views.__alloyId42.addEventListener("click", showView);
    __defers["$.__views.__alloyId46!click!showView"] && $.__views.__alloyId46.addEventListener("click", showView);
    __defers["$.__views.__alloyId47!click!showView"] && $.__views.__alloyId47.addEventListener("click", showView);
    __defers["$.__views.__alloyId48!click!showView"] && $.__views.__alloyId48.addEventListener("click", showView);
    __defers["$.__views.__alloyId52!click!showView"] && $.__views.__alloyId52.addEventListener("click", showView);
    __defers["$.__views.__alloyId53!click!showView"] && $.__views.__alloyId53.addEventListener("click", showView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;