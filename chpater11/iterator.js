// js 中可迭代对象和迭代器实现

let sum = 0;

let arr = [1,2,3,4,5];

// 数组是可以迭代的
for(const i of arr) {
    sum += i;
}

console.log(sum);

// 找出数组中最大值，arr 是可以扩展的 
console.log(Math.max(...arr));