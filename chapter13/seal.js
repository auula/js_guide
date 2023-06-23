// js 对象自有属性也不能扩展


let obj = {
    name: "father",
    sub: {
        name: "sub",
    },
};

// 设置对象自己不能被扩展
Object.preventExtensions(obj);

// 无效
obj["x"] = 100;

// undefined
console.log(obj.x);

// 为属性子对象添加一个 x 属性
obj.sub["x"] = 200;

// 200
console.log(obj.sub.x);