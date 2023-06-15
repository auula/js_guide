// es6 中的新标准，promise 期约对象表示异步操作的结果。
// promise 只是一种处理回调的不同的方式。

// promise 在处理错误异常处理时不会像普通异步函数回调，
// 采用多层参数传递也不会出现多个回调函数嵌套问题。
// promise 表示一个异步任务在未来完成任务的结果。
// promise 不适用重复的任务，例如按钮的点击事件。
// https://youtu.be/K_gbf1T5Egg


// promise 最大好处是不用在回调函数里面嵌套其他回调函数，
// 而是采用联试回调函数的方式进行调用，then 函数方法。

// Promise 状态只能改变一次之后就固定，
// 所以在第 4 行，500毫秒一到，状态改变成 rejected 之后，就不能变动，
// 换言之第 3 行，setTime 里面的 resolve 就不会被执行。

// 失败情景实例：
const myPromise = new Promise((resolve, reject) => {
    // 成功状态 resolve
    setTimeout(() => resolve('Hello world'), 1000);
    // 失败状态
    setTimeout(() => reject('Ahh...'), 500);
});

// 
myPromise.then(
    // lambda 表达式执行
    (value) => console.log("执行成功结果：" + value),
    (error) => console.log("执行失败结果：" + error)
);

// 使用一个周期性的定时器查看 Promise 对象状态的变化
let cycle_clock = setInterval(() => {
    console.log(myPromise);
}, 100);

// 当 Promise 执行完成之后关闭周期性定时器
setTimeout(() => {
    clearInterval(cycle_clock);
}, 1000);
