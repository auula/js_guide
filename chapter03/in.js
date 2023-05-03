// in 操作符会检查某个对象是否包含某个指定的属性

let person = { name: "John", age: 30 };
console.log("name" in person); // 输出 true


let arr = [1, 2, 3];
console.log(0 in arr); // 输出 true
console.log(3 in arr); // 输出 false

