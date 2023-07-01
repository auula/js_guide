// js 中创建对象方式，和对象的原型链

// 空对象
let empty = {};

// 有属性的对象
let point = { x: 0, y: 0 };

// 复杂的对象
let pointer = {
	x: point.x,
	y: point.y,
	name: "pointer",
};

console.log(pointer);

// 通过内置的 Object 类型的方法创建
// 此种方式创建的有原型属性： Object.prototype
let o1 = Object.create({ x: 1, y: 2 });

console.log(o1.x + o1.y);

// 创建 null 的对象，不会继承任何东西，连 toString() 也没有用
let o2 = Object.create(null);

console.log(o2);

// 具有 Object.prototype 这样的属性
let o3 = Object.create(Object.prototype);


