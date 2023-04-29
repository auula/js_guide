// js 中的类是对原有的对象类型设计的
// 相比于对象，js 中的类更容易扩展，类是一种创建对象的模版

class Person {
	constructor(name,age) {
		this.name = name;
		this.age  = age;
	}

	sayHello() {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
};


const people = new Person("Tom",24);

people.sayHello(); 
