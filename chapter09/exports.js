// js 中到处函数到外部使用

// 要导出的函数或者对象
const math = (function () {
    function add(x, y) {
        return x + y;
    };

    function sub(x, y) {
        return x - y;
    };

    return { add, sub };

}());

// 导出这个模块
module.exports = math;