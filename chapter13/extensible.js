// js 中的对象是可以扩展属性的，添加新的属性

let obj = {};

obj["x"] = 100;

// 100
console.log(obj.x);

// 对象是否可扩展 true
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj);

obj.y = 200;

// undefined
console.log(obj.y);


// 原型对象
let prevent = { x: 10 };

// 从原型对象上再创建一个子对象
let child = Object.create(prevent);

// 设置子对象不可扩展属性
Object.preventExtensions(child);

console.log(child.x);

// 因为 preventExtensions 设置不可扩展所以这里不能正常设置
child["y"] = 200;

// undefined
console.log(child.y);

// preventExtensions 不能限制对象的原型对象的扩展属性
prevent.y = 200;

// 此时这个子对象就可以访问到 y 属性了 200
console.log(child.y);


