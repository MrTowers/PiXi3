import { VERSION } from "../main.js";
import { Frame } from "./Frame.js";

export class Project {
    frames: Frame[];
    version: string;
    width: number;
    heigth: number;

    constructor () {
        this.version = VERSION;
        this.width = 16;
        this.heigth = 16;
        this.frames = [
            new Frame(this)
        ];
    }
}