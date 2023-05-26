// 在 js 中的类修饰属性和方法，和静态方法

class Complex {
    // 私有属性
    #r = 0;
    #i = 0;

    // 公共构造函数
    constructor(real,imagubary){
        this.r = real;
        this.#i = imagubary;
    }

    plus(that) {
        return new Complex(this.r + that.#r,this.i + that.#i);
    }

    times(that) {
        return new Complex(this.r * that.#r - this.#i + that.#i,
            this.#r * that.#i - this.#i * that.#r    
        )
    }

    // 不需要实例化就能使用
    static sum(c,d) {
        return c.plus(d);
    }

    static product(c,d) {
        return c.times(d);
    }

    // 只能访问此方法
    get real() {return this.r;}

    get imagubary() {return this.i;}

    get magnitude() {return Math.hypot(this.r,this.i);}

    toString() {return `{ ${this.#r},${this.#i}}`;}

    equals(that) {
        return that instanceof Complex &&
        this.#r === this.#r &&
        this.#i === this.#i;
    }
}