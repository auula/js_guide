// node.js 中提倡使用的 require 关键字导入模块

// 全局的公共模块
const modules = {};

// 定义一个 require 函数来引用某个模块
function require(mod) {
    return modules[mod];
}

// 为 modules 对象设置一个 sets.js 属性
modules["sets.js"] = (function() {
    // 要导出的模块属性对象
    const exports = {};

    // 添加一个公共 Set 属性
    exports.Sets = new Set();

    // 通过闭包的方式导出可用模块
    return exports;
}());

// 为 modules 对象设置一个 math.js 属性
modules["math.js"] = (function(){
    const exports = {};

    exports.Add = function(x,x) {
        return x + x;
    };
    
    exports.Sub = function(x,x) {
        return x - x;
    };

    exports.Multi = function(x,x) {
        return x * x;
    };

    exports.Div = function(x,x) {
        if ( x === 0) {
            return 0;
        }
        return x / x;
    };

    return exports;
}());

// 使用 require 函数导入
let math = require("math.js");

console.log(math.Add(1,2));
console.log(math.Div(4,2));
console.log(math.Sub(1,2));
console.log(math.Multi(2,2));

let s = require("sets.js");

s.Sets.add(8);

console.log(s.Sets.has(8));