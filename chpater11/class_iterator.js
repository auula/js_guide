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
        // 匿名对象有一个 next 方法表示可以迭代
        return {
            // 闭包导出
            next() {
                // 闭包导出，返回一个可迭代对象必须有 value/done 属性
                return (next <= last)
                    // 返回正则迭代的元素
                    ? { value: next++ }
                    // 已经迭代完成
                    : { done: true };
            },
        }
    }
};


for (const x of new Range(1, 10)) {
    console.log(x);
}