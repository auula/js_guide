// 手动常见一个期约，为某一个函数实现期约链
// 在这段代码中 wait 函数返回一个 Promise 对象，使用 setTimeout 函数来模拟等待指定时间后解析 Promise。
// 如果 duration 小于 0 ，那么 Promise 会被拒绝 (reject) ，并返回一个带有错误信息的 Error 对象；
// 否则，经过指定的时间后，Promise会被解析 (resolve) ，并返回字符串 "wait fulfill."。

function wait(duration) {
    return new Promise((resolve, reject) => {

        if (duration < 0) {
            reject(new Error("duration time value not legal."));
        }
        

        // setTimeout(resolve, duration) 的行为与直接调用 resolve() 函数相似，
        // 它会立即解析 Promise 并输出结果，
        // 这是因为 resolve 函数在传递给 setTimeout 之前已经被调用了。
        setTimeout(() => {
            resolve("wait fulfill.")
        }, duration);
    });
}

wait(2000).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});