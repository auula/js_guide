// 本文件演示 Node.js 中的 Process 中的 signal 信号和 exception 处理。

// 监听 SIGINT 信号（通常由 Ctrl+C 触发）
process.on('SIGINT', () => {
    console.log('Received SIGINT. Exiting gracefully...');
    process.exit(0); // 退出程序
});

// 监听未捕获的异常
// process.on('uncaughtException', (err) => {
//     console.error('Uncaught Exception:', err);
//     process.exit(1); // 以错误状态退出程序
// });

process.setUncaughtExceptionCaptureCallback((err) => {
    console.error('Captured Uncaught Exception:', err);
    // 可以选择继续运行程序，或者退出
    process.exit(1);
});

// 模拟一个未捕获的异常
setTimeout(() => {
    throw new Error('This is an uncaught exception!');
}, 1000);  