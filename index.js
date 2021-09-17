let { app, BrowserWindow } = require("electron");

const path = require('path')

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	// win.loadFile("index.html");

	win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(createWindow);
app.on("window - all - closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
		pybits.send("stop");
	}
});
app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
