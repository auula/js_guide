// js 多个 promise 异步任务处理，
// promise.race 可以获取最新完成任务哪一个。

const p1 = new Promise((resolve, _) => {
    let rand = Math.random() * 100;
    setTimeout(() => resolve("one"), rand);
});

const p2 = new Promise((resolve, _) => {
    let rand = Math.random() * 100;
    setTimeout(() => resolve("two"), rand);
});

const p3 = new Promise((resolve, _) => {
    let rand = Math.random() * 100;
    setTimeout(() => resolve("three"), rand);
});

Promise.race([p1, p2, p3])
    .then((values) => {
        console.log("最新完成任务的：",values);
    })
    .catch((error) => {
        console.error(error.message);
    });