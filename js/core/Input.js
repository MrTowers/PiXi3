import { INPUT } from "../main.js";
import { KeyEvent } from "./KeyEvent.js";
import { Vector2 } from "./Math/Vector2.js";
export class Input {
    constructor(canvas) {
        this.mousePosition = new Vector2();
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
    static getMousePosition() {
        return INPUT.mousePosition.clone();
    }
    static getMouseButton(button) {
        switch (button) {
            case "left": {
                return INPUT.leftMouseButton;
            }
            case "right": {
                return INPUT.rightMouseButton;
            }
        }
    }
    static addKeyEvent(key = "", event = () => { }) {
        Input.keyEvents.push(new KeyEvent(key, event));
    }
    static getKey(key = "") {
        return Input.keys[key];
    }
    static dispacheEvenets() {
        for (let i in Input.keyEvents) {
            if (Input.keys[Input.keyEvents[i].key]) {
                Input.keyEvents[i].event();
            }
        }
    }
}
Input.keys = {};
Input.keyEvents = [];
