// js 中的错误 Error 类型，Error 类型通过构造函数传入两个参数
// 分别为 message 和 name ，错误信息 和 错误类型
// 错误类型是针对是 Error 类型本身，Error 类型有很多子类
// 常见 SyntaxError 和 TypeError 、ReferenceError 类型的错误

let err = new Error("common type error.");

console.log(err.message,err.name);


// 自定义一个错误，可以使用 extens 来继承实现
class HTTPError extends Error {
    constructor(status,statusText,url) {
        super('${status} ${statusText} ${url}.')
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }

    get name() {
        return "HTTPError";
    }

    toString() {
        return `${this.status} ${this.statusText} ${this.url} , ${this.name}.`
    }
}

let herr = new HTTPError(404,"Not Found","http://google.com");

console.log(herr.toString());