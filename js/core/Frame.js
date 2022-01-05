import { Layer } from "./Layer.js";
export class Frame {
    constructor(project) {
        this.layers = [new Layer(project)];
    }
}
