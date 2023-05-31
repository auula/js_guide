// js 在 node.js 导入模块系统

const { add,sub } = require("./exports.js");

// 10 + 10 = 20
console.log(add(10,10));

// 20 - 10 = 10
console.log(sub(20,10));