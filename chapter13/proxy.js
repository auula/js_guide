// js 中对象反射动态代理 Proxy

let obj = { x: 1, y: 2 };

// 这个代理对象可以看做为一个包装对象，类似于设计模式中的适配器模式
let proxy = new Proxy(obj, {});

// { x: 1, y: 2 }
console.log(proxy);

delete proxy.y;
// undefined
console.log(obj.y);

// 定义一个对象类型
class Person {
    name = "Leon";
    age = 24;
}

let p = new Person();


// 通过代理来实现某个类型的 say 方法
let pproxy = new Proxy(p, {
    // 在代理对象里面设置两个控制属性方法
    get: function (obj, prop) {
        if (prop === "say") {
            return `hi my name is ${obj.name} age ${obj.age}.`;
        }
    },
    set: function (obj, prop, args) {
        if (prop === "name") {
            obj.name = args;
        }
    },
});

// 通过代理对象来设置某个属性
pproxy.name = "Leon Ding";

// hi my name is Leon Ding age 24 .
console.log(pproxy.say);