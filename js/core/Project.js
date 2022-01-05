import { VERSION } from "../main.js";
import { Frame } from "./Frame.js";
export class Project {
    constructor() {
        this.version = VERSION;
        this.width = 16;
        this.heigth = 16;
        this.frames = [
            new Frame(this)
        ];
        this.projectType = "pixel";
    }
}
