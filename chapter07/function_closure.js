// js 中的闭包使用，函数可以返回一个内部定义的函数

let uniqueIntger = (function(){
    let counter = 0;
    // 此处捕获了外部的变量
    return function() {
        return counter++;
    }
}());

console.log(uniqueIntger());
console.log(uniqueIntger());
console.log(uniqueIntger());

function counter() {
    let n = 0;
    return {
        count: function() {return n++},
        reset: () => { n = 0 },
    };
}

let c = counter(),d = counter();
c.count();
d.count();
c.reset()
console.log(c.count());
console.log(d.count());
