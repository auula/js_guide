// js 中的对象类型正反序列化教程

let o = {
    name: "Leon",
    age: "24",
    skill: ["Java", "Clang", "Go", "Rust", "JS"],
    isMan: true,
}

console.log(o);

// 可以将一个对象转换成 JSON 字符串序列
let str = JSON.stringify(o);

console.log(str);

let person = JSON.parse(str);

with (person) {
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

with (dist) {
    console.log(name);
    console.log(age);
    console.log(...skill);
    console.log(isMan);
}

// 格式化一个漂亮的 JSON 字符串，制表符这样格式化之后更漂亮
let s = JSON.stringify(dist, null, '\t');

console.log(s);

// 复活函数针对是 JSON 字符串，反序列化为对象时，使用自定义函数，可以自定义处理对象每个字段
let data = JSON.parse(s, (key, value) => {
    if (key == "isMan") {
        // 改变性别，取反
        return value ? false : true;
    }
    return value;
});

console.log(data);

// 指定哪些字段需要被序列化，没有被列入到数组中字段会被排除掉，
// 并且会按照数组中的元素指定的字段顺序进行。
let text = JSON.stringify(data, ["skill", "isMan"]);

// {"skill":["Java","Clang","Go","Rust","JS"],"isMan":false}
console.log(text);

// 也可以指定一个函数来处理某个属性
let json = JSON.stringify(o, (_, v) => v == "Rust" ? undefined : v);

// {"name":"Leon","age":"24","skill":["Java","Clang","Go",null,"JS"],"isMan":true}
console.log(json);