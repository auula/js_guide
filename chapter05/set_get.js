// js 中为对象的属性添加访问修饰符限制

const serialnum = {
	_n: 0,
	
	// 获取数值的方法
	get next() { return this._n++; },
	
	// 数值数值的方法
	set next(n) {
		if (n > this._n) {
			this._n = n;
		} else {
			throw new Error("serial number can only be set to a larger value");
		}
	},
};

serialnum.next = 10;

let n = serialnum.next;

console.log(n);

while(true) {
	console.log(serialnum.next);
}
