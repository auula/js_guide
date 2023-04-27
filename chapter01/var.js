// 在 js 里面使用 var 变量注意全局作用

arr = [1,2,3,4,5];

function array() {
	arr = "覆盖原理的值";
};

array();

console.log(arr);


function scope() {
	console.log(s);
	var s = 12.3;
	console.log(s);
};

scope();
