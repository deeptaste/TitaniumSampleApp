function Controller() {
    function loadData() {
        $.mapView.region = {
            latitude: 51.50944861,
            longitude: -.3807556629,
            latitudeDelta: .2,
            longitudeDelta: .2
        };
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.addEventListener("location", function() {
            getCurrentLocation();
        });
    }
    function getCurrentLocation() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) {
                alert("Not able to get your current location.");
                return;
            }
            ({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                latitudeDelta: .2,
                longitudeDelta: .2
            });
            $.mapView.region;
            $.currentlocation.title = "Latitude : " + e.coords.latitude + ", Latitude : " + e.coords.longitude;
        });
    }
    function goBack() {
        $.geolocation.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "geolocation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.geolocation = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "geolocation",
        title: "Geolocatioin"
    });
    $.__views.geolocation && $.addTopLevelView($.__views.geolocation);
    loadData ? $.__views.geolocation.addEventListener("focus", loadData) : __defers["$.__views.geolocation!focus!loadData"] = true;
    $.__views.__alloyId29 = Ti.UI.createView({
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
        id: "__alloyId29"
    });
    $.__views.geolocation.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createButton({
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
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    goBack ? $.__views.__alloyId30.addEventListener("click", goBack) : __defers["$.__views.__alloyId30!click!goBack"] = true;
    $.__views.__alloyId31 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Geolocation",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId32"
    });
    $.__views.geolocation.add($.__views.__alloyId32);
    var __alloyId33 = [];
    $.__views.currentlocation = Ti.UI.createTableViewRow({
        top: "5dp",
        height: "30dp",
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "currentlocation"
    });
    __alloyId33.push($.__views.currentlocation);
    $.__views.geoDetails = Ti.UI.createTableView({
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        data: __alloyId33,
        id: "geoDetails"
    });
    $.__views.__alloyId32.add($.__views.geoDetails);
    $.__views.mapView = Alloy.Globals.Map.createView({
        top: "40dp",
        left: "10dp",
        right: "10dp",
        height: "90%",
        userLocation: true,
        animate: true,
        regionFit: true,
        visible: true,
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        borderWidth: 1,
        borderColor: "#C7C7C7",
        borderRadius: 5,
        id: "mapView",
        ns: "Alloy.Globals.Map"
    });
    $.__views.__alloyId32.add($.__views.mapView);
    $.__views.dipsHome = Ti.Map.createAnnotation({
        latitude: 51.50944861,
        longitude: -.3807556629,
        title: "Diptesh Shrestha's Residence",
        subtitle: "UB1 1RP, Southall, London, UK",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        id: "dipsHome",
        myid: "1"
    });
    $.__views.__alloyId34 = Ti.UI.createView({
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
        id: "__alloyId34"
    });
    $.__views.geolocation.add($.__views.__alloyId34);
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
    $.__views.__alloyId34.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.geolocation!focus!loadData"] && $.__views.geolocation.addEventListener("focus", loadData);
    __defers["$.__views.__alloyId30!click!goBack"] && $.__views.__alloyId30.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;