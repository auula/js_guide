// js 中的反射特性使用，Reflect 对象提供一系列的关于反射的 API 函数。


let obj = {
    name : "Leon",
}

function fun(params) {
    console.log(params);
}

Reflect.apply(fun,obj,"Leon");