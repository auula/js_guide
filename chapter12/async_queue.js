// js 使用 promise 实现异步队列


// https://chat.openai.com/share/baaf06c5-4bcd-4732-9071-854a3e5f406f
class AsyncQueue {

    constructor() {
        // 存储入队的元素
        this.values = [];
        this.resolves = [];
        this.closed = false;
    }

    enqueue(value) {

        // 关闭了直接返回错误信息
        if (this.closed) {
            return new Error("Async closed.");
        }

        // 如果有 resolve 需要处理则处理
        if (this.resolves.length > 0) {
            console.warn(value,"没有被存放，而是使用了 resolves.")
            const resolve = this.resolves.shift();
            resolve(resolve);
        } else {
            this.values.push(value);
        }

    }

    dequeue() {
        // 先看看是否还有元素，如果有值则取出返回，在判断是否关闭
        if (this.values.length > 0) {
            const value = this.values.shift();
            return Promise.resolve(value);
        } else if (this.closed) {
            return Promise.resolve(AsyncQueue.EOS);
        } else {
            // 如果队列既没有关闭也没有元素，将返回一个新的Promise对象，
            // 并将解析函数resolve添加到resolves数组中，
            // 以便在后续元素入队时调用。
            return new Promise(resolve => {
                // 什么时候完成取决于，什么时候调用 enqueue
                this.resolves.push(resolve);
            });
        }
    }

    close() {
        // 循环遍历resolves数组，逐个调用解析函数，
        // 并传入表示结束的特殊值AsyncQueue.EOS。
        while (this.resolves.length > 0) {
            this.resolves.shift()(AsyncQueue.EOS);
        }
        this.closed = true;
    }

    [Symbol.asyncIterator]() { return this; }

    next() {
        return this.dequeue().then(value => (value == AsyncQueue.EOS)
            ? { value: undefined, done: true }
            : { value: value, done: false });
    }
}

AsyncQueue.EOS = Symbol("end-of-stream");

let aq = new AsyncQueue();

console.log(aq.dequeue());

aq.enqueue(1);
aq.enqueue(2);
aq.enqueue(3);
aq.enqueue(4);

console.log(aq.dequeue());
console.log(aq.dequeue());
console.log(aq.dequeue());
console.log(aq.dequeue());



// [Running] node "/Users/dings/Documents/js_guide/chapter12/async_queue.js"
// Promise { <pending> }
// Promise { 2 }
// Promise { 3 }
// Promise { 4 }
// Promise { <pending> }

// [Done] exited with code=0 in 0.144 seconds