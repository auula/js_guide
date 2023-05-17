// js 中对象方法属性
let obj = {name:"Leon"};

obj.SayHi = function() {
    console.log(`Hi,i am is ${this.name}!`);
};

obj.SayHi();

// 为对象添加方法
let calculator = {
    operand1: 10,
    operand2: 20,
    add() {
        this.result = this.operand1 + this.operand2;
    }
};

// 执行添加函数
calculator.add();
// 计算结果
console.log(calculator.result);