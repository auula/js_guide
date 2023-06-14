// js 中的 async 异步编程，如果使用的是 node.js 做为运行环境
// 默认的底层环境就为异步的方式，处理任务

// 导入 node.js 封装的文件调用模块
const fs = require("fs");

// 默认配置选项
let obj = {};

fs.readFile("chapter12/obj.json", "utf-8", (err, text) => {
    if (err) {
        console.log("Could not read config file:", err);
    } else {
        // 否则解析文件的内容并赋值给选项对象
        obj = Object.assign(obj, JSON.parse(text));
        // { name: 'Leon', age: 24 }
        console.log(obj);
    }
});



