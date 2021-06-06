// https://github.com/electron/electron-quick-start based on this.
const Electron = require("electron");
const path     = require("path");

const tokenizer        = require("./tokenizer.js");
const create_scene     = require("./create_scene.js");
const create_character = require("./create_character.js");

/**
 * @type {Electron.BrowserWindow}
 */
var main_window;

//Electron.Menu.setApplicationMenu(null);

function create_window() {
    main_window = new Electron.BrowserWindow({
        width: 800, height: 600,
        minWidth: 800, minHeight: 600,
        show: false, useContentSize: true,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });
    
    main_window.once("ready-to-show", () => {
        main_window.show();

        // load everything here
        main_window.webContents.send("characters", "sample_character.txt", tokenizer("sample_character.txt"));

        main_window.webContents.send("loading done");
    });

    main_window.loadFile(path.join(__dirname, "index.html"));
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