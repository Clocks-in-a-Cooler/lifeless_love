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

function update() {
    switch (game_state) {
        case GAME_STATES.LOADING:
            if (characters && scenes) {
                game_state = GAME_STATES.MAIN_MENU;
            }
            break;
    }

    draw();
    requestAnimationFrame(update);
}