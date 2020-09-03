// EVEN MORE DATA EVEN MORE DATA
// SUCH NAMING MUCH WOW
var scene_tree_f = {
    'start': {
        'text': [
            "<span class=\"thought\">How the <i>hell</i> did I get myself in this situation?</span>",
            "<span class=\"thought\">I want to run, but it hurts so much.</span>",
            "<span class=\"thought\">I want to yell, but my throat is parched.</span>"
        ],
        'next': 'a1',
    },
    'a1': {
        'text': [
            "<span class=\"thought\">Even so, I must keep going...</span",
            "<span class=\"thought\">Will I make it in time?</span>",
            "<span class=\"thought\">Will I die before I get there?</span>"
        ],
        'next': 'a2',
    },
    'a2': {
        'text': [
            "<span class=\"thought\">I'm almost there.</span",
            "<span class=\"thought\">I can see my gate to safety...</span>",
            "<span class=\"thought\">It's so close...</span>"
        ],
        'next': 'a3',
    },
    'a3': {
        'text': "I made it!",
        'next': 'a4',
    },
    'a4': {
        'conversation': [
            //using 'excited' pose for Sophie here, until we get more art
            {'character': 'Sophie', 'pose': 'excited', 'script': 'Now that you\'re here, I want to ask a favour.'},
            {'character': 'me', 'pose': 'a', 'script': 'Let me guess: you want to copy me homework.'},
            {'character': 'Sophie', 'pose': 'excited', 'script': 'No use in denying it. Caught me red-handed. Take me away.'},
            {'character': 'me', 'pose': 'a', 'script': 'So are you going to <i>properly</i> ask?'},
            {'character': 'Sophie', 'pose': 'excited', 'script': 'Will you <em>please</em> let me copy your homework?'}, //THE FORBIDDEN WORDS
        ],
        'choose': {
            'a5': "Yes",
            'a6': "No",
        },
    },
    'a5': {
        'conversation': [
            {'character': 'Sophie', 'pose': 'excited', 'script': 'Yes! I knew you were my best friend!  Don\'t worry, I\'ll be quick, old Rainier won\'t notice!'}
        ],
        'next': 'a7',
    },
    'a6': {
        'conversation': {
            {'character': 'Sophie', 'pose': 'insistent', 'script': 'No, no, no, old Rainier won\'t notice. I\'ll be fast, I promise!'},
        },
        'next': 'a7',
    },
    'a7': {
        'text': [
            "<span class=\"thought\">Sophie rips out a piece of paper and grabs my book from my hand. She starts rapidly copying my homework.</span>",
            "<span class=\"thought\">Honestly, if she put as much effort into studying than copying, she'd be smarter than me.</span>"
        ],
        'next': 'a8',
    },
    'a8': {
        'conversation': [
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'What was that about old Rainier not noticing?'},
            {'character': 'me', 'pose': 'a', 'script': '<span class="thought">Crap...</span>'},
            {'character': 'Sophie', 'pose': 'nervous', 'script': 'Oh! Hi, Mr. Rainier... How long were you there...'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'You see, copying homework and insulting me is not something I could let slide, Ms. Robinson.'},
            {'character': 'Sophie', 'pose': 'nervous', 'script': 'Yeah, totally... hehe'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'You have detention. Here\'s your slip.'},
        ],
        'choose': {
            'a9': 'Stay quiet',
            'a10': 'Stand up for Sophie',
            'a11': 'Sneak back to my seat',
        },
    },
    'a9': {
        'conversation': [
            {'character': 'me', 'pose': 'a', 'script': '...'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'Oh, and I forgot about you:'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'You have detention too.'},
        ],
        'next': 'blackbird',
    },
    'a10': {
        'conversation': [
            {'character': 'me', 'pose': 'a', 'script': 'Hey! It\'s not her fault.'},
            {'character': 'me', 'pose': 'a', 'script': 'I let her copy.'},
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'Yes. I know that.'},
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'When I said “you have detention” I meant “you <em>both</em> have detention”'}
        ],
        'next': 'blackbird',
    },
    'a11': {
        'conversation': [
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'And where do you think you\'re going?'},
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'I\'m not done with you.'},
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'You\'ll have detention with her.'},
        ],
        'next': 'blackbird',
    },
    'blackbird': { // "mach 3.5: any faster and the aircraft will start melting!"(tm)
        'conversation': [
            {'character': 'Sophie', 'pose': 'desperate', 'script': 'Wait, that\'s not fair!'},
            {'character': 'Sophie', 'pose': 'desperate', 'script': 'She didn\'t do anything!'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'I believe she allowed you to copy her homework.'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'She is as guilty as you.'},
            {'character': 'Sophie', 'pose': 'desperate', 'script': 'No I forced her.'},
            {'character': 'Sophie', 'pose': 'desperate', 'script': 'She did nothing wrong!'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'I believe she did not refuse.'},
            {'character': 'Rainier', 'pose': 'annoyed', 'script': 'And if you continue this foolish bickering with me I\'ll give you two detentions instead of one.'},
            {'character': 'Rainier', 'pose': 'sneer', 'script': 'The more the merrier.'},
            {'character': 'Sophie', 'pose': 'enraged', 'script': 'Grrr....'},
            {'character': 'me', 'pose': 'a', 'script': 'It\'s fine, Sophie. At least it\'ll be bearable with you.'},
        ],
        'next': 'a13',
    },
    'a13': {
        
    }
};

var scene_tree_m = {
    
};