import { Input } from "./core/Input.js";
import { Color } from "./core/painting/Color.js";
import { Project } from "./core/Project.js";
import { Cursor } from "./visual/Cursor.js";

export const VERSION = "0.1";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

export const CANVAS : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = CANVAS.getContext("2d")!;
export const INPUT = new Input(CANVAS);
const CURSOR = new Cursor();
export let cProject = new Project();
export let cFrame = 0;
export let cLayer = 0;

export let FIRST_COLOR = new Color(0, 255, 0, 1);


function tick () {
    update();
    render();
    requestAnimationFrame(tick);
}

function update () {
    CURSOR.update();
}

function render () {
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for(let i in cProject.frames[cFrame].layers) {
        let layer = cProject.frames[cFrame].layers[i];
    
        for (let j in layer.pixels) {
            let pixel = layer.pixels[j];

            pixel.render(ctx, CANVAS);
        }
    }
    
    CURSOR.render(ctx, CANVAS);
}

tick();