/**
 * @type {HTMLCanvasElement}
 */
var main_canvas   = document.getElementById("main_canvas");
main_canvas.width = 800; main_canvas.height = 600;
var main_context  = main_canvas.getContext("2d");

/**
 * @param {String} path 
 */
 function create_sprite(path) {
    var elt = document.createElement("img");
    elt.src = __dirname + "/" + path;
    return elt;
}

var splash = create_sprite("images/splash.png");

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @param {Number} height 
 * @param {Number} radius 
 */
function stroke_rounded_rect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.arc(x + radius, y + height - radius, radius, Math.PI, Math.PI / 2, true);
    context.lineTo(x + width - radius, y + height);
    context.arc(x + width - radius, y + height - radius, radius, Math.PI / 2, 0, true);
    context.lineTo(x + width, y + radius);
    context.arc(x + width - radius, y + radius, radius, Math.PI * 2, Math.PI * 3 / 2, true);
    context.lineTo(x + radius, y);
    context.arc(x + radius, y + radius, radius, Math.PI * 3 / 2, Math.PI, true);
    context.closePath();
    context.stroke();
}

/**
 * why isn't this standard?
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @param {Number} height 
 * @param {Number} radius 
 */
 function fill_rounded_rect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.arc(x + radius, y + height - radius, radius, Math.PI, Math.PI / 2, true);
    context.lineTo(x + width - radius, y + height);
    context.arc(x + width - radius, y + height - radius, radius, Math.PI / 2, 0, true);
    context.lineTo(x + width, y + radius);
    context.arc(x + width - radius, y + radius, radius, Math.PI * 2, Math.PI * 3 / 2, true);
    context.lineTo(x + radius, y);
    context.arc(x + radius, y + radius, radius, Math.PI * 3 / 2, Math.PI, true);
    context.closePath();
    context.fill();
}
/**
 * draws an image that is scaled so that it fits inside the window
 * @param {HTMLImageElement} image 
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} x 
 * @param {Number} y 
 */
function draw_height_scaled_image(image, context) {
    var max_height   = context.canvas.height;
    var image_width  = image.naturalWidth;
    var image_height = image.naturalHeight;

    // calculate the aspect ratio
    var image_aspect_ratio = image_width / image_height;

    var draw_width  = max_height * image_aspect_ratio;
    var draw_height = max_height;

    context.drawImage(image, 0, 0, image_width, image_height, 0, 0, draw_width, draw_height);
}

function draw_width_scaled_image(image, context) {
    var max_width    = context.canvas.width;
    var image_width  = image.naturalWidth;
    var image_height = image.naturalHeight;

    var image_aspect_ratio = image_width / image_height;

    var draw_width  = max_width;
    var draw_height = max_width / image_aspect_ratio;

    context.drawImage(image, 0, 0, image_width, image_height, 0, 0, draw_width, draw_height);
}

function draw() {
    main_context.clearRect(0, 0, 800, 600);
    // fill this in later
    switch (game_state) {
        case GAME_STATES.LOADING:
            main_context.fillStyle = "deeppink";
            main_context.textAlign = "center";
            main_context.font      = "30px sans-serif"
            if (!characters || !scenes) {
                main_context.fillText("loading", 400, 300);
            } else {
                main_context.fillText("done!", 400, 300);
            }
            break;
        case GAME_STATES.MAIN_MENU:
            main_context.fillStyle = "white";
            main_context.fillRect(0, 0, 800, 600);
            draw_width_scaled_image(splash, main_context);
            break;
        case SCENE:
            ;
            break;
        case CREDITS:
            ;
            break;
    }

    buttons.forEach(button => {
        button.draw(main_context);
    });

    // post-drawing stuff
}