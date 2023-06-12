// js 中的自定义对象的迭代器使用

class Range {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            // 闭包导出
            next() {
                // 闭包导出
                return (next <= last)
                    ? { value: next++ }
                    : { done: true };
            },
        }
    }
};


for (const x of new Range(1, 10)) {
    console.log(x);
}