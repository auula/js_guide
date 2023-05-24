// js 中类特殊注意点，不能在未申明情况下提前访问

// ReferenceError: Cannot access 'Square' before initialization
// let square = Square(x);

let Square = class {
    // 此种方式创建的 class 对象名称由外部定义
    constructor(x) {
        this.area = x;
    };

    toArea(){
        return this.area * this.area;
    }
};

let square = new Square(10);

console.log(square.toArea());