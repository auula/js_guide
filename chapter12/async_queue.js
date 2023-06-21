// js 使用 promise 实现异步队列

class AsyncQueue {

    constructor() {
        // 存储入队的元素
        this.values = [];
        this.resolves = [];
        this.closed = false;
    }

    enqueue(value) {

        if (this.closed) {
            return new Error("Async closed.");
        }

        if (this.resolves.length > 0) {
            const resolve = this.resolves.shift();
            resolve(resolve);
        } else {
            this.values.push(value);
        }

    }

    dequeue() {
        // 如果有值则取出返回
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
                this.resolves.push(resolve);
            });
        }
    }

    close() {
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



aq.enqueue(1);
aq.enqueue(2);
aq.enqueue(3);
aq.enqueue(4);

console.log(aq.dequeue());
console.log(aq.dequeue());
console.log(aq.dequeue());
console.log(aq.dequeue());
