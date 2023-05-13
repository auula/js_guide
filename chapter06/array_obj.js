// js 中的对象和数组访问方式类似
let obj = {}

obj["1"] = 'one';

console.log(obj)


let arr = [];

// 属性
arr[-1.23] = true;

// 前 1000 个为空，1001 为 0
arr["1000"] = 0;

console.log(arr)

for (v of arr) {
    console.log(v)
}

// 数组是一个特殊的对象可以自己维护 length 并且索引必须是 0 - (2^32-2)
console.log(arr.length)