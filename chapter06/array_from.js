// js 中的 array.from 工厂函数，from 可以接受一个可迭代的对象

let a = [1,234,13123221312,"string"]; 

let arr = Array.from(a);

console.log(arr);

// 可以传入第二个参数，传入一个函数

function add(x) {
	return x + x;
}

let arr2 = [1,23,44,55,100];

let arr3 = Array.from(arr2,add);

console.log(arr3);
