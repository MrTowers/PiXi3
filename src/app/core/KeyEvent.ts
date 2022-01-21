export class KeyEvent {
    key: string;
    event: VoidFunction;

    constructor (key = "", event = () => {}) {
        this.key = key;
        this.event = event;
    }
}