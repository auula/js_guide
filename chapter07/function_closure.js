// js 中的闭包使用，函数可以返回一个内部定义的函数
// 闭包可以让调用者无法操作函数内部的变量，只能通过特定函数来操作

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


// 此种方式效果可以实现类似于对象 get set 效果

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
c.reset();
console.log(c.count());
console.log(d.count());



