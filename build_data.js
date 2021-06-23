var fs = require("fs");

// other things
var tokenizer        = require("./tokenizer.js");
var create_scene     = require("./create_scene.js");
var create_character = require("./create_character.js");

fs.writeFileSync("game_data.js", "var scenes = " + JSON.stringify(create_scene(tokenizer("scenes.txt"))));
fs.appendFileSync("game_data.js", ";\n");
fs.appendFileSync("game_data.js", "var characters = " + JSON.stringify(create_character(tokenizer("characters.txt"))));
