// js 中的自定义对象的迭代器使用，手动创建迭代器

class Range {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }


    // 必须严格按照这个来编写 Symbol.iterator
    // 必须返回一个对象，对象拥有 next 方法
    // next 方法返回一个可迭代对象，必须有 value/done 属性
    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        // 匿名对象有一个 next 方法表示可以迭代
        return {
            // 闭包导出
            next() {
                // 闭包导出，返回一个可迭代对象必须有 value/done 属性
                return (next <= last)
                    // 返回正在迭代的元素
                    ? { value: next++ }
                    // 已经迭代完成
                    : { done: true };
            },
        }
    }
};

let obj = new Range(1, 10)

for (const x of obj) {
    console.log(x);
}

// 是否包含某个元素
console.log(obj.has(10));

// 通过手动调用方法的形式实现对象迭代
let iterator = obj[Symbol.iterator]();

// 类似于 for 普通语句，
// result = iterator.next() 确定第一个元素
// !result.done 判断是否完成
// 没有完成就继续取得下一个元素 result = iterator.next()
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}