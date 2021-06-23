var fs = require("fs");

var token_pattern = /[^\s\"]+|(\".+?[^\\]\")/g;
var quote_pattern = /\\\"/g;

/**
 * @param {String} file the to read
 * this function is synchronous
 */
function tokenize(file) {
    /**
     * @type {String[]}
     */
    var tokens = [];
    var lines  = fs.readFileSync(__dirname + "/" + file, "utf-8").split(/\n\r?/g).filter(Boolean);

    lines.forEach(line => {
        var matches = line.match(token_pattern);

        if (matches == null) return; // ugh

        // matches is of type RegExpMatchArray, which does not have forEach()
        for (var c = 0; c < matches.length; c++) {
            var match = matches[c];
            if (match.charAt(0) == "#") return;
            if (match.charAt(0) == "\"") {
                tokens.push(match.slice(1, -1).replace(quote_pattern, "\""));
            } else {
                tokens.push(match);
            }
        }
    });

    return tokens;
}

module.exports = tokenize;