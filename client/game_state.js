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

var current_scene      = null;
var conversation_index = -1;

function set_scene(scene) {
    current_scene      = scene;
    conversation_index = 0;
    display_text       = "";
    skip_scrolling     = false;
    clear_buttons();
}

/**
 * @typedef {Object} conversation_line 
 * @property {String} character
 * @property {String} pose
 * @property {String} dialog
 */

/**
 * @returns {conversation_line}
 */
function get_conversation_line() {
    if (current_scene == null) {
        return "";
    }
    if (conversation_index >= current_scene.conversation.length) {
        return "";
    }
    return current_scene.conversation[conversation_index];
}

function update() {
    switch (game_state) {
        case GAME_STATES.LOADING:
            if (characters && scenes) {
                game_state = GAME_STATES.MAIN_MENU;
                buttons.push(new Button(new Vector(0, 0), "play", () => {
                    clear_buttons();
                    game_state = GAME_STATES.SCENE;
                    set_scene(scenes.start);
                }));
                buttons.forEach(button => button.center(new Vector(400, 400)));
            }
            break;
        case GAME_STATES.SCENE:
            // lots and lots of nesting, Yanderedev style
            // hopefully, we won't be sitting on our asses and thousands of Patreon dollars doing nothing
            // come to think of it, how the hell is that idiot *still* able to get himself and thousands of weebs to eagerly wait for that cursed "game"?
            // yeah, i don't know either
            if (display_text.length == get_conversation_line().dialog.length && !buttons.length) {
                // add a button
                if (conversation_index >= current_scene.conversation.length - 1) {
                    if (current_scene.next) {
                        // current scene has a next scene, add a button for that
                        var next_scene = scenes[current_scene.next];
                        buttons.push(new Button(new Vector(0, 0), "...", () => {
                            set_scene(next_scene);
                        }).center(new Vector(750, 550)));
                    } else {
                        // current scene has a choice
                        // this will need cleanup later
                        // gotta get it working first, dammit
                        var choices       = current_scene.choice;
                        var choice_labels = Object.getOwnPropertyNames(choices);

                        console.log(choice_labels);

                        choice_labels.forEach((label, index) => {
                            var next_scene = scenes[choices[label]];
                            buttons.push(new Button(new Vector(0, 0), label, () => {
                                set_scene(next_scene);
                            }).center(new Vector(750, 550 - index * 33)).align(new Vector(780, 0), RIGHT));
                        });
                    }
                } else {
                    buttons.push(new Button(new Vector(0, 0), "...", () => {
                        conversation_index += 1;
                        display_text        = "";
                        skip_scrolling      = false;
                        clear_buttons();
                    }).center(new Vector(750, 550)));
                }
            }

            // this should be in the update function
            if (get_conversation_line().dialog.length > display_text.length && frames % 20 != 0) {
                display_text  += skip_scrolling ? get_conversation_line().dialog.slice(display_text.length, get_conversation_line().dialog.length) : get_conversation_line().dialog.charAt(display_text.length);
                skip_scrolling = false;
            }
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