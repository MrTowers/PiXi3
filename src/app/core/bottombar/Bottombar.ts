import { StateAnim } from "./StateAnim.js";

export class Bottombar {
    div: HTMLDivElement;
    stateAnim!: StateAnim;

    constructor () {
        this.div = <HTMLDivElement>document.getElementById("bottombar");
    }

    struct () {
        this.stateAnim = new StateAnim(this.div);
    }
}