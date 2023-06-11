// js 中的 console 对象的 API 使用
// console 在浏览器中是 window 子对象
// 在 node.js 运行环境中是 globalThis 子对象 

console.log(console);

// log 主要将消息输出到标准输出中
console.log("this stdout messages.");

// warn error info debug 这些都是在标准错误输出中
console.warn("this warn std err out messages.");

console.error("this error std err out messages.");

console.info("this info std err out messages.");

console.debug("this debug std err gout messages.");

// 断言函数
const array = [1, 2, 3];

// 条件为 true，没有输出错误消息
console.assert(array.length === 3, "数组长度不等于 3");

const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'San Francisco' },
    { name: 'Bob', age: 35, city: 'Chicago' }
];

// 以表格的方式输出数据，标准输出
console.table(data);

// trace 和 log 一样，但是和会输出调用栈信息
console.trace(data);