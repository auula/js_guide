// Promise.allSettled 是一个用于处理一组 Promise 的方法，
// 它接收一个 Promise 数组作为参数，并返回一个新的 Promise，
// 该 Promise 在所有输入 Promise 都已经完成或被拒绝后解析为结果数组。


let ps = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(4),
    Promise.resolve(5),
    new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            // 演示计算出现错误的过程
            reject(new Error("Random number is less than or equal to 0.5"));
        }
    }),
];

// Promise.allSettled 接受一个数组，并且处理每个 Promise 元素
// Promise 会有两种状态 fulfilled 和 rejected 状态
// 如果是 fulfilled 状态会绑定一个 value 值
// 如果是 rejected 状态会绑定一个 reason 值
Promise.allSettled(ps).then(results => {
    results.forEach(res => {
        if (res.status === 'fulfilled') {
            console.log('Fulfilled:', res.value);
        } else if (res.status === 'rejected') {
            console.log('Rejected:', res.reason);
        }
    });
}).catch(error => {
    console.log('Error:', error.message);
});