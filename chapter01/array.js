// 在 js 里面还有数组类型

let arr = [1,2,3,4,5];

console.log(arr);

// 打印长度
console.log("arr length:",arr.length);

// 修改下标为 0 的元素的值
arr[0] = 100;

console.log(arr);

// 默认每个对象都一个数组属性

let empty_arr = [];

empty_arr.push(1,2,3,4,5);

console.log("empty_arr:",empty_arr);

empty_arr.reverse();

console.log(empty_arr);
