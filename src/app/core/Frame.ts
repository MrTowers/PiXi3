import { Layer } from "./Layer.js";
import { Project } from "./Project.js";

export class Frame {
    layers: Layer[];

    constructor (project: Project) {
        this.layers = [new Layer(project)];
    }
}