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


// 通过指定下标的方式创建数组，并且指定一个 lenght 属性
const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); //same syntax for using apply()

console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

// 生产环境紧张写这样的代码，以为自定义的 length 会覆盖掉原先的数组长度
console.log("array.length:",a.length);


