// js 中的对象的使用，早期的版本创建 js 对象方式

function range(from,to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes(x) {return this.from <= x && x <= this.to;},

    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from);x <= this.to;x++) yield x;
    },

    toString() {return "(" + this.from + "..." + this.to + ")";}
}