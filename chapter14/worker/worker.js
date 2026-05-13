console.log("Worker is running...");

self.onmessage = (event) => {
    console.log("Received message from main thread:", event.data);
    // 简单的计算任务
    const result = event.data * 2;
    // 将结果发送回主线程
    self.postMessage(result); 
}