// js 普通函数可以作为构造函数使用，
// 并且有一个 prototype 属性，用于定义对象实例的原型。
// 通过该原型，对象实例可以继承构造函数的属性和方法。
// 而箭头函数没有自己的 prototype 属性，因为箭头函数本身没有被设计为构造函数。

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, " + this.name);
};
  
const person1 = new Person("John");
person1.sayHello(); // 输出 "Hello, John"
  