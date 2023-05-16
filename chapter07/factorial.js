// js 中的斐波拉契数列函数

function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

console.log(factorial(5));
