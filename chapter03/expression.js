// js 中的表达式和操作符
// 表达式是又多个操作符组成的，可以是变量也可以运算符

let num = 1.23;
let str = "hello";
let b = 0 === 0;

console.log(num,str,b);

let p = {
	name:"Tom",
	age:23,
};
let arr = [1+2,0===0,p];

console.log(arr);

console.log(arr[2].name);

// 语法糖,可链接访问
console.log(p?.nil);

function bubble(arr) {
	for (let i = 0;i<arr.length - 1;i++) {
		for (let j = 0; j < arr.length - 1 - i;j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function sort(arr,fn) {
	return fn?.(arr);
}

let array = [12,345,556,757,132,45,65];

console.log(sort(array,bubble));
