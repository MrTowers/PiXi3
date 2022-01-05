export class PIXIEMath {
    static between (input = 0, min = 0, max = 0) : boolean {
        return input <= max && input >= min;
    }
}