// js 中对象属性的可配置和可写冲突


let obj = Object.defineProperty({}, "x", {
    writable: false,
    configurable: true,
    value: 10,
});

// 10
console.log(obj.x);

// 不可写
obj.x = 100;

// 10
console.log(obj.x);

// 因为初次创建的 obj x 属性配置的是可配置
Object.defineProperty(obj, "x", {
    value: 200,
})

// 此时已经被修改了
console.assert(obj.x === 200);
