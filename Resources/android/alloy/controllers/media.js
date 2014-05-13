function Controller() {
    function recordAudio() {
        if (audioRecorder.isRecording()) {
            audioRecorder.stopRecording();
            $.buttonRecord.title = "Start Recording";
            $.recInfo.text = "Recording stopped.";
            $.buttonPlay.visible = true;
        } else {
            $.recInfo.text = "Recording audio...";
            $.buttonRecord.title = "Stop Recording";
            $.buttonPlay.visible = false;
            audioRecorder.startRecording({
                outputFormat: audioRecorder.OutputFormat_THREE_GPP,
                audioEncoder: audioRecorder.AudioEncoder_AMR_NB,
                directoryName: "testdir",
                fileName: "testfile",
                success: function(e) {
                    var audioDir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory, "testdir");
                    var audioFile = Ti.Filesystem.getFile(audioDir.resolve(), e.fileName);
                    audioPlayer.url = audioFile.nativePath;
                },
                error: function(e) {
                    alert("error => " + e.message);
                    Ti.API.info("@@## error is => " + JSON.stringify(e));
                }
            });
        }
    }
    function playAudio() {
        if (audioPlayer.playing || audioPlayer.paused) {
            audioPlayer.stop();
            pauseResumeButton.enabled = false;
            $.buttonPlay.title = "Play Recording";
            $.recInfo.text = "";
            audioPlayer.release();
        } else {
            audioPlayer.start();
            pauseResumeButton.enabled = true;
            $.buttonPlay.title = "Stop Recording";
            $.recInfo.text = "Playing recorded audio.";
        }
    }
    function goBack() {
        $.media.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "media";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.media = Ti.UI.createWindow({
        backgroundColor: "#FCFCFC",
        textAlign: "center",
        navBarHidden: true,
        id: "media",
        title: "Media"
    });
    $.__views.media && $.addTopLevelView($.__views.media);
    $.__views.__alloyId61 = Ti.UI.createView({
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
        id: "__alloyId61"
    });
    $.__views.media.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createButton({
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
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    goBack ? $.__views.__alloyId62.addEventListener("click", goBack) : __defers["$.__views.__alloyId62!click!goBack"] = true;
    $.__views.__alloyId63 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontFamily: "Tahoma",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        text: "Media",
        id: "__alloyId63"
    });
    $.__views.__alloyId61.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        top: Alloy.Globals.tableTop,
        bottom: "60dp",
        left: "20dp",
        right: "20dp",
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderRadius: 7,
        backgroundColor: "#F4F4F4",
        id: "__alloyId64"
    });
    $.__views.media.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        top: "10dp",
        bottom: "10dp",
        left: "10dp",
        right: "10dp",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.imgInfo = Ti.UI.createImageView({
        id: "imgInfo"
    });
    $.__views.__alloyId65.add($.__views.imgInfo);
    $.__views.__alloyId66 = Ti.UI.createView({
        top: 0,
        left: 0,
        height: "80dp",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.recInfo = Ti.UI.createLabel({
        top: 0,
        bottom: 0,
        left: "5dp",
        width: "100%",
        height: "30dp",
        color: "#224455",
        font: {
            fontFamily: "Tahoma",
            fontSize: "13dp",
            fontWeight: "bold"
        },
        id: "recInfo"
    });
    $.__views.__alloyId66.add($.__views.recInfo);
    $.__views.buttonRecord = Ti.UI.createButton({
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
        id: "buttonRecord",
        left: "0dp",
        title: "Start Recording"
    });
    $.__views.__alloyId66.add($.__views.buttonRecord);
    recordAudio ? $.__views.buttonRecord.addEventListener("click", recordAudio) : __defers["$.__views.buttonRecord!click!recordAudio"] = true;
    $.__views.buttonPlay = Ti.UI.createButton({
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
        visible: false,
        id: "buttonPlay",
        left: "120dp",
        title: "Playback Audio"
    });
    $.__views.__alloyId66.add($.__views.buttonPlay);
    playAudio ? $.__views.buttonPlay.addEventListener("click", playAudio) : __defers["$.__views.buttonPlay!click!playAudio"] = true;
    $.__views.__alloyId67 = Ti.UI.createView({
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
        id: "__alloyId67"
    });
    $.__views.media.add($.__views.__alloyId67);
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
    $.__views.__alloyId67.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var audioPlayer;
    var audioRecorder = require("titutorial.audiorecorder");
    $.recInfo.text = "Press button to record audio.";
    audioPlayer = Titanium.Media.createAudioPlayer({
        allowBackground: true
    });
    __defers["$.__views.__alloyId62!click!goBack"] && $.__views.__alloyId62.addEventListener("click", goBack);
    __defers["$.__views.buttonRecord!click!recordAudio"] && $.__views.buttonRecord.addEventListener("click", recordAudio);
    __defers["$.__views.buttonPlay!click!playAudio"] && $.__views.buttonPlay.addEventListener("click", playAudio);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;