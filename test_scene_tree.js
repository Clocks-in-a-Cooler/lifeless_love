// LOTS OF DATA LOTS OF DATA LOTS OF DATA LOTS OF DATA

//I don't think the title is necessary
var test_scene_tree = {
    'start': {
        'title': "Start",
        'text': "The starting scene.",
        'image': 'images/background.png',
        'next': 'scene_2',
    },
    
    'scene_2': {
        'title': "Scene 2",
        'text': "This is scene 2. The next scene is random.",
        'image': 'images/background.png',
        'next': {
            'scene_3': 0.45,
            'scene_4': 0.1,
            'scene_5': 0.45,
        },
    },
    
    'scene_3': {
        'title': "Scene 3",
        'text': "Welcome to scene 3! You had a 30% chance of coming here! You get to choose the next scene.",
        'image': "images/background.png",
        'choose': {
            'scene_4': "Scene 4",
            'scene_5': "Scene 5",
            'scene_6': "Scene 6",
        },
    },
    
    'scene_4': {
        'title': "Scene 4",
        'text': "This is scene 4. You had a 50% chance of coming here from Scene 2, or you chose to come here from Scene 3.",
        'image': "images/background.png",
        'next': 'end',
    },
    
    'scene_5': {
        'title': "Scene 5",
        'text': "You came to this scene! There is only a 20% chance of coming here from scene 2. Click the button, see what happens.",
        'image': "images/background2.png",
        'actions': {
            'Click me': function() {
                alert("you clicked the button!");
            },
        },
        'next': 'end',
    },
    
    'scene_6': {
        'title': "Scene 6",/*
        'conversation': [
            {'character': }
        ],*/
        'image': "images/background2.png",
        'next': 'end',
    },
    
    'end': {
        'image': "images/classroom2.png",
        'text': "the end",
    },
};