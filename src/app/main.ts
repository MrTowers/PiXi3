import { Bottombar } from "./core/bottombar/Bottombar.js";
import { ColorPicker } from "./core/color picker/ColorPicker.js";
import { History } from "./core/History.js";
import { Input } from "./core/Input.js";
import { Color } from "./core/painting/Color.js";
import { Project } from "./core/Project.js";
import { Topbar } from "./core/Topbar.js";
import { Cursor } from "./visual/Cursor.js";

type _color = "first" | "second";

//global settings
export let GRID = true;

export const VERSION = "0.1";

//blokowanie wielu rzeczy
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

export const CANVAS : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = CANVAS.getContext("2d")!;
export const INPUT = new Input(CANVAS);
const CURSOR = new Cursor();
export let cProject = new Project();
export let cFrame = 0;
export let cLayer = 0;

export const COLOR_PICKER = new ColorPicker();
export const TOPBAR = new Topbar();
export const BOTTOMBAR = new Bottombar();
export const HISTORY = new History();
TOPBAR.struct();
BOTTOMBAR.struct();

export let FIRST_COLOR = new Color(0, 255, 0, 1);

CANVAS.addEventListener("mousemove", (e) => {
    tick();
});

CANVAS.addEventListener("mousedown", (e) => {
    tick();
});

export function setColor (whatVar: _color, value: Color) {
    switch (whatVar) {
        case "first": {
            FIRST_COLOR = value.clone();
            break;
        }

        case "second": {
            break;
        }
    }
}


function tick () {
    update();
    render();
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

export function setProject (project: Project) {
    cProject = project;
}

let x = 0;

setInterval(() => {
    BOTTOMBAR.stateAnim.update(x);
    x += 0.01;
}, 16);