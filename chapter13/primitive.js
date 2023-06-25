// js 中的 primitive 公认符号

let obj = {
    value: 100,
    // 自定义实现一个 toString 方法
    toString: function () {
        return `${this.value}`;
    }
};

// 100100
console.log(obj + obj);

// 将默认上下文规则修改为 number，参数可以为 number string default
obj[Symbol.toPrimitive] = "number";

console.log(obj + obj);