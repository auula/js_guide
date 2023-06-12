// js 中可迭代对象和迭代器实现

let sum = 0;

let arr = [1, 2, 3, 4, 5];

// 数组是可以迭代的
for (const i of arr) {
    sum += i;
}

console.log(sum);

// 找出数组中最大值，arr 是可以扩展的 
console.log(Math.max(...arr));

let p = Uint8Array.of(255, 0, 255, 128);

// 通过解构某个对象的属性
let [r, g, b, a] = p;

console.log(p.toString());

// Uint8Array 默认带有可迭代属性
for (const v of p) {
    console.log(v);
}

// Map 是可以迭代的
let m = new Map([["one", 1], ["two", 2]]);

for (const [k, v] of m) console.log(k, v);

// Map 内置一些方法是可以迭代的
console.log([...m]);
console.log([...m.entries()]);
console.log([...m.keys()]);
console.log([...m.values()]);

// 先创建一个 new Set 然后再解构
console.log(...new Set("abc"));

let iterable = [99, 88, 77];

let iterator = iterable[Symbol.iterator]();

// 类似于 for 普通语句，
// result = iterator.next() 确定第一个元素
// !result.done 判断是否完成
// 没有完成就继续取得下一个元素 result = iterator.next()
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}