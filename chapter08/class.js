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
    toString() {return "(" + this.from + "..." + this.to + ")";}
}

let r = range(1,10);

console.log(r.includes(2));

console.log(r.toString());

console.log([...r]);