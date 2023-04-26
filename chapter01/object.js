// 在新版添加的 const 关键字定义不可变量

const obj = {
	name: "Leon Ding",
	age: 23
};



// 访问对象的方式也两种
let name = obj["name"];

let age = obj.age;
console.log("age:",age);

console.log("name:",name);

obj.age = 24;

console.log(obj.age);
