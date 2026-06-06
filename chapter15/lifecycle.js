// js 的生命周期的生命周期是指 js 代码从被加载到内存中开始，到被执行完毕后被销毁的过程。在这个过程中，js 引擎会进行一些操作，如解析代码、编译代码、执行代码等。 

// js 的生命周期可以分为以下几个阶段：  
// 1. 加载阶段：在这个阶段，js 引擎会将 js 代码加载到内存中，并进行语法分析和词法分析，生成抽象语法树（AST）。  
// 2. 编译阶段：在这个阶段，js 引擎会将 AST 转换成字节码（bytecode），并进行优化。  
// 3. 执行阶段：在这个阶段，js 引擎会执行字节码，并进行垃圾回收等操作。  
// 4. 销毁阶段：在这个阶段，js 引擎会销毁 js 代码占用的内存空间，释放资源。

// 在 js 的生命周期中，js 引擎会进行一些优化，如函数内联、循环展开等，以提高代码的执行效率。同时，js 引擎还会进行垃圾回收，释放不再使用的内存空间，以避免内存泄漏等问题。

// 总的来说，js 的生命周期是一个复杂的过程，涉及到多个阶段和操作。了解 js 的生命周期可以帮助我们更好地理解 js 的执行机制，提高代码的性能和效率。

// lifecycle.js

console.log("========== JS Lifecycle Demo ==========");

/**
 * 1. 全局执行上下文创建
 */
const appName = "Lifecycle Example";

/**
 * 2. 函数声明
 * 在解析阶段已经被创建
 */
function add(a, b) {
    return a + b;
}

/**
 * 3. 类声明（ES6）
 */
class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }
}

/**
 * 4. 闭包
 */
function createCounter() {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}

console.log("Global context initialized");

/**
 * 5. 执行函数
 */
console.log(add(10, 20));

/**
 * 6. 创建对象
 */
const user = new User("Leon");

user.hello();

/**
 * 7. 闭包
 */
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

/**
 * 8. Promise（微任务）
 */
Promise.resolve()
    .then(() => {
        console.log("Promise Microtask");
    });

/**
 * 9. Timer（宏任务）
 */
setTimeout(() => {
    console.log("setTimeout Macrotask");
}, 0);

/**
 * 10. 热点函数
 * 触发 V8 JIT 优化
 */
function hotFunction(x) {
    return x + 1;
}

for (let i = 0; i < 1_000_000; i++) {
    hotFunction(i);
}

console.log("Hot function executed");

/**
 * 11. 垃圾回收演示
 */
let person = {
    name: "Tom",
    age: 18
};

console.log(person);

person = null;

console.log("Object became unreachable");

/**
 * 12. 模块动态加载（ES2020）
 */
(async () => {
    try {
        const module = await import("./math.js");

        console.log(
            module.multiply(3, 5)
        );
    } catch {
        console.log(
            "math.js not found"
        );
    }
})();

console.log("Main Script End");