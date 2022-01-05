export class ColorPicker {
    canvas: HTMLCanvasElement;
    div: HTMLDivElement;
    ctx: CanvasRenderingContext2D;
    constructor () {
        this.canvas = document.createElement("canvas");
        this.div = <HTMLDivElement>document.getElementById("colorPicker");

        this.div.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d")!;
    }

    render () {

    }

    update () {

    }
    refreshColor () {
        
    }
}