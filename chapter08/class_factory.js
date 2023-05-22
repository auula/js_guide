// js 中的对象工程函数，
// 上一个例子使用的 range 函数创建，
// 只能通过 range 函数调用创建对象实例。

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
    toString: () => "(" + this.from + "..." + this.to + ")",
}


// js 中如果一个函数默认是以大写字母开头，
// 运行时则会认为是构造函数，会主动初始化 this 关键字，
// 不像之前的版本要使用 Object.create() 函数来创建，
// 此种构造函数必须 new 关键字来创建。
let r = new Range(1,10);

// true 
console.log(r.includes(2));

// (1...10)
console.log(r.toString());

// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
// ]
console.log([...r]);