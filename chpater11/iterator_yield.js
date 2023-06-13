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