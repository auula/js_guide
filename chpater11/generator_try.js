// js 中的 yield 关键字的 try 和 finally 语句使用，
// throw 一样可以被使用，用了处理异常错误情况。

// 在自定义可迭代对象中可以复写 return 方法，
// 但是在 yield 生成器中是无法使用 return 方法，
// 但是可以在 yield 语句中使用 try catch 语句处理。

// 生成器通过 yield 返回值
// 调用者通过 next 方法参数传值


// 每次调用 next 方法时，会将传入的参数作为上一个 yield 表达式的结果，
// 并使生成器函数继续执行，直到遇到下一个 yield 表达式或函数结束。
// 生成器函数的返回值可以通过 value 属性获取，
// 而 done 属性则表示生成器函数是否已经执行完毕。
function* smallNumbers() {
    console.log("next() 第 1 次参数会被丢弃.");
    let y1 = yield 1;
    console.log("next() 第 2 次参数是 y1 值.", y1);
    let y2 = yield 2;
    console.log("next() 第 3 次参数是 y2 值.", y2);
    let y3 = yield 3;
    console.log("next() 第 4 次参数是 y2 值.", y3);
    return 4;
}

// 每取出一个元素，yield 都会控制代码停止，
// 直到下一个 next 被取值才执行，执行时是上次 next 传入参数作为起点
let g = smallNumbers();

// a 参数被丢弃了
let n1 = g.next("a");

console.log(n1);

let n2 = g.next("b");

console.log(n2);

let n3 = g.next("c");

console.log(n3);

let n4 = g.next("d");

console.log(n4);

let n5 = g.next("e");

console.log(n5);