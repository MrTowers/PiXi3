import { CANVAS } from "../main.js";
import { Vector2 } from "./Math/Vector2.js";
import { Pixel } from "./painting/Pixel.js";
export class Layer {
    constructor(project) {
        this.pixels = [];
        for (let x = 0; x < project.width; x++) {
            for (let y = 0; y < project.heigth; y++) {
                this.pixels.push(new Pixel(new Vector2((CANVAS.width / project.width) * x, (CANVAS.height / project.heigth) * y), new Vector2(CANVAS.width / project.width, CANVAS.height / project.heigth)));
            }
        }
    }
}
