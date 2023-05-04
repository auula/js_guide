// 用 js 的 for 循环实现乘法表例子

let mt = "";

for (let i=1; i <= 9; i++) {
	for (let j = 1; j <= i; j++) {
		mt += "  " + j + " * " + i + " = " + (i * j);
		if (j === i ) {
			mt += "\n";
		}
	}
}

console.log(mt);
