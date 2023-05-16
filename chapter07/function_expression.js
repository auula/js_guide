// js 中的函数表达式，js 中函数变量

// 把函数赋值给一个变量
const square = function(x) {x * x};

// 用自定义名称的函数变量
const f = function fact(x) { if (x <= 1) return 1; else return x * fact(x - 1)};
console.log(f(10));

// 函数也可以作为参数传入另外一个函数中使用
let s = [3,2,1].sort(function(a,b){return a - b});
console.log(s);

// 立即调用一个函数表达式
let t = function(x){return x * x}(10);
console.log(t);

// lambda 表达式方式实现函数
let sum = (x,y) => {return x + y};
console.log(sum(10,10));