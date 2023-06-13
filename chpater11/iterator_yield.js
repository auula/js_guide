// js 中的生成器使用，特别适合要迭代的值不是某个数据结构的元素
// 而是计算结果的场景

// 生成器使用 yield 生成可迭代流
// 必须使用 function 关键字和 * 定义
function* fruit() {
    yield '🍉';
    yield '🍎';
    yield '🍌';
    yield '🍋';
    yield '🍇';
    yield '🍅';
    yield '🍑';
}

console.log(...fruit());

for (const v of fruit()) {
    console.log(v);
}

// function* fruit() 会在运行时转换为一个生成器对象，
// 这个对象和普通的可迭代对象类似，拥有 next 方法
// next 的返回值为 yield 回传的值
let iterable = fruit();

// 通样可以使用原生的 for 循环进行迭代
for (let result = iterable.next(); !result.done; result = iterable.next()) {
    console.log(result.value);
}

let o = {
    x: 1, y: 2, z: 3,
    *g() {
        for (let key of Object.keys(this)) {
            yield key;
        }
    }
};

console.log(...o.g());

// 每个数字都是前两个数字之和，
// 数列的起始数字通常是 0 和 1，
// 然后后续的数字依次计算。
function* fibonacciSequence() {
    let x = 0, y = 1;
    while (1) {
        // 先返回 y 
        yield y;
        // 然后交换位置
        [x, y] = [y, x + y];
    }
};

let item = fibonacciSequence();

// for (const value of item) {
//     console.log(value);
// }


// yield* 用于迭代可迭代对象
function* squenecA(...iterables) {
    for (let iterable of iterables) {
        for (let item of iterable) {
            for (let v of item) {
                yield v;
            }
        }
    }
}

function* squenecB(...iterables) {
    for (let iterable of iterables) {
        for (let item of iterable) {
            // yield* 可以用于迭代可迭代对象并且返回其中的每一个值
            yield* item;
        }
    }
}

let fruitsA = [fruit(), fruit(), fruit()];

console.log("A:", ...squenecA(fruitsA));

let fruitsB = [fruit(), fruit(), fruit()];

console.log("B:", ...squenecB(fruitsB));