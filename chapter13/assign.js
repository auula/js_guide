// js 中的 Object.assign() 不能复制不可枚举的属性

let obj1 = Object.defineProperties({}, {
    x: { value: 10, writable: true, enumerable: true, configurable: true },
    y: { value: 10, writable: true, enumerable: false, configurable: true },
});


let obj2 = Object.defineProperties({}, {
    t: { value: 30, writable: true, enumerable: true, configurable: true },
});


// 只能复制可枚举的
let copy_obj = Object.assign({}, ...[obj1, obj2]);

// {
//     x: { value: 10, writable: true, enumerable: true, configurable: true },
//     t: { value: 30, writable: true, enumerable: true, configurable: true }
// }
console.log(Object.getOwnPropertyDescriptors(copy_obj));
