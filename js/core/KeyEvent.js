export class KeyEvent {
    constructor(key = "", event = () => { }) {
        this.key = key;
        this.event = event;
    }
}
