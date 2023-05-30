// js 可以在浏览器上运行默认的操作对象上 Window
// 前面的代码适用早期 es 版本

// js 也可以在 node.js 运行环境上执行
// nodejs 环境中导出导入模块，可以使用内置的 module.exports 全局属性

// 默认上空的
console.log(module.exports);

exports.sayhi = () => { console.log("Hello Node.JS") };

// Hello Node.JS
exports.sayhi();

const square = function (x) {
    return x * x;
}

const sum = (x, y) => { return x + y; }


// 可以通过 module.exports 设置对象进行导出
module.exports = { square, sum };

// 可以使用 module.exports 进行导入使用
console.log(module.exports.square(10), module.exports.sum(2, 3));
