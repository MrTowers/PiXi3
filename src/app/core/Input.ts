import { INPUT } from "../main.js";
import { Vector2 } from "./Math/Vector2.js"

type _button = "left" | "right";

export class Input {
    mousePosition: Vector2 = new Vector2();
    leftMouseButton: boolean;
    rightMouseButton: boolean;
    constructor (canvas: HTMLCanvasElement) {
        this.leftMouseButton = false;
        this.rightMouseButton = false;

        canvas.addEventListener("mousemove", (e) => {
            this.mousePosition = new Vector2(e.offsetX, e.offsetY);
        });

        canvas.addEventListener("mousedown", (e) => {
            switch (e.button) {
                case 0: {
                    this.leftMouseButton = true;
                    break;
                }
                case 1: {
                    this.rightMouseButton = true;
                    break;
                }
            }
        });

        canvas.addEventListener("mouseup", (e) => {
            switch (e.button) {
                case 0: {
                    this.leftMouseButton = false;
                }
                case 1: {
                    this.rightMouseButton = false;
                }
            }
        });
    }

    static getMousePosition () : Vector2 {
        return INPUT.mousePosition.clone();
    }

    static getMouseButton (button: _button) : boolean {
        switch(button) {
            case "left": {
                return INPUT.leftMouseButton;
            }
            case "right": {
                return INPUT.rightMouseButton;
            }
        }
    }
}