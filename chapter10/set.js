// js 中的标准的 Set 类型 API 使用

let s = new Set();

// set 元素的个数
console.log(s.size);

s.add(1);
s.add(2);

// 添加一个布尔类型的元素
s.add(true);

console.log(s.size);

// 添加一个数组元素
console.log(s.add([10,20,30]));

console.log(s.size);

// 删除元素
s.delete(true);

console.log(s.size);

// 清理所有元素
s.clear()

console.log(s);