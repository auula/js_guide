// js 中类的继承关系，原型链

class EZArray extends Array {
    // 获取下标为第一个元素
    get first() {
        return this[0];
    }
    // 获取下标最后一个元素
    get last() {
        return this[this.length - 1];
    }
}

let a = new EZArray();

// 判断当前对象是否为某个类的实例
console.log(a instanceof EZArray);

// 判断当前对象是否为 Array 实例，当前对象原型链上有 Array 所以 true
console.log(a instanceof Array);

a.push(1,2,3,4,5);

console.log(a.pop());

// 我们自定义的方法
console.log(a.first);

// 我们自定义的方法
console.log(a.last);

// true
console.log(Array.isArray(a));

// true
console.log(EZArray.isArray(a));
