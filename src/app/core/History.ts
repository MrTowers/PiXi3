import { cProject, setProject } from "../main.js";
import { Project } from "./Project.js";

export class History {
    static saves: Project[] = [];

    static pushNew () {
        //this.saves.push(cProject.clone());
    }

    static popLast () {
        if (this.saves.length > 0) {
            setProject(this.saves.pop()!);
        }
        console.log(this.saves);
    }
}