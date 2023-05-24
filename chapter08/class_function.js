// js 中类特殊注意点，不能在未申明情况下提前访问

// ReferenceError: Cannot access 'Square' before initialization
// let square = Square(x);

let Square = class {

    constructor(x) {
        this.area = x;
    };

    toArea(){
        return this.area * this.area;
    }
};

let square = new Square(10);

console.log(square.toArea());