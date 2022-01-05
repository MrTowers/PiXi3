import { PIXIEMath } from "./PIXIEMath.js";

export class Vector2 {
    x: number;
    y: number;
    constructor (x = 0, y = 0) {
        if (isNaN(x) || !isFinite(x)) {
            this.x = 0;
        }
        else {
            this.x = x;
        }

        if (isNaN(y) || !isFinite(y)) {
            this.y = 0;
        }
        else {
            this.y = y;
        }
    }

    add (v: Vector2) : Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    sub (v: Vector2): Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    div (v: Vector2) : Vector2 {
        return new Vector2(this.x / v.x, this.y / v.y);
    }

    mul (v: Vector2) : Vector2 {
        return new Vector2(this.x * v.x, this.y * v.y);
    }

    clone () : Vector2 {
        return new Vector2(this.x, this.y);
    }

    static between (input: Vector2, min: Vector2, max: Vector2) : boolean {
        if (PIXIEMath.between(input.x, min.x, max.x)) {
            if (PIXIEMath.between(input.y, min.y, max.y)) {
                return true;
            }
        }

        return false;
    }
}