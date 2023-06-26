// js 中对象反射动态代理 Proxy

let obj = { x: 1, y: 2 };

// 这个代理对象可以看做为一个包装对象，类似于设计模式中的适配器模式
let proxy = new Proxy(obj,{});

// { x: 1, y: 2 }
console.log(proxy);

delete proxy.y;
// undefined
console.log(proxy.y);