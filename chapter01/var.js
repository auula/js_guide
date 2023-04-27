// 在 js 里面使用 var 变量注意全局作用

arr = [1,2,3,4,5];

function array() {
	arr = "覆盖原理的值";
};

array();

console.log(arr);


function scope() {
	// 提前被访问到了内存
	console.log(s);
	var s = 12.3;
	console.log(s);

	var i = 0;
	console.log(i);
	if (true) {
		// 覆盖掉外面掉 i
		var i = 200;
		console.log(i);
	}

	console.log(i);
	
};

scope();
