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

// 从头部插入
let arr3 = [];

// 这样插入元素会带来一个问题，所以元素会往后移动一位 O(n)
arr3.unshift(1);
arr3.unshift(2);
arr3.unshift(3);
arr3.unshift(4);

// 从头部返回
console.log(arr3.pop())
// 尾部返回
console.log(arr3.shift())

// 删除一个元素，类似于给元素赋值为 undefined
delete arr3[1];

console.log(arr3[1])

console.log(1 in arr3)

console.log(arr3);
