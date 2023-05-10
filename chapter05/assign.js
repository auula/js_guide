// js 中的对象复制和赋值，从另外一个对象复制属性的值到这个新对象中

let o1 = {
	name: "Leon",
	age: 24,
	skill: ["Java","JS","Go","Rust"],
};

let o2 = {};

Object.assign(o2,o1);

console.log(o2);
