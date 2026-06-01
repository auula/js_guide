// 浏览器提供了 Performance API 来测量代码的性能。我们可以使用 performance.mark() 来标记代码的开始和结束位置，然后使用 performance.measure() 来计算这段代码的执行时间。

// start 标记代码的开始位置
performance.mark("start");

// 执行一些业务逻辑
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

// end 标记代码的结束位置
performance.mark("end");

var result = performance.measure(
    "task",   // 这次测量的名称
    "start",  // 起始标记
    "end"     // 结束标记
);

// 输出测量结果，包括名称、开始时间、结束时间和持续时间
console.log(result);

// 输出耗时，单位为毫秒
console.log(`耗时: ${result.duration} ms`);