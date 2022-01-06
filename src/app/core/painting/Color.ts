import { ColorPicker } from "../color picker/ColorPicker.js";

type _color =
"black"|
"white"|
"blue"

export class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor (r = 0, g = 0, b = 0, a = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    static create (color: _color) : Color {
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

    mul (c: Color) : Color {
        return new Color(this.r * c.r, this.g * c.g, this.b * c.b, this.a);
    }

    mulByNumber (v: number) : Color {
        if (isNaN(v) || !isFinite(v)) {
            return this.clone();
        }
        return new Color(this.r * v, this.g * v, this.b * v, this.a);
    }

    static fromHue (h: number) : Color {
        h = h % 360;
        const c = Math.floor(h / 60);
        const x = h / 60 - c;
        const m = 255 * (1 - Math.abs(x - 0.5) * 2);
        let r = 0;
        let g = 0;
        let b = 0;
        switch (c) {
            case 0: {
                r = 255;
                g = m;
                b = 0;
                break;
            }
            case 1: {
                r = m;
                g = 255;
                b = 0;
                break;
            }
            case 2: {
                r = 0;
                g = 255;
                b = m;
                break;
            }
            case 3: {
                r = 0;
                g = m;
                b = 255;
                break;
            }
            case 4: {
                r = m;
                g = 0;
                b = 255;
                break;
            }
            case 5: {
                r = 255;
                g = 0;
                b = m;
                break;
            }

            default: {
                r = 0;
                g = 0;
                b = 0;
                break;
            }
        }
        return new Color(r, g, b, 1);

    }

    getRGBA () : string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    clone () : Color {
        return new Color(this.r, this.g, this.b, this.a);
    }
}