// js 中的生成器使用，特别适合要迭代的值不是某个数据结构的元素
// 而是计算结果的场景

// 生成器使用 yield 生成可迭代流
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