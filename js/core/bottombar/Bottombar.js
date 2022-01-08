import { StateAnim } from "./StateAnim.js";
export class Bottombar {
    constructor() {
        this.div = document.getElementById("bottombar");
    }
    struct() {
        this.stateAnim = new StateAnim(this.div);
    }
}
