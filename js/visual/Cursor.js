import { Input } from "../core/Input.js";
import { Pixel } from "../core/painting/Pixel.js";
import { Icons } from "./Icons.js";
const cursorSize = 30;
export class Cursor {
    constructor() {
        this.icon = Icons.getIcon("pen");
    }
    setIcon(icon) {
        this.icon = Icons.getIcon(icon);
    }
    update() {
        if (Input.getMouseButton("left")) {
            Pixel.draw(Input.getMousePosition());
        }
    }
    render(ctx, canvas) {
        ctx.save();
        const mousePos = Input.getMousePosition();
        let pixelUnder = Pixel.getAt(mousePos);
        let l = pixelUnder.color.a + pixelUnder.color.g + pixelUnder.color.b;
        if (pixelUnder.color.a) {
            if (l < (255 + 255 + 255) / 4) {
                ctx.filter = "invert()";
                console.log("inverted");
            }
        }
        ctx.drawImage(this.icon.image, mousePos.x - (cursorSize / 2) - this.icon.offset.x, mousePos.y - (cursorSize / 2) - this.icon.offset.y, cursorSize, cursorSize);
        ctx.restore();
    }
}
