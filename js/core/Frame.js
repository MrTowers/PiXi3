import { Layer } from "./Layer.js";
export class Frame {
    constructor(project) {
        this.project = project;
        this.layers = [new Layer(project)];
    }
    clone() {
        let f = new Frame(this.project);
        for (let i in this.layers) {
            f.layers.push(this.layers[i].clone());
        }
        return f;
    }
}
