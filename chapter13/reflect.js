// js 中的反射特性使用，Reflect 对象提供一系列的关于反射的 API 函数。


let obj = {
    name: "Leon",
}

function f(params) {
    console.log(this);
    console.log(params);
}

// 将 f 函数绑定到 obj 对象上，并且传入一组参数数组
Reflect.apply(f, obj, ["Leon"]);


class People {

    name = "";
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        // 默认 [class People]
        console.log(new.target);
    }
}

// 通过反射创建一个类型的对象
let p = Reflect.construct(People, ["Leon", 24]);

// People { name: 'Leon', age: 24 }
console.log(p);

// 通过反射创建一个类型的对象，指定 new.target
let p2 = Reflect.construct(People, ["Leon", 24], Object);

// [Function: Object]
// People { name: 'Leon', age: 24 }
console.log(p2);

var obj2 = { x: 1, y: 2 };
let x = Reflect.get(obj2, "x"); // 1

console.log(x);

// Array
let y = Reflect.get(["zero", "one"], 1); // "one"

console.log(y);