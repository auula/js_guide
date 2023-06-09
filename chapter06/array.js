// js 中的数值对象使用，js 中的数值和传统编程语言不一样，类型不同的元素可以放到一起

let arr1 = [1,2,3,4,5,6,];

// length 为 6 最后一个逗号不算
console.log(arr1.length);
console.log(arr1);

// js 中的数组可以不同类型的，并且支持扩展操作符号
let arr2 = [...arr1,["array",{x:123.13,y:3.1415}]];

console.log(arr2.length);
console.log(arr2);

// 这个数组的下标 0 和 4 的元素值为没有定义
let arr3 = [1,,2,3,,1];
console.log(arr3.length);
console.log(arr3);

// 拆分字符串，构建数组
let digital = [..."1381238109hdsadhashddhasd"];

console.log(digital);

// 扩展表达式
let letters = [..."hello world"];

letters[1] = 0;
letters[2] = 3;

// 有序集合
let sets = [...new Set(letters)];

console.log(sets);

let copy1 = [1,2,3];
let copy2 = [...copy1];
// 不会共享，而是复制值
copy1[0] = 'X';
console.log(copy2);

let arr4 = new Array(1,2,4,5,6,78,..."12312312","string");

console.log(arr4);

const arr11 = Array.of();

const arr22 = Array.of(1, 2, 3);

const arr33 = Array.of('apple', 'banana', 'orange');

console.log(arr11);
console.log(arr22);
console.log(arr33);
