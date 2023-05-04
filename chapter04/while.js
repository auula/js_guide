// js 中的 while 和 do while 循环

let n = 0;

// 先判断循环条件再执行	
while (n < 10) {
	n += 1;
}

console.log(n);


function printArray(arr) {
	let len = arr.length, i = 0;
	if (len === 0) {
		console.log("empty array.");
	} else {
		// 先执行一次再判断是否继续循环条件
		do {
			console.log(arr[i]);
		} while (++i < len);
	}
}
