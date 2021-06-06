/**
 * 
 * @param {String} path 
 */
 function create_sprite(path) {
    var elt = document.createElement("img");
    elt.src = path;
    return elt;
}

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
 * 
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
function draw_scaled_image(image, context) {
    var max_width    = context.canvas.width;
    var max_height   = context.canvas.height;
    var image_width  = image.naturalWidth;
    var image_height = image.naturalHeight;

    // calculate the aspect ratio
    var image_aspect_ratio  = image_width / image_height;

    var draw_width  = max_height * image_aspect_ratio;
    var draw_height = max_height;

    context.drawImage(image, 0, 0, image_width, image_height, 0, 0, draw_width, draw_height);
}