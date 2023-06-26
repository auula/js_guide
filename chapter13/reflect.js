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
    
    name = "Leon";
    age = 24;

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}