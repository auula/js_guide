// js 中的自定义对象的迭代器使用

class Range {

    constructor(from,to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
    }

}