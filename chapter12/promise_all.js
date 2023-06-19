// js 中的 promise 支持多个异步任务回调处理

const promise1 = Promise.resolve(3);

const promise2 = 0 / 0;

const promise3 = new Promise((resolve, _) => {
    setTimeout(resolve, 500, 'foo');
});

const promise4 = new Promise((resolve, _) => {
    setTimeout(resolve("promise4"), 100);
});

// 会收集所有的 promise 的异步运行的结果
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
});