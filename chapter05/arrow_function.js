// js 普通函数可以作为构造函数使用，
// 并且有一个 prototype 属性，用于定义对象实例的原型。
// 通过该原型，对象实例可以继承构造函数的属性和方法。
// 而箭头函数没有自己的 prototype 属性，因为箭头函数本身没有被设计为构造函数。

function Person(name) {
    this.name = name;
    // 定义箭头函数，此种函数可以访问上下文中的 this，一般为上层的 this 对象
    this.say = () => {
        console.log("Hello, " + this.name);
    };
}

// 这种箭头函数是无法访问上下文的
Person.prototype.sayHello = () => {
    console.log("Hello, " + this.name);
};

// 此种普通函数带有 prototype 原型属性，其他对象继承并且使用这个方法
Person.prototype.sayHi = function () {
    console.log("Hello, " + this.name);
};


const person1 = new Person("John");
person1.sayHello(); // 输出 "Hello, undefined"
// 这种方式是可以的
person1.sayHi();
// 因为在构造函数中创建的箭头函数是可以访问到上下文的 this 关键字
person1.say();



