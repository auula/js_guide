// js 中的标准库使用，什么是标准库？
// Standard Library 是指在编程语言中提供好的一组已经实现和打包好的常用的功能和工具集合。
// 在 es6 中可能是是 node.js 提供的 http server 标准库或者是 fs 文件系统库。


// 常用的标准库有：
// 1. 集合和 Set 、Map 等
// 2. 二进制数据和数组、对象衍生的 API 使用
// 3. 正则表达式 RegExp 类的使用
// 4. 日期和时间处理的标准库
// 5. 错误处理和 Error 类型使用
// 6. JSON 对象和数组 、 字符串 、 数值 、布尔类型
// 7. 定时器使用 setTimeout() 和 浏览器 Window 对象 API 使用。

// 测试 Set 构造函数只能使用可迭代的对象作为参数
class Test {
    constructor(from,to) {
        this.from = from;
        this.to = to;
    };

    toString() {
        let str = "[";
        for (let index = this.from; index <= this.to; index++) {
            str += index;
            if (index != this.to) str += ",";
        }
        str += "]";
        return str;
    };

    // 要想让 Set 使用必须实现 Symbol.iterator 方法
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to;x++) yield x;
    };
}

// s 是一个集合
let s = new Set("Hello Wolrd");

console.log(s);

// 2 个元素 1 一个元素，和一个字符串元素，整合了前一个 s 的元素的集合
let t = new Set([1,s]);

console.log(t);

let c = new Test(1,10);

console.log(c.toString());

// 传入的对象必须是实现了 Symbol.iterator 方法才能正常运行
let cs = new Set(c);
console.log(cs);
console.log([...cs]);

