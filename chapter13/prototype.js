// js 中的对象原型链

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(() => { }));

// 判断一个对象是为某一个对象的原型
let p = { x: 1 };

let o = Object.create(p);

// true p 对象是否为 o 的原型
console.log(p.isPrototypeOf(o));


let arr = [1,2,3,4,5];

// 1,2,3,4,5
console.log(arr.join());

// 把 arr 原型设置为 p ，此时就会失去默认的 join 方法
Object.setPrototypeOf(arr,p);

// undefined 运行时异常
// console.log(arr.join());