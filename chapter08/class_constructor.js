// js 在新的 es6 标准中添加了 class 关键字和类创建语法糖

// 使用 class 关键字的方式创建对象

class Range {
    // constructor 关键字创建构造函数
    constructor (from,to) {
        this.from = from;
        this.to = to;
    };

    includes(x) {return this.from <= x && x <= this.to};
    
    *[Symbol.iterator]() {
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

let rg = new Range(10,20);

console.log(rg.includes(11));

console.log(rg.toString());

console.log([...rg]);


// true
// [10,11,12,13,14,15,16,17,18,19,20]
// [
//   10, 11, 12, 13, 14,
//   15, 16, 17, 18, 19,
//   20
// ]