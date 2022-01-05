import { Vector2 } from "../core/Math/Vector2.js";
export class Icon {
    constructor(src = "", offset = new Vector2()) {
        this.image = new Image();
        this.image.src = src;
        this.offset = offset;
    }
}
