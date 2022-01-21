import { Layer } from "./Layer.js";
import { Project } from "./Project.js";

export class Frame {
    layers: Layer[];
    project: Project;

    constructor (project: Project) {
        this.project = project;
        this.layers = [new Layer(project)];
    }

    clone () {
        let f = new Frame(this.project);

        for (let i in this.layers) {
            f.layers.push(this.layers[i].clone());
        }

        return f;
    }
}