import { VERSION } from "../main.js";
import { Frame } from "./Frame.js";

type _projectType = "pixel" | "3d";

export class Project {
    frames: Frame[];
    version: string;
    width: number;
    heigth: number;
    projectType: _projectType;

    constructor () {
        this.version = VERSION;
        this.width = 16;
        this.heigth = 16;
        this.frames = [
            new Frame(this)
        ];
        this.projectType = "pixel";
    }
}