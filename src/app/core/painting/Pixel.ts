import { cFrame, cLayer, cProject, FIRST_COLOR } from "../../main.js";
import { ITickable } from "../Interfaces/Tickable.js";
import { Vector2 } from "../Math/Vector2.js";
import { Color } from "./Color.js";

export class Pixel implements ITickable {
    color: Color;
    position: Vector2;
    size: Vector2;
    constructor(position: Vector2, size: Vector2) {
        this.color = new Color(0, 0, 0, 0);
        this.position = position;
        this.size = size;
    }

    update(): void {

    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        if (this.color.a > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.color.getRGBA();
            ctx.strokeStyle = this.color.getRGBA();
            ctx.rect(this.position.x, this.position.y, this.size.x, this.size.y);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    }

    static draw(position: Vector2) {
        for (let i in cProject.frames[cFrame].layers[cLayer].pixels) {
            let pixel = cProject.frames[cFrame].layers[cLayer].pixels[i];

            if (Vector2.between(position, pixel.position, pixel.position.add(pixel.size))) {
                pixel.color = FIRST_COLOR.clone();
            }
        }
    }
}