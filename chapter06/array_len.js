// js 中 length 是数组对象主动维护的
let arr = [1,2,3,4,5];

console.log(arr.length);

arr.push("10");

console.log(arr.length);

console.log(arr);

// js 中的如果认为的修改了 length 会导致数组的元素丢失，能访问到的元素只能到 length 中为止

let arr2 = new Array(10);

console.log(arr2)
console.log(arr2.length)

// 此处修改了数组的长度
arr2.length = 5

console.log(arr2)
console.log(arr2.length)

// 添加了一个元素，length 已经到达了 1000 + 1
arr2['1000'] = 1000;

console.log(arr2)

