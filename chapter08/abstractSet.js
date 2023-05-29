// js 中的抽象类使用，js 没有原生提供 abstract 的支持
// 但是可以提供 extends 来实现某个预定义的类


// 抽象类可以作为一组子类的父类
// 抽象类型可以定义子类的部分功能实现让类型共享

class AbstractSet {
    // 不允许直接初始化创建
    constructor() {
        if (new.target === AbstractSet) {
            throw new TypeError("AbstractSet not initialized, need to use extends subclasses to implement.");
        }
    }
    // 公共的抽象方法
    has(x) {throw new Error("AbstractSet method.")}
}


let aset = new AbstractSet();

class MySet extends AbstractSet  {
    // 私有的 set 成员
    #set = null;

    constructor() {
        super();
        this.#set = new Set();
    }

    has(x) {
        return this.#set.has(x);
    }

    add(v) {
        this.#set.add(v);
    }
}

let ms = new MySet();

ms.add(1);
ms.add(2);
ms.add(3);
ms.add(4);

console.log(ms.has(4));
console.log(ms.has(5));

