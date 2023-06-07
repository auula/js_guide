// js 中的 RegExp 对象使用，正则表达式使用

// 可以忽略双引号
//let pattern = /s$/;

// 是否以 s 结尾
let pattern = new RegExp("s$");

// true 确实以 s 结尾
console.log(pattern.test("alias"));


