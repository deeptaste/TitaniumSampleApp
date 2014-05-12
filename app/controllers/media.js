//var args = arguments[0] || {};

var audioPlayer;
var audioRecorder = require('titutorial.audiorecorder');

$.recInfo.text = "Press button to record audio.";

function recordAudio() {
	if(!audioRecorder.isRecording()) {
		$.recInfo.text = "Recording audio...";
		$.buttonRecord.title = "Stop Recording";
		$.buttonPlay.visible = false;
		
		audioRecorder.startRecording({
			outputFormat : audioRecorder.OutputFormat_THREE_GPP,
			audioEncoder : audioRecorder.AudioEncoder_AMR_NB,
			directoryName : "testdir",
			fileName : "testfile",
			success : function(e) {
				var audioDir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory, "testdir");
				var audioFile = Ti.Filesystem.getFile(audioDir.resolve(), e.fileName);
				
				audioPlayer.url = audioFile.nativePath;
			},
			error : function(e) {
				alert("error => " + e.message);
				Ti.API.info("@@## error is => " + JSON.stringify(e));
			}
		});
	}
	else {
		audioRecorder.stopRecording();
		$.buttonRecord.title = "Start Recording";
		$.recInfo.text = "Recording stopped.";
		$.buttonPlay.visible = true;
	}
}
		
audioPlayer = Titanium.Media.createAudioPlayer({
	allowBackground : true
});

function playAudio() {
	if (audioPlayer.playing || audioPlayer.paused) {
		audioPlayer.stop();
		pauseResumeButton.enabled = false;
		
		$.buttonPlay.title = 'Play Recording';
		$.recInfo.text = "";
		
		if (Ti.Platform.name === 'android') {
			audioPlayer.release();
		}
	} else {
		audioPlayer.start();
		pauseResumeButton.enabled = true;
		
		$.buttonPlay.title = 'Stop Recording';
		$.recInfo.text = "Playing recorded audio.";
	}
}

function goBack(e) {
	$.media.close();
}
