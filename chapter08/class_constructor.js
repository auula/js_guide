// js 在新的 es6 标准中添加了 class 关键字和类创建语法糖

// 使用 class 关键字的方式创建对象

class Range {
    // constructor 关键字创建构造函数
    constructor (from,to) {
        this.from = from;
        this.to = to;
    };

    includes(x) {return this.from <= x && x <= this.to};
    
    // 这样写是为支持 [...] 扩张结构语法糖
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to;x++) {
            yield x;
        }
    };

    *entries() {
        for (let x = Math.ceil(this.from); x <= this.to;x++) {
            yield x;
        }
    };

    toString() {
        let str = "[";
        for (let i = this.from; i <= this.to; i++) {
            str += i;
            if (i != this.to)  str += ",";
        }
        str += "]";
        return str;
    };
}

//  自定义一个迭代器方法名字
// Range.prototype[Symbol.iterator] = function* entries() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) {
//         yield x;
//     }
// };

let rg = new Range(10,20);

console.log(rg.includes(11));

console.log(rg.toString());

console.log([...rg]);

for (const v of rg.entries()){
    console.log(v);
}

// true
// [10,11,12,13,14,15,16,17,18,19,20]
// [
//   10, 11, 12, 13, 14,
//   15, 16, 17, 18, 19,
//   20
// ]