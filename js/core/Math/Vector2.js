import { PIXIEMath } from "./PIXIEMath.js";
export class Vector2 {
    constructor(x = 0, y = 0) {
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
    add(v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    sub(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }
    div(v) {
        return new Vector2(this.x / v.x, this.y / v.y);
    }
    mul(v) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    static between(input, min, max) {
        if (PIXIEMath.between(input.x, min.x, max.x)) {
            if (PIXIEMath.between(input.y, min.y, max.y)) {
                return true;
            }
        }
        return false;
    }
}
