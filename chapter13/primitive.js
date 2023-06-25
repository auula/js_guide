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
obj[Symbol.toPrimitive] = function (hint) {
    if (hint === "string") {
        return this.value.valueOf();
    } else if (hint === "number") {
        return this.value.valueOf();
    } else {
        // default
        return this.value.valueOf();
    }
}

console.log(obj);
// 200
console.log(obj + obj);
// 200
console.log(Number(obj) + obj);
// 100100
console.log(Number(obj) + String(obj));