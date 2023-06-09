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


// JSON 提供的 API 可以实现对象之间深度复制
function deepcopy(src) {
    return JSON.parse(JSON.stringify(src));
}

// 深度复制教程
let dist = deepcopy(person);

// 比较一下说明是两个不同地址，说明深度复制成功
console.log(dist === person);

with(dist) {
    console.log(name);
    console.log(age);
    console.log(...skill);
    console.log(isMan);
}