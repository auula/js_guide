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
let m = new Map([["one", 1],["two", 2]]);

for (const [k,v] of m) console.log(k,v);