// js 自有属性和原型链

let o = {};

o.x = 20;

let d = Object.create(o);

d.y = 23;

let z = Object.create(d);

console.log(z.toString());

let n = z.x + z.y;

console.log(n);
