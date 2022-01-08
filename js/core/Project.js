import { cProject, VERSION } from "../main.js";
import { Frame } from "./Frame.js";
export class Project {
    constructor(name = "untitled") {
        this.version = VERSION;
        this.width = 16;
        this.heigth = 16;
        this.frames = [
            new Frame(this)
        ];
        this.projectType = "pixel";
        this.name = name;
    }
    static save() {
        let prString = JSON.stringify(cProject);
        let a = document.createElement("a");
        a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(prString));
        a.setAttribute("download", `${cProject.name}.px3p`);
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    static load() {
    }
}
