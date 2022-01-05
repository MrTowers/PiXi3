import { CANVAS } from "../../main.js";
import { Vector2 } from "../Math/Vector2.js";
import { Color } from "../painting/Color.js";
import { Pixel } from "../painting/Pixel.js";

let pointerSize = 10;

export class ColorPicker {
    canvas: HTMLCanvasElement;
    div: HTMLDivElement;
    ctx: CanvasRenderingContext2D;
    hue: number;
    pointer: Vector2;
    pointerColor: Color;
    private mouseDown: boolean = false;
    pixels: Pixel[] = [];

    constructor () {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 130;
        this.canvas.height = 130;
        this.canvas.addEventListener("mouseup", (e) => {
            this.mouseDown = false;
        })
        this.canvas.addEventListener("mousedown", (e) => {
            if (e.button == 0) {
                this.mouseDown = true;
                this.setPointer(new Vector2(e.offsetX, e.offsetY));
                this.render();
            }
        });
        this.canvas.addEventListener("mousemove", (e) => {
            if (this.mouseDown) {
                this.setPointer(new Vector2(e.offsetX, e.offsetY));
                this.render();
            }
        });
        this.div = <HTMLDivElement>document.getElementById("colorPickerCanvas");

        this.div.append(this.canvas);

        this.ctx = this.canvas.getContext("2d")!;
        this.hue = 0;
        this.pointer = new Vector2(20, 20);

        let xColors = 6;
        let yColors = 10;

        for (let x = 0; x < xColors; x++) {
            for (let y = 0; y < yColors; y++) {
                let p = new Pixel(new Vector2((this.canvas.width / xColors) * x, (this.canvas.height / yColors) * y), new Vector2(this.canvas.width / xColors, this.canvas.height / yColors));
                switch(x) {
                    case 0: {
                        p.color = new Color(255, 0, 0, 1);
                        break;
                    }
                    
                    case 1: {
                        p.color = new Color(255, 255, 0, 1);
                        break;
                    }

                    case 2: {
                        p.color = new Color(0, 255, 0, 1);
                        break;
                    }

                    case 3: {
                        p.color = new Color(0, 255, 255, 1);
                        break;
                    }

                    case 4: {
                        p.color = new Color(0, 0, 255, 1);
                        break;
                    }

                    case 5: {
                        p.color = new Color(255, 0, 255, 1);
                        break;
                    }
                }

                p.color = p.color.mulByNumber(1 / (yColors / y));
                this.pixels.push(p);
            }
        }

        

        this.pointerColor = new Color();

        this.render();
    }

    render () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderPixels();
        this.renderPointer();
    }

    renderPointer () {
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.pointer.x - (pointerSize / 2), this.pointer.y - (pointerSize / 2), pointerSize, pointerSize);
        this.ctx.restore();
    }

    renderPixels () {
        for (let i in this.pixels) {
            this.pixels[i].render(this.ctx, this.canvas);
        }
    }

    update () {

    }

    refreshColor () {
        
    }

    setPointer (position: Vector2) {
        this.pointer = position;
    }

    setPointerColor() {

    }
}