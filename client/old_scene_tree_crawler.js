var scene_tree_crawler = (function() {
    var tree, current_scene;
    
    function set_background(src) {
        stage.style.backgroundImage = "url(\"" + src + "\")";
    }
    
    function set_foreground(src) {
        foreground.style.backgroundImage = "url(\"" + src + "\")";
    }
    
    function set_text(text) {
        dialog_box.innerHTML = text;
    }
    
    function add_button(label, onclick) {
        var button = document.createElement("button");
        button.innerHTML = label;
        button.addEventListener("click", onclick);
        actions_box.appendChild(button);
    }
    
    function clear_buttons() {
        actions_box.innerHTML = "";
    }
    
    function pick_one(next) {
        var labels = Object.getOwnPropertyNames(next);
        var ranges = {};
        var running_count = 0;
        labels.forEach((l) => {
            var range = new Range(running_count, running_count + next[l]);
            ranges[l] = range;
            running_count += next[l];
        });
        
        var n = Math.random();
        var the_chosen_one;
        labels.forEach(l => {
            if (ranges[l].test(n)) {
/* BEHOLD */    the_chosen_one = l;
            }
        });
        
        return the_chosen_one; /* GO FORTH */
    }
    
    function add_choice_buttons(choices) {
        var names = Object.getOwnPropertyNames(choices);
        names.forEach(n => {
            add_button(choices[n], () => {
                current_scene = tree[n];
                load_scene();
            });
        });
    }
    
    function add_action_buttons(actions) {
        var names = Object.getOwnPropertyNames(actions);
        names.forEach(n => {
            add_button(n, () => {
                actions[n]();
            });
        });
    }
    
    //PYRAMID OF DOOM LET'S GO
    function load_scene() {
        clear_buttons();
        if (current_scene.image) set_background(current_scene.image);
        set_text(current_scene.text);
        if (current_scene.onload) {
            current_scene.onload();
        }
        
        if (current_scene.actions) {
            add_action_buttons(current_scene.actions);
        }
         
        if (current_scene.next != null) {
            switch (typeof current_scene.next) {
                case "string":
                    add_button("...", () => {
                        current_scene = tree[current_scene.next];
                        load_scene();
                    });
                    break;
                case "object":
                    add_button("...", () => {
                        current_scene = tree[pick_one(current_scene.next)];
                        load_scene();
                    });
                    break;
            }
        } else if (current_scene.choose != null) {
            add_choice_buttons(current_scene.choose);
        }
    }

    return {
        crawl: function(t) {
            tree = t;
            current_scene = tree["start"];
            load_scene();
        },
    };
})();

function Range(start, end) {
    this.start = Math.min(start, end);
    this.end = Math.max(start, end);
}

Range.prototype.test = function(num) {
    return num >= this.start && num <= this.end;
};

//alias
var STC = scene_tree_crawler;