// js 中如果对象的的 prototype 属性重新设置一个新对象，
// 那么如果没有显示重新指定 constructor 属性，


function Range(from, to) {
    this.from = from;
    this.to = to;
}

// 所有 Rnage 对象都继承这个对象
Range.prototype = {
    // 检查是否包含某个元素
    includes: function (x) { return this.from <= x && x <= this.to; },

    // 只适用数值范围
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // 返回范围的字符串表示，箭头函数中的 this 是在定义函数时确定的，
    // 它捕获了所在上下文的 this 值，并将其绑定到函数内部，无法通过 call()、apply() 或 bind() 来改变。
    // toString: () => "(" + this.from + "..." + this.to + ")",

    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    },

    // 自引用属性构造函数
    // constructor: Range 是在 Range.prototype 对象中定义的属性。
    // 它指定了 Range 构造函数作为对象的构造函数。这意味着通过使用 new Range() 创建的对象，
    // 其 constructor 属性将指向 Range 构造函数本身。
    // 这样做的目的是为了确保对象的正确类型信息。
    // 当使用 instanceof 操作符检查对象类型时，它会通过检查对象的 constructor 属性来确定对象是否是由特定构造函数创建的。
    constructor: Range,
}


let r = new Range(1, 10);

console.log(r instanceof Range);

let v = Object.create(r);

v.x = 100, v.y = 200;

v["sum"] = function () {
    console.log(this.x + this.y);
}

v.sum();


for (const v of r) {
    console.log(v);
}