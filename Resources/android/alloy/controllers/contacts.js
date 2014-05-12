function Controller() {
    function goBack() {
        $.contacts.close();
    }
    function showContactDetails() {
        var contacts = Titanium.Contacts.getAllPeople();
        var contactMsg = "<strong>" + contacts.length + "</strong> contacts found, but showing contacts with phone numbers only.<br/>";
        for (var i = 0, cLen = contacts.length; cLen > i; i++) {
            var person = contacts[i];
            if (person.phone.mobile) {
                contactMsg += "<br/> [" + (i + 1) + "] <b>" + person.fullName + "</b>";
                contactMsg += " : " + person.phone.mobile + " (Mobile)";
            }
        }
        $.contactDetails.html = contactMsg;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contacts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contacts = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "contacts",
        title: "Contacts"
    });
    $.__views.contacts && $.addTopLevelView($.__views.contacts);
    showContactDetails ? $.__views.contacts.addEventListener("focus", showContactDetails) : __defers["$.__views.contacts!focus!showContactDetails"] = true;
    $.__views.__alloyId16 = Ti.UI.createView({
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
        id: "__alloyId16"
    });
    $.__views.contacts.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
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
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    goBack ? $.__views.__alloyId17.addEventListener("click", goBack) : __defers["$.__views.__alloyId17!click!goBack"] = true;
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Contacts",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId19"
    });
    $.__views.contacts.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.contactDetails = Ti.UI.createLabel({
        top: 2,
        color: "#224455",
        font: {
            fontSize: "13dp",
            fontWeight: "normal"
        },
        id: "contactDetails"
    });
    $.__views.__alloyId20.add($.__views.contactDetails);
    $.__views.__alloyId21 = Ti.UI.createView({
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
        id: "__alloyId21"
    });
    $.__views.contacts.add($.__views.__alloyId21);
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
    $.__views.__alloyId21.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.contacts!focus!showContactDetails"] && $.__views.contacts.addEventListener("focus", showContactDetails);
    __defers["$.__views.__alloyId17!click!goBack"] && $.__views.__alloyId17.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;