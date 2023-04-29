// 无穷数值和非数值

let x = 0 / 0;

console.log(x);

console.log("is NaN:",Number.isNaN(x));

console.log("is Finite:",Number.isFinite(x));

console.log(Number.MAX_VALUE * 2);

console.log("is Finite:",Number.isFinite(Number.MAX_VALUE * 2));
