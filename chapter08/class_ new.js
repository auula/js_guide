// js 新的 es6 标准可以直接在 class 中编写属性，
// 不需要编写 constructor 构造函数。

class Buffer {
    // 带有 # 号表示私有属性
    #size = 0;
    #capacity = 4096;
    #buf = new Uint8Array(this.#capacity);

    // 只提供了 size 的方法进行访问
    get size() {
        return this.#size;
    };

    set add(v) {
        this.#buf[this.#size] = v;
        this.#size++;
    }

    toString() {
        return `Buffer {
            size = ${this.#size};
            capacity = ${this.#capacity};
            buf = ${this.#buf};
        }`;
    }
}

// 会有隐私的构造函数进行
let bf = new Buffer();

bf.add = 1;
bf.add = 2;
bf.add = 3;

console.log(bf.size);

// 打印初始化的 bf 对象
console.log(bf.toString());