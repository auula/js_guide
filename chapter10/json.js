// js 中的对象类型正反序列化教程

let o = {
    name : "Leon",
    age: "24",
    skill: ["Java","Clang","Go","Rust","JS"],
    isMan: true,
}

console.log(o);

// 可以将一个对象转换成 JSON 字符串序列
let str = JSON.stringify(o);

console.log(str);

let person = JSON.parse(str);

with(person) {
    console.log(name);
    console.log(age);
    console.log(...skill);
    console.log(isMan);
}