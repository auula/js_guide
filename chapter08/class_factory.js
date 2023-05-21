// js 中的对象工程函数，
// 上一个例子使用的 range 函数创建，
// 只能通过 rnage 函数调用创建对象实例。

function Range(from,to) {
    this.from = from;
    this.to = to;
}

// 所有 Rnage 对象都继承这个对象
Range.prototype = {
    // 检查是否包含某个元素
    includes: function(x) { return this.from <= x && x <= this.to; },

    // 只适用数值范围
    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // 返回范围的字符串表示
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
}

let r = new Range(1,10);

console.log(r.includes(2));

console.log(r.toString());

console.log([...r]);