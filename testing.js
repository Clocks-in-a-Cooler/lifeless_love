var tokenizer    = require("./tokenizer.js");
var create_scene = require("./create_scene.js");

var tokens = tokenizer("scenes.txt");

console.log(tokens);

var scenes = create_scene(tokens);

console.log(scenes);