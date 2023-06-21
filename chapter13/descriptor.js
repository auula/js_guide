// js 中对象数据属性和访问器属性元编程
// 用代码去操作代码

let obj = {
    x: 10,
}

// 获取对象的某一个属性的描述符
let ds = Object.getOwnPropertyDescriptor(obj,"x");

// { value: 10, writable: true, enumerable: true, configurable: true }
console.log(ds);


// 这个对象有一个只读的访问属性
const random = {
    get octet() {
        return Math.floor(Math.random * 256);
    }
}

let ds2 = Object.getOwnPropertyDescriptor(random,"octet");

// {
//     get: [Function: get octet],
//     set: undefined,
//     enumerable: true,
//     configurable: true
// }

console.log(ds2);

let ds3 = Object.getOwnPropertyDescriptor({},"toString");

console.log(ds3 ?? "没有toString可访问属性");