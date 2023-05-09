// js 中删除属性

let o1 = Object.create({x: 1,y: 2});

let o2 = Object.create(o1);

let b = delete o2.x;

console.log(b);

let c = delete o2.toString;

console.log(c);
