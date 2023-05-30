// js 中的组合，而不是继承
// 有时候我们为了扩展某个类型的功能会为某个类型创建子类来重用父类的功能
// 也可以重写父类的方法，但是某种情况下需要添加更多功能，可以直接考虑创建
// 新的类型，将要重用的类型直接组合进去使用

class Histogram {
    // 初始化构造函数
    constructor() {
        this.map = new Map();
    }

    // 返回某个键出现的次数
    count(key) {
        return this.map.get(key) || 0;
    }

    // 是否包含某个键
    has(key) {
        return this.count(key) > 0;
    }

    // 返回某个键的大小
    get size() {
        return this.map.size;
    }

    // 为某个键加一操作
    add(key) {
        return this.map.set(key,this.count(key) + 1);
    }

    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            // 如果只剩下一个了，则直接删除
            this.map.delete(key);
        }else if (count > 1) {
            // 否则直接将其次数减一
            this.map.set(key,count - 1);
        }
    }

    [Symbol.iterator]() {
        return this.map.keys();
    }

    keys() {
        return this.map.keys();
    }

    values() {
        return this.map.values();
    }

    entries() {
        return this.map.entries();
    }
}

let m = new Histogram();

m.add("Java");
m.add("Java");
m.add("Go");
m.add("😀");
m.add("😀");
m.add("😀");
m.add("😀");
m.add("JavaScript");

console.log(m.count("Java"));
console.log(m.count("😀"));
console.log(m.has("Java"));

// 因为不是 Map 类型的实现，所以 false
// Histogram 不是 Map 子类
console.log(m instanceof Map);