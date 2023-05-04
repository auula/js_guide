// js 中的 while 和 do while 循环

let n = 0;

while (n < 10) {
	n += 1;
}

console.log(n);


function printArray(arr) {
	let len = arr.length, i = 0;
	if (len === 0) {
		console.log("empty array.");
	} else {
		do {
			console.log(arr[i]);
		} while (++i < len);
	}
}
