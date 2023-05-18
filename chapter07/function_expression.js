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

// 函数内部嵌入函数
function fn(a,b) {
    function square(x) {return x * x};
    return Math.sqrt(square(a) + square(b));
}

console.log(fn(10,10));

function vectorAdd(v1,v2) {
    return [v1[0] + v2[0],v1[1] + v2[1]];
}

vectorAdd([1,2],[3,4]);

// 在 js 中没有类型系统，函数参数没有类型限制
function sum_v2(arr) {
    let total = 0;
    for (let ele of arr) {
        if (typeof ele === "number") {
            total += ele;
        }else{
            throw new TypeError("sum(): elements must be number.");
        }
    }
    return total;
}

// 因为元素不是数组类型，那么就会出现异常
// console.log(sum_v2("11",2,3,4,5,6,7))

console.log(sum_v2([1,2,3,4,5,6,7]))