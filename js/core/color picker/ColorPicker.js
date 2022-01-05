export class ColorPicker {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.div = document.getElementById("colorPicker");
        this.div.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }
    render() {
    }
    update() {
    }
    refreshColor() {
    }
}
