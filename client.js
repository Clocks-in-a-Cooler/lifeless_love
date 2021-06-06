const Electron = require("electron");

/**
 * @type {HTMLCanvasElement}
 */
var main_canvas   = document.getElementById("main_canvas");
main_canvas.width = 800; main_canvas.height = 600;
var main_context  = main_canvas.getContext("2d");

var backgrounds = {
    "classroom": create_sprite("images/classroom2.png"),
};

var characters = {
    "Sophie": {
        "without_jacket": create_sprite("characters/sophie_2.png"),
    }
};

function draw() {
    // draw order:
    // background, character, dialog box, buttons

    // hardcoding the numbers here for the mockup, should be scaled properly in the release
    // main_context.drawImage(backgrounds.classroom, 0, 0, 512, 236, 0, 0, 800, 600);
    // main_context.drawImage(characters.Sophie.without_jacket, 0, 0, 589, 1200, 0, 0, 294, 600);

    draw_scaled_image(backgrounds.classroom, main_context);
    draw_scaled_image(characters.Sophie.without_jacket, main_context);

    main_context.fillStyle = "white";
    //main_context.fillRect(10, 450, 780, 140);

    fill_rounded_rect(main_context, 10, 450, 780, 140, 10);
}

window.onload = draw;

Electron.ipcRenderer.on("characters", (event, file, data) => {
    console.log(data);
});

Electron.ipcRenderer.on("loading done", () => {
    // start the game, loading has finished
});