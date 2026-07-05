// 一个简单的事件触发器实现，类似于 Node.js 中的 EventEmitter
class EventEmitter {

    constructor() {
        this.events = {};
    }

    // 设置触发事件名称和监听器
    on(name, listener) {
        if (!this.events[name]) {
            this.events[name] = [];
        }

        this.events[name].push(listener);
    }

    // 向某个事件名称触发事件，并传入参数
    emit(name, ...args) {
        const listeners = this.events[name];

        if (!listeners) return;

        // 遍历所有监听器并执行
        for (const listener of listeners) {
            listener(...args);
        }
    }

}

const emitter = new EventEmitter();

emitter.on("login", user => {
    console.log(user.name);
});

emitter.emit("login", {
    name: "Tom"
});