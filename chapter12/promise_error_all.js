// js 中的 promise 多异步任务处理教程，
// 如果有多个 promise 其中一个出现异常，会导致执行 catch

const p1 = new Promise((resolve, _) => {
    setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, _) => {
    setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, _) => {
    setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, _) => {
    setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((_, reject) => {
    reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error.message);
    });

  // Logs:
  // "reject"
