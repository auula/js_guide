// js 中的对象的使用，早期的版本创建 js 对象方式

// 类的构造函数，在没有 class 关键字版本实现，
// es6 之前的版本兼容只能使用下面这种方式创建
function range(from,to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

// methods 为类添加方法
range.methods = {
    // 检查某个值是否在范围内
    includes(x) {return this.from <= x && x <= this.to;},

    // 是一个特殊的生成器方法，用于定义一个可迭代对象的迭代器，
    // 当一个对象实现了这个方法时，它就成为一个可迭代对象，
    // 并且可以使用 for...of 循环或其他消费可迭代对象的方法进行迭代操作。
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from);x <= this.to;x++) yield x;
    },

    // 返回字符串方法
    toString() {
        let str = "[";
        for (let i = this.from; i <= this.to; i++) {
            str += i;
            if (i != this.to)  str += ",";
        }
        str += "]";
        return str;
    },
}

let r = range(1,10);

// 检查某个元素是否存在
console.log(r.includes(2));

// 返回所有的元素字符串
console.log(r.toString());

// 拆解所有元素
console.log([...r]);

// 通过 for of 进行遍历，对象只要实现了 *[Symbol.iterator]() 方法即可
for (const v of r) {
    console.log(v);
}

// 因为没有此对象构造函数，所以使用此种方式检查原型链
console.log(range.methods.isPrototypeOf(r));

// 因为 range 没有定义构造函数，所以不能直接使用 instanceof 所使用 
console.log(r instanceof range);