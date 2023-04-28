// 在 js 中数值类型和浮点类型，设计问题最多

let x = .3 - .2;

let y = .2 - .1;


// 肉眼看似相等，但是在计算机底层浮点数存储会出现问题
// 两个的计算结果是近似，而不是相等
console.log(x,y);
console.log("x == y :",x===y);

console.log("x == .1 :",x===.1);

console.log(y);
console.log("y == .1 :",y===.1);
