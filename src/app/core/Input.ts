import { INPUT } from "../main.js";
import { KeyEvent } from "./KeyEvent.js";
import { Vector2 } from "./Math/Vector2.js"

type _button = "left" | "right";

export class Input {
    mousePosition: Vector2 = new Vector2();
    leftMouseButton: boolean;
    rightMouseButton: boolean;
    static keys: any = {};
    static keyEvents: KeyEvent[] = [];
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

        document.addEventListener("keydown", (e) => {
            Input.keys[e.key] = true;
            Input.dispacheEvenets();
        });

        document.addEventListener("keyup", (e) => {
            Input.keys[e.key] = false;
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

    static addKeyEvent (key = "", event = () => {}) {
        Input.keyEvents.push(new KeyEvent(key, event));
    }

    static getKey (key = "") : boolean {
        return Input.keys[key];
    }

    private static dispacheEvenets () {
        for (let i in Input.keyEvents) {
            if (Input.keys[Input.keyEvents[i].key]) {
                Input.keyEvents[i].event();
            }
        }
    }
}