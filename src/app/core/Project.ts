import { cProject, VERSION } from "../main.js";
import { Frame } from "./Frame.js";
import { History } from "./History.js";
import { Input } from "./Input.js";

type _projectType = "pixel" | "3d";

export class Project {
    frames: Frame[];
    version: string;
    width: number;
    heigth: number;
    projectType: _projectType;
    name: string

    constructor (name = "untitled") {
        this.version = VERSION;
        this.width = 16;
        this.heigth = 16;
        this.frames = [
            new Frame(this)
        ];
        this.projectType = "pixel";
        this.name = name;
    }

    static save () {
        let prString = JSON.stringify(cProject);
        let a = document.createElement("a");
        a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(prString));
        a.setAttribute("download", `${cProject.name}.px3p`);

        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    static load () {
        
    }

    clone () {
        let p = new Project(this.name);
        
        for (let i in this.frames) {
            p.frames.push(this.frames[i].clone());
        }

        p.heigth = this.heigth;
        p.projectType = this.projectType;
        p.version = this.version;
        p.width = this.width;

        return p;
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