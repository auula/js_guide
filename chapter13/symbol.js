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