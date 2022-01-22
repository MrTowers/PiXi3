import { LZString } from "../libs/LZString.js";
import { cProject, VERSION } from "../main.js";
import { Frame } from "./Frame.js";
import { History } from "./History.js";
import { Input } from "./Input.js";
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
        let forSave = LZString.compress(prString);
        let a = document.createElement("a");
        a.setAttribute("href", "data:text/plain;charset=utf-8," + forSave);
        a.setAttribute("download", `${cProject.name}.px3p`);
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    static load() {
    }
}
Input.addKeyEvent("s", () => {
    if (Input.getKey("Control")) {
        Project.save();
    }
});
Input.addKeyEvent("z", () => {
    if (Input.getKey("Control")) {
        History.popLast();
        console.log("ctrl z");
    }
});
