// js 中对象数据属性和访问器属性元编程，用代码去操作代码

let obj = {
    x: 10,
}

// 获取对象的某一个属性的描述符
let ds = Object.getOwnPropertyDescriptor(obj, "x");

// { value: 10, writable: true, enumerable: true, configurable: true }
console.log(ds);


// 这个对象有一个只读的访问属性
const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    }
}

let ds2 = Object.getOwnPropertyDescriptor(random, "octet");

// {
//     get: [Function: get octet],
//     set: undefined,
//     enumerable: true,
//     configurable: true
// }

console.log(ds2);

let ds3 = Object.getOwnPropertyDescriptor({}, "toString");

console.log(ds3 ?? "没有toString可访问属性");

// 为 obj 添加一个属性，并且设置属性参数
Object.defineProperty(obj, "y", {
    value: 100,
    writable: true,
    enumerable: false,
    configurable: true,
});

// 100 
console.log(obj.y);

// [ 'x' ] 没有 y 因为 y 设置为了 不可枚举
console.log(Object.keys(obj));

// 修改 obj 的 y 属性可枚举
Object.defineProperty(obj, "y", {
    enumerable: true,
});

// [ 'x', 'y' ] 可枚举的
console.log(Object.keys(obj));

// 添加一个设置一个访问属性为 octet
Object.defineProperty(random, "octet", { set: function (v) { console.log(v) } });

// 再次获取到 random 属性信息
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

// 通过 random 的 octet 可访问属性设置值
random.octet = 10;


// 批量设置某个对象的属性信息
let obj2 = Object.create(null);

// 对一个空 obj2 对对象添加某个属性和可访问属性
Object.defineProperties(obj2, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 2, writable: false, enumerable: true, configurable: true },
    t: {
        get() {
            return this.x * this.y;
        },
        enumerable: true,
        configurable: true,
    }
});

// 2
console.log(obj2.t);

console.log(Object.getOwnPropertyDescriptors(obj2));


