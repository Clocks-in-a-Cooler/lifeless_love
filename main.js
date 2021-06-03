const { app } = require("electron");
const Electron = require("electron");
const path     = require("path");

/**
 * @type {Electron.BrowserWindow}
 */
var main_window;

function create_window() {
    main_window = new Electron.BrowserWindow({
        width: 800, height: 600,
        minWidth: 800, minHeight: 600,
        show: false, useContentSize: true,
    });
    
    main_window.once("ready-to-show", () => {
        main_window.show();
    });

    main_window.loadFile("index.html");
}

Electron.app.whenReady().then(() => {
    create_window();

    Electron.app.on("activate", () => {
        if (!Electron.BrowserWindow.getAllWindows().length) {
            create_window();
        }
    });
});

Electron.app.on("window-all-closed", () => {
    Electron.app.quit();
});