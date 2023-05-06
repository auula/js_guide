// js 中创建对象方式，和对象的原型链

// 空对象
let empty = {};

// 有属性的对象
let point = {x:0,y:0};

// 复杂的对象
let pointer = {
	x: point.x,
	y: point.y,
	name: "pointer",
};

console.log(pointer);
