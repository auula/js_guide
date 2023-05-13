// js 中的对象和数组访问方式类似
let obj = {}

obj["1"] = 'one';

console.log(obj)


let arr = [];

// 属性，属性名称
arr[-1.23] = true;

// 下标主动转换为整数
arr[1.0023] = true;

// 前 1000 个为空，1001 为 0
arr["1000"] = 0;

console.log(arr)

for (v of arr) {
    console.log(v)
}

// 数组是一个特殊的对象可以自己维护 length 并且索引必须是 0 - (2^32-2)
console.log(arr.length)

// 创建了一个元素为 5 长度的元素
let a = Array(5);
console.log(a.length)

// 空数组 undefined  检查是否有元素
// a1 长度是 1 而不是 2
let a1 = [,];
console.log(a1.length)

let a2 = [undefined];

// a1 是无值的
console.log(0 in a1)

// a2 是有值的
console.log(0 in a2)