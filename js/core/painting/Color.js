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
    mul(c) {
        return new Color(this.r * c.r, this.g * c.g, this.b * c.b, this.a);
    }
    mulByNumber(v) {
        if (isNaN(v) || !isFinite(v)) {
            return this.clone();
        }
        return new Color(this.r * v, this.g * v, this.b * v, this.a);
    }
    getRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    clone() {
        return new Color(this.r, this.g, this.b, this.a);
    }
}
