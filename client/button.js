const TOP    = 1;
const BOTTOM = 2;
const LEFT   = 4;
const RIGHT  = 8;

class Button {
    /**
     * 
     * @param {Vector} position 
     * @param {String} label 
     * @param {Function} action 
     * @param {Object} colours
     * @param {String?} colours.outline_colour
     * @param {String?} colours.fill_colour
     * @param {String?} colours.hover_outline_colour
     * @param {String?} colours.hover_fill_colour
     */
    constructor(position, label, action, colours = {}) {
        this.position = position;
        this.label    = label;
        this.action   = action;

        main_context.font = "20px sans-serif";
        var text_width    = main_context.measureText(label).width;
        this.size         = new Vector(text_width + 50, 30);

        this.colours = {
            outline_colour: colours.outline_colour || "white",
            fill_colour: colours.fill_colour || "deeppink",
            hover_outline_colour: colours.hover_outline_colour || "white",
            hover_fill_colour: colours.hover || "hotpink",
        };

        this.hover = false;
    }

    /**
     * 
     * @param {Vector} position 
     */
    center(position) {
        this.position = position.subtract(this.size.multiply(0.5));

        return this;
    }

    /**
     * 
     * @param {Vector} position 
     * @param {Number} alignment
     */
    align(position, alignment) {
        if (alignment & TOP) {
            this.position.y = position.y;
        }
        if (alignment & LEFT) {
            this.position.x = position.x;
        }
        if (alignment & RIGHT) {
            this.position.x = position.x - this.size.x;
        }
        if (alignment & BOTTOM) {
            this.position.y = position.y - this.size.y;
        }
        return this;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        context.strokeStyle = this.hover ? this.colours.hover_outline_colour : this.colours.outline_colour;
        context.fillStyle   = this.hover ? this.colours.hover_fill_colour : this.colours.fill_colour;

        fill_rounded_rect(context, this.position.x, this.position.y, this.size.x, this.size.y, 3);
        stroke_rounded_rect(context, this.position.x, this.position.y, this.size.x, this.size.y, 3);

        context.save();
        context.textAlign = "center";
        context.textBaseline = "middle";

        context.fillStyle = "white";
        context.font      = "16pt sans-serif";
        context.fillText(this.label, this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
        context.restore();
    }

    /**
     * 
     * @param {Vector} mouse_position
     * @returns {boolean}
     */
    collision(mouse_position) {
        if (mouse_position.x < this.position.x) return false;
        if (mouse_position.y < this.position.y) return false;
        if (mouse_position.x > this.position.x + this.size.x) return false;
        if (mouse_position.y > this.position.y + this.size.y) return false;
        return true;
    }
}