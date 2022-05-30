import Point from '/home/tsotne/WebstormProjects/SoftLabHtml/js/jsClasses/level1'

class Line extends Point{

    #point1;
    #point2;

    constructor(point1, point2) {
        super();
        this.#point1 = point1;
        this.#point2 = point2;
    }

    get point1() {
        return this.#point1;
    }

    set point1(value) {
        this.#point1 = value;
    }

    get point2() {
        return this.#point2;
    }

    set point2(value) {
        this.#point2 = value;
    }

    length(){
        return this.point1.distance(this.point2);
    }

}
const wer1 = new Point(5, 10);
const wer2 = new Point(7, 14);

const line = new Line(wer1, wer2);
console.log(line.length());
