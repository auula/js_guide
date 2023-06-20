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