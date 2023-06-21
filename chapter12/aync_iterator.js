// js 中的异步迭代器实现，异步迭代器优先级高于普通迭代器

// 普通迭代器返回时一个带有 next 方法的对象
// 而异步迭代器返回时一个期约对象
async function* clock(interval, max = Infinity) {
    // 通过循环创建多个 Promise 对象
    for (let count = 1; count <= max; count++) {
        // await 等待这个 Promise 执行完成
        await new Promise(resolve => {
            // resolve 一旦被执行说明 Promise 已经完成任务
            setTimeout(resolve, interval);
        });
        // 这个 count 会自动包装为 Promise
        yield count;
        // yield Promise.resolve(count);
    }
}

async function test() {
    for await (let tick of clock(300, 10)) {
        console.log(tick);
    }
}

test();