// js 中的 promise 支持多个异步任务回调处理

const promise1 = Promise.resolve(3);

const promise2 = 42;

const promise3 = new Promise((resolve, _) => {
    setTimeout(resolve, 3000, 'foo');
});

const promise4 = new Promise((resolve, _) => {
    setTimeout(resolve("promise4"), 1000);
});

// 但是有一个中断那么所有的 Promise 就会被中断
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
});