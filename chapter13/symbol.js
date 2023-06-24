// js 中的 Symbol 符号类型
// Symbol 工厂函数有一些公认的符号

// 前面的例子中 Symbol.iterator 和 Symbol.asyncIterator 来实现的对象可迭代

// Symbol.hasInstance 新加的公认符号属性，每个对象都可以使用它，作用于 instanceof 表达式右值

let uint8 = {
    [Symbol.hasInstance](x) {
        return this.isUint8(x);
    },

    isUint8: function (x) {
        // uint8 范围
        return Number.isInteger(x) && x >= 0 && x <= 255;
    },
};

console.log(uint8.isUint8(128) === 128 instanceof uint8);


// Symbol.toStringTag 公认符号可以指定对象的类型特征

let types = [[],{},()=>{},"",0,false];


let str = "";

for (const t of types) {
    str += classof(t) + " ";
}

// Array Object Function String Number Boolean 
console.log(str);

class Range {
    // 这样重写 toStringTag 方法
    get [Symbol.toStringTag]() {
        return "Range";
    }
}

let range = new Range();

// Range
console.log(classof(range));

function classof(params) {
    // [object Range]  这样一坨 [object 长度是 8
    return Object.prototype.toString.call(params).slice(8,-1)
}