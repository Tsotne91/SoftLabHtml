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

    get y() {
        return this.#y;
    }

    distance(point2) {
        return Math.sqrt((point2.x - this.x) ** 2 + (point2.y - this.y) ** 2);
    }

    toString() {
        return `Point(${this.#x}, ${this.#y})`;
    }
}


