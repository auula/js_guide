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