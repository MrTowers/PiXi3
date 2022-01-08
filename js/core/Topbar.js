import { Project } from "./Project.js";
export class Topbar {
    constructor() {
        this.div = document.getElementById("topbar");
    }
    struct() {
        //saveButton
        let saveProjectButton = document.createElement("button");
        saveProjectButton.innerText = "SAVE PROJECT";
        saveProjectButton.onclick = () => {
            Project.save();
        };
        this.div.appendChild(saveProjectButton);
    }
}
