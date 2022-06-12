export default class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }

    distance(point2) {
        return Math.sqrt((point2.x - this.x) + (point2.y - this.y));
    }

    toString() {
        return `Point(${this.#x}, ${this.#y})`;
    }
}


