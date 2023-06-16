// js 中的 promise 错误处理教程

// 常见一个 Promise 异步调用任务
const myPromise = new Promise(
    // 这两个参数为函数
    (resolve, reject) => {
        setTimeout(resolve("execute success."), 1000);
        setTimeout(reject("execute failure."), 1000);
    }
);

myPromise.then(
    (value) => { throw new Error(value) },
    // 如果不加 catch 这个 error 也是无法处理的
    (error) => console.log(error),
).catch(error => {
    console.log("catch error message:", error)
});