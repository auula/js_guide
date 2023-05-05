// js 中的 wtih 会将一个变量的属性提升到一个作用域

let s = {
	name: "Leon",
	age: 23,
	skill: ["Java","Go","Rust"],
}

with (s) {
	age = 24;
	console.log(skill);
}

console.log(s);
