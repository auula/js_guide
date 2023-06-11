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
// console.trace(data);


// 是 JavaScript 中用于计数的方法，它可以帮助你追踪某个特定代码块被执行的次数。
// 它接受一个可选的标签作为参数，并在控制台输出计数信息。
function processItem(item) {
    console.count('processItem');
    // 处理项目的代码...
}

processItem('A');
processItem('B');
processItem('A');