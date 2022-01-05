import { Vector2 } from "../core/Math/Vector2.js";
import { Icon } from "./Icon.js";
export class Icons {
    static getIcon(icon) {
        const icons = {
            pen: new Icon("./src/icons/002-pen.png", new Vector2(-15, 15))
        };
        switch (icon) {
            case "pen": {
                return icons.pen;
            }
        }
    }
}
