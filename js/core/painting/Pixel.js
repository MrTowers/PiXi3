import { cFrame, cLayer, cProject, FIRST_COLOR } from "../../main.js";
import { Vector2 } from "../Math/Vector2.js";
import { Color } from "./Color.js";
export class Pixel {
    constructor(position, size) {
        this.color = new Color(255, 0, 0, 1);
        this.position = position;
        this.size = size;
    }
    update() {
    }
    render(ctx, canvas) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color.getRGBA();
        ctx.strokeStyle = this.color.getRGBA();
        ctx.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    static draw(position) {
        for (let i in cProject.frames[cFrame].layers[cLayer].pixels) {
            let pixel = cProject.frames[cFrame].layers[cLayer].pixels[i];
            if (Vector2.between(position, pixel.position, pixel.position.add(pixel.size))) {
                pixel.color = FIRST_COLOR.clone();
            }
        }
    }
}
