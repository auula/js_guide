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

console.debug("this debug std err out messages.");