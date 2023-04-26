// 在 js 中定义函数和 Java 语言中类似
// 但是 js 中的函数签名没有返回值类型


let abs = function(x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}	
};


console.log(abs(-5) === abs(5));

function sum(array) {
	let s = 0;
	for (let x of array) {
		s += x;	
	}
	return s;	
};

var arr = [1,2,3,4,5];

console.log(sum(arr));


// 也可以使用箭头函数的方式创建
const sub = x => x - 10;

console.log(sub(20));
