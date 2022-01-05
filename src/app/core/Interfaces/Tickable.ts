export interface ITickable {
    update () : void;
    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) : void;
}