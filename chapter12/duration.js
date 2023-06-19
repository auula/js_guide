// 手动常见一个期约，为某一个函数实现期约链

function wait(duration) {
    return new Promise((resolve, reject) => {

        if (duration < 0) {
            reject(new Error("duration time value not legal."));
        }

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