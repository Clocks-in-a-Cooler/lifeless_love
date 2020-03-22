var stage = document.getElementById("stage");
var foreground = document.getElementById("foreground");
var dialog_box = document.getElementById("dialogue");
var actions_box = document.getElementById("actions");

//var name = prompt("what is your name?");

//load the scene tree now...
window.onload = function() {
    STC.crawl(test_scene_tree);
}