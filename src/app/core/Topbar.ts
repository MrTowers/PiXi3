import { Project } from "./Project.js";

export class Topbar {
    div: HTMLDivElement;
    constructor () {
        this.div = <HTMLDivElement>document.getElementById("topbar");
    }

    struct () {
        //saveButton
        let saveProjectButton = document.createElement("button");
        saveProjectButton.innerText = "SAVE PROJECT";
        saveProjectButton.onclick = () => {
            Project.save();
        }
        this.div.appendChild(saveProjectButton);
    }
}