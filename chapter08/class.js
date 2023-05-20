// js 中的对象的使用，早期的版本创建 js 对象方式

// 类的构造函数
function range(from,to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

// methods 为类添加方法
range.methods = {
    // 检查某个值是否在范围内
    includes(x) {return this.from <= x && x <= this.to;},

    // 设置迭代器
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from);x <= this.to;x++) yield x;
    },

    // 返回字符串方法
    toString() {
        let str = "[";
        for (let i = this.from; i <= this.to; i++) {
            str += i
            if (i != this.to)  str += ",";
        }
        str += "]"
        return str;
    },
}

let r = range(1,10);

// 检查某个元素是否存在
console.log(r.includes(2));

// 返回所有的元素字符串
console.log(r.toString());

// 拆解所有元素
console.log([...r]);