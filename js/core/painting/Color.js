export class Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    static create(color) {
        switch (color) {
            case "black": {
                return new Color(0, 0, 0, 1);
            }
            case "blue": {
                return new Color(0, 0, 255, 1);
            }
            case "white": {
                return new Color(255, 255, 255, 1);
            }
        }
    }
    getRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    clone() {
        return new Color(this.r, this.g, this.b, this.a);
    }
}
