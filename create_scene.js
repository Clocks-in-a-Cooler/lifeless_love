function create_scene(tokens) {
    var scenes = {};
    var index  = 0;

    while (index < tokens.length) {
        var current_scene = {};
        var scene_name    = tokens[index + 1];

        current_scene.conversation = [];

        index += 2;

        while (tokens[index] != "end") {
            switch (tokens[index]) {
                case "background":
                    current_scene.background = tokens[index + 1];
                    index += 2;
                    break;
                case "choose":
                    // create a choice thingy, however the hell that will work
                    break;
                case "goto":
                    current_scene.next = tokens[index + 1];
                    index += 2;
                    break;
                default:
                    // if this token does not match any of the above, then it is a character
                    var character_name   = tokens[index];
                    var character_pose   = tokens[index + 1];
                    var character_dialog = tokens[index + 2];

                    current_scene.conversation.push({
                        character: character_name,
                        pose: character_pose,
                        dialog: character_dialog,
                    });

                    index += 3;
            }
        }

        index += 1;
        scenes[scene_name] = current_scene;
    }

    return scenes;
}

function create_choice(tokens) {

}

module.exports = create_scene;