// js 中的数组是可迭代的，多数编程语言的数组都是可以迭代的

let word = [... "Hello World"];

console.log(word);

let str = "";

for (const ele of word) {
    str += ele;
}

console.log(str)

let nil = [0,,,,undefined,0,0];

console.log(nil);

let strNil = "";

for (const ele of nil) {
    strNil += ele;
}

console.log(strNil);


// 通过内置的迭代方法实现 索引 和 值 的变量
let everyother = "";

for (const [i,v] of word.entries()) {
    if (i % 2 === 0) everyother += v;
}

console.log(everyother);

word.forEach(v => {
    console.log(v.toLocaleUpperCase());
});