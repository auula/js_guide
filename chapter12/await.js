// js 中的 awiat 和 async 异步调用使用

let num = 10;

const setNum = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num = 20;
            resolve();
        }, 1000);
    });
}

async function getNum() {
    let num = await setNum();
    console.log(num);
}

getNum();