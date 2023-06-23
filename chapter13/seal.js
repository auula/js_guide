// js 对象自有属性也不能扩展

// 将一个对象设置为密封的对象，当一个对象被密封后，
// 就意味着不能添加新的属性或删除现有属性，但可以修改现有属性的值。
let obj = {
    name: "father",
    sub: {
        name: "sub",
    },
};

obj.x = 100;


// 100
console.log(obj.x);

// 设置成为密封对象
Object.seal(obj);

// 判断一个对象是否密封,true
console.log(Object.isSealed(obj));

// 不能添加新属性
obj.y = 300;

// undefined
console.log(obj.y);

// 但是可以写改已经有的
obj.x = 1000;

// 1000
console.log(obj.x);

// 冻结一个对象
Object.freeze(obj);

// 因为冻结对象了，不能再修改了，属性变为只读，除非有其他 set 访问属性可以操作
obj.x = 2000;

// 1000 原始值
console.log(obj.x);
