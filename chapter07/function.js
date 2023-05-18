// js 中的函数对象和函数属性和函数方法
// 在 js 中函数也是一种特殊的对象，有自有的属性和方法

function fn(y) {
    return this.x + y;
}

let obj = {x:1};

// 会把 fn 绑定到 obj 上，并且返回一个新的函数
let g = fn.bind(obj);

console.log(g(10));

function sum(y) {
    return this.x + y;
}

let result = sum.call(obj,100);

console.log(result);

