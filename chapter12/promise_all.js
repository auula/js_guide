// js 中的 promise 支持多个异步任务回调处理

const promise1 = Promise.resolve(3);

const promise2 = Promise.resolve(2);

const promise3 = new Promise((resolve, _) => {
    setTimeout(resolve, 500, 'foo');
});

const promise4 = new Promise((_, rejcet) => {
    setTimeout(()=> {
        rejcet("promise4");
    }, 100);
});

// Promises 数组中的其中一个 Promises 失败后立即失败
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
});