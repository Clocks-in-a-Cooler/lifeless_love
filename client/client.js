const Electron = require("electron");

var backgrounds = {
    "classroom": create_sprite("images/classroom2.png"),
};

var characters = {
    "Sophie": {
        "without_jacket": create_sprite("characters/sophie_2.png"),
    }
};

window.onload = () => {
    renderer_process_loaded = true;
};

Electron.ipcRenderer.on("characters", (_, __, data) => {
    characters = data;
    console.log("characters loaded!");
});

Electron.ipcRenderer.on("scenes", (_, __, data) => {
    scenes = data;
    console.log("scenes loaded!");
})

Electron.ipcRenderer.on("loading done", () => {
    // main process has finished loading
    main_process_loaded = true;
});

addEventListener("mousemove", mousemove);
addEventListener("click", click);

requestAnimationFrame(update);