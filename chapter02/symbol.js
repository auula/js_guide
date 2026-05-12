// 使用 Symbol 是值类型，每次使用 Symobl 创建的符合值都不一样
// 即使每次传入 Symbol 的参数一样，返回值也是不一样的
// Symobl 一般都是用来对已有对象添加属性的
// 不会覆盖掉原对象属性的值


// JavaScript 对象属性名长期只有 string，导致“命名冲突”越来越严重。
let person = {
	Sons: ["sons1","sons2","sons3"],
	age: 24,
};

// 如果在大项目中 JS 作为一个动态添加属性的语言，很难知道这个 person 到底有没有 name 这个属性？
// 如果 name 这个属性已经存在了，那么就会覆盖掉原来的值，导致程序出错。
// 但是如果使用 Symbol 来添加属性，就不会有这个问题了，因为每个 Symbol 都是唯一的，不会和其他属性冲突。
console.log(person);

let name = Symbol("name");

person[name] = "Leon";

console.log(person);

// Symbol.for() 会创建一个共享的符号值
// 通过创建的共享符号就可以共享值
// 如果已经存在，就返回已存在的符号

let shared1 = Symbol.for("shared");
let shared2 = Symbol.for("shared");

console.log(shared1 === shared2);

// Symobl.keyFor() 可以返回所有已登记有关的键
console.log(Symbol.keyFor(shared2));
