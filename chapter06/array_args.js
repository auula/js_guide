// js 中函数有一个内置的属性，arguments 属性

function normal() {
    return arguments.length;
}

// 7
console.log(normal(1,2,3,4,5,6,7));


// 但是匿名函数没有
let arrow = () => arguments.length;

console.log(arrow(1,2,3));
