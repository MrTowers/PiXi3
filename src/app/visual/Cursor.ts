import { Input } from "../core/Input.js";
import { ITickable } from "../core/Interfaces/Tickable.js";
import { Vector2 } from "../core/Math/Vector2.js";
import { Pixel } from "../core/painting/Pixel.js";
import { CANVAS } from "../main.js";
import { Icon } from "./Icon.js";
import { Icons, _icon } from "./Icons.js";

const cursorSize = 30;

export class Cursor implements ITickable {
    icon: Icon;

    constructor () {
        this.icon = Icons.getIcon("pen");
    }

    setIcon (icon: _icon) {
        this.icon = Icons.getIcon(icon);
    }

    update(): void {
        if (Input.getMouseButton("left")) {
            Pixel.draw(Input.getMousePosition());
        }
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        const mousePos = Input.getMousePosition();
        ctx.drawImage(this.icon.image, mousePos.x - (cursorSize / 2) - this.icon.offset.x, mousePos.y - (cursorSize / 2) - this.icon.offset.y, cursorSize, cursorSize);
    }
}