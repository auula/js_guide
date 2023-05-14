// js 中的数组是可迭代的，多数编程语言的数组都是可以迭代的

let word = [... "Hello World"];

console.log(word);

let str = "";

for (const ele of word) {
    str += ele;
}

console.log(str)