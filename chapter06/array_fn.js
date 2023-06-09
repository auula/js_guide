// js 中的方法使用，js 中的数组是对象类型，默认有内置的方法

// 通过 map 方法会对某一个值进行操作，然后返回一个新的数组

let a = [1,2,3,4,5,6,7,8,9,0];

// 求每个数的平方
a = a.map( v => v * v);

console.log(a);

// 偶数过滤器
a = a.filter(v => v % 2 === 0);

console.log(a);

// 在数组中查找某个元素
console.log(a.find( v => v % 2 === 0));

// 在数组中查找某个元素的下标
console.log(a.findIndex( v => v === 2));

// js 中对多维数组中元素打平操作

let m = [1,2,3,4,5,[6,7,[8,9,0,[11,12,13]]]];

// 去掉外层嵌套层次
console.log(m.flat(1));