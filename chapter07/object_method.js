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

// js 对象方法级联调用
let s = {
    x: function(x) {
      this.x = x;
      return this;
    },
    y: function(y) {
      this.y = y;
      return this;
    },
    t: function(t) {
      this.t = t;
      return this;
    },
  };
  
s.x(100).y(200).t(300);
  
console.log(s.x, s.y, s.t);

// 会隐式调用的 valueof() 方法
console.log(s + "sss");

