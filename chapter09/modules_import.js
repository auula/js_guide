// js 在 node.js 导入模块系统


// 这种方式只能在 node.js 环境中使用，如果要拿到浏览器中使用必须使用第三方打包工具
// 例如 webpack 打包工具来使用
const { add,sub } = require("./exports.js");

// 10 + 10 = 20
console.log(add(10,10));

// 20 - 10 = 10
console.log(sub(20,10));