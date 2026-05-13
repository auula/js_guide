// importScripts 函数是一个全局的同步函数，会阻塞 worker 的执行，直到脚本加载完成。
importScripts('./math.js');

self.onmessage = function (event) {
    console.log("Received message from main thread:", event.data);
    // 调用 math.js 中的 multiply 函数进行计算
    const result = multiply(event.data.a, event.data.b);
    self.postMessage(result);
    self.close();
}