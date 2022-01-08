import { BOTTOMBAR } from "../../main.js";

export class StateAnim {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(div: HTMLDivElement) {
        this.canvas = document.createElement("canvas");
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

        this.canvas.height = 20;
        this.canvas.width = 20;
        div.appendChild(this.canvas);
    }

    update(v: number) {
        this.ctx.clearRect(0, 0, 20, 20);
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.fillStyle = "white";
        this.ctx.lineWidth = 1;
        if (v < 1) {
            this.ctx.arc(10, 10, 5, 0, v * 2 * Math.PI);
            this.ctx.stroke();
        }
        else {
            this.ctx.arc(10, 10, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}