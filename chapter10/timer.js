// js 中的定时器使用

// 一次性定时器，按照规定时间执行一次就完成任务
let timer = setTimeout(() => console.log("2 秒钟到了！"), 2000);

console.log(timer);

let cycle_clock = setInterval(() => {
    // 清理屏幕
    console.clear();
    // 打印时间
    console.log(new Date().toLocaleTimeString());
},1000); 

// 1 分钟之后停止
setTimeout(() => {
    clearInterval(cycle_clock);
},1000 * 60 * 1);