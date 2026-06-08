// 本文件演示 Node.js 的运行环境所提供的全局对象和平台相关的信息。

// 使用 node.js 内置的控制台函数输出字符串到标准输出中
console.log("Hello Node.js!");

// 输出当前平台的信息
console.log(`Platform: ${process.platform}`);
// 输出当前 Node.js 版本
console.log(`Node.js Version: ${process.version}`);
// 输出当前系统的 CPU 架构
console.log(`Architecture: ${process.arch}`);

// 获取命令行参数
console.log(process.argv);

// 输出当前工作目录
console.log(`Current Working Directory: ${process.cwd()}`);

// 输出环境变量
console.log('Environment Variables:', process.env);

// 输出当前用户的主目录
console.log(`User Home Directory: ${process.env.HOME || process.env.USERPROFILE}`);

// 输出系统内存信息
console.log(`Total Memory: ${process.memoryUsage().rss} bytes`);
console.log(`Heap Total: ${process.memoryUsage().heapTotal} bytes`);
console.log(`Heap Used: ${process.memoryUsage().heapUsed} bytes`);