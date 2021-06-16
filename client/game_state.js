var main_process_loaded     = false;
var renderer_process_loaded = false;

var GAME_STATES = {
    MAIN_MENU: 0,
    SCENE: 1,
    CREDITS: 2,
    LOADING: 3,
}

var game_state = GAME_STATES.LOADING;

/**
 * checks if both the main process and the renderer process have finished loading
 * @param {Function} then
 */
function check_ready(then) {
    if (main_process_loaded && renderer_process_loaded) then();
}

/**
 * @type {Button[]}
 */
var buttons = [];

function clear_buttons() {
    while (buttons.length > 0) {
        buttons.pop();
    }
}

var frames = 0;

function update() {
    switch (game_state) {
        case GAME_STATES.LOADING:
            if (characters && scenes) {
                game_state = GAME_STATES.MAIN_MENU;
                buttons.push(new Button(new Vector(0, 0), "play", () => {
                    console.log("button clicked.");
                    // actually, clicking the button should start the game, but for now, let's load a scene
                    clear_buttons();
                    game_state = GAME_STATES.SCENE;
                    set_scene(scenes.start);
                }));
                buttons.forEach(button => button.center(new Vector(400, 400)));
            }
            break;
    }

    // buttons are updated separately

    frames++;
    draw();
    requestAnimationFrame(update);
}

/**
 * 
 * @param {MouseEvent} event 
 */
function mousemove(event) {
    var mouse_position = new Vector(event.offsetX, event.offsetY);
    buttons.forEach(button => {
        button.hover = button.collision(mouse_position);
    });
}

/**
 * 
 * @param {MouseEvent} event 
 */
function click(event) {
    if (game_state == GAME_STATES.SCENE) {
        skip_scrolling = true;
    }

    var mouse_position = new Vector(event.offsetX, event.offsetY);
    buttons.forEach(button => {
        if (button.collision(mouse_position)) {
            button.action();
        }
    });
}