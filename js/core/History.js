import { setProject } from "../main.js";
export class History {
    static pushNew() {
        //this.saves.push(cProject.clone());
    }
    static popLast() {
        if (this.saves.length > 0) {
            setProject(this.saves.pop());
        }
        console.log(this.saves);
    }
}
History.saves = [];
