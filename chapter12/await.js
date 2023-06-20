// js 中的 awiat 和 async 异步调用使用

let num = 10;

// 在一个异步操作里面修改外部的 num 值
const setNum = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num = 20;
            resolve();
        }, 1000);
    });
}

// 定义过一个异步函数获取 num 的值
async function getNum() {
    // 指定等待某个期约完成
    await setNum();
    console.log(num);
}

console.log(getNum());



// 在 for 循环里面使用 async 函数
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, Math.ceil(Math.random() * 1000))
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, Math.ceil(Math.random() * 1000))
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, Math.ceil(Math.random() * 1000))
});

const promises = [p1, p2, p3];

// 必须使用一个 async 匿名函数包起来
(async () => {
    for (const p of promises) {
        try {
            let res = await p;
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
})();

// 乱序执行很正常
async function ps() {
    (async () => {
        for await (const p of promises) {
            try {
                console.log(p);
            } catch (error) {
                console.log(error);
            }
        }
    })();
}

ps();