// js 中的 Symbol.species 公认符号

// Symbol.species 的基本使用方法，它允许你在继承中指定衍生对象的构造函数，
// 以便你可以控制返回的实例类型。

class MyArray extends Array { };

// 此时创建的 myArray 是  MyArray 类型实例，而不是 Array
const myArray = new MyArray(1, 2, 3);
const result = myArray.map(item => item * 2);

console.log(result instanceof MyArray); // true

class SpArray extends Array {
    // 通过 Symbol.species 属性来定义返回的构造函数
    static get [Symbol.species]() {
        return Array;
    }
}

const spArray = new SpArray(1, 2, 3);
const result2 = spArray.map(item => item * 2);

console.log(result2 instanceof SpArray); // false
console.log(result2 instanceof Array);   // true




