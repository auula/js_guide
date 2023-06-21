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


function clock_next(interval, max = Infinity) {
    // 就是一个时间到另外一个时间到时差
    function until(time) {
        return new Promise(resolve => setTimeout(resolve, time - Date.now()));
    };

    return {
        // 记录开始时间
        startTime: Date.now(),
        // 次数
        count: 1,
        async next() {
            if (this.count > max) {
                // 次数到了结束
                return { done: true };
            }
            // 计算下次到开始时间
            let targetTime = this.startTime + this.count * interval;
            // 开始阻塞等待唤醒
            await until(targetTime);
            // 到点了，开始返回
            return { value: this.count++ };
        },

        // 迭代器自己也是一个可迭代对象
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}

(async () => {
    for await (let tick of clock_next(600, 10)) {
        let t = tick;
        console.log(t);
    }
})()


// let iterable = clock_next(600, 10);

// for (let result = iterable.next(); !result.done; result = iterable.next()) {
//     console.log(result.value);
// }

