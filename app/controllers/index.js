function showInfo(e) {
	var info = Alloy.createController("info").getView();
	info.open();
}

function showView(e) {
    var newWindowName = e.source.newWindowName;
    var newWindow = Alloy.createController(newWindowName).getView();
    newWindow.open();
}

$.index.open(); // open the window