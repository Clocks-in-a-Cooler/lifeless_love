/**
 * @param {String[]} tokens
 */
function create_character(tokens) {
    var characters        = {};
    var index             = 0;

    while (index < tokens.length) {
        if (tokens[index] == "character") {
            // start creating the character
            var name              = tokens[index + 1];
            var current_character = {};

            index += 2;

            while (tokens[index] != "end" && index < tokens.length) {
                var expression = tokens[index];
                var sprite     = tokens[index + 1];

                current_character[expression] = "characters/" + sprite;

                index += 2;
            }
            index += 1;

            characters[name] = current_character;
        }
    }

    return characters;
}

module.exports = create_character;