// js 中的对象原型链

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(() => { }));

// 判断一个对象是为某一个对象的原型
let p = { x: 1 };

let o = Object.create(p);

// true p 对象是否为 o 的原型
console.log(p.isPrototypeOf(o));


let arr = [1, 2, 3, 4, 5];

// 1,2,3,4,5
console.log(arr.join());

// 把 arr 原型设置为 p ，此时就会失去默认的 join 方法
Object.setPrototypeOf(arr, p);

// undefined 运行时异常
// console.log(arr.join());


let c = { z: 3 };

let d = {
    x: 1,
    y: 2,
    // 通过 __proto__ 字面量的方式设置 d 的原型为 c
    __proto__: c
};

// { x: 1, y: 2, __proto__: { z: 3 } }
console.log(d);

// true
console.log(c.isPrototypeOf(d));