// js 中的对象原型链

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(() => { }));

// 判断一个对象是为某一个对象的原型
let p = { x: 1 };

let o = Object.create(p);

// true p 对象是否为 o 的原型
console.log(p.isPrototypeOf(o));