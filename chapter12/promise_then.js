// js 中的 promise 错误处理教程

// 常见一个 Promise 异步调用任务
const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(randomNumber);
    } else {
        // 演示计算出现错误的过程
        reject(new Error("Random number is less than or equal to 0.5"));
    }
});

myPromise
    .then((value) => {
        console.log("Resolved with value:", value);
    })
    .catch((error) => {
        console.log("Caught an error:", error.message);
    });
