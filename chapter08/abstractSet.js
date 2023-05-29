// js 中的抽象类使用，js 没有原生提供 abstract 的支持
// 但是可以提供 extends 来实现某个预定义的类


// 抽象类可以作为一组子类的父类
// 抽象类型可以定义子类的部分功能实现让类型共享

class abstratSet {
    // 不允许直接初始化创建
    constructor() {
        if (new.target) {
            throw new TypeError("abstractSet not initialized, need to use extends subclasses to implement.");
        }
    }
    // 公共的抽象方法
    has(x) {throw new Error("abstractSet method.")}
}


let aset = new abstratSet();