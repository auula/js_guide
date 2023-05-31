// js 在 node.js 中到处模块教程

// 要导出的模块
const exports = (function () {
    function add(x, y) {
        return x + y;
    };
    function sub(x, y) {
        return x - y;
    };

    return { add, sub };
}());


