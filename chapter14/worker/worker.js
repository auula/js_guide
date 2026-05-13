console.log("Worker is running...");

// self 是指 worker 线程本身，WorkerGroupScope 是一个全局对象，提供了与主线程通信的方法和属性。
// 我们可以通过 self.onmessage 来监听主线程发送的消息，并通过 self.postMessage 来向主线程发送消息。
self.onmessage = (event) => {
    console.log("Received message from main thread:", event.data);
    // 根据消息类型执行不同的计算任务
    switch (event.data.type) {
        case "compute":
            // 简单的计算任务
            const result = event.data.payload * 2;
            // 将结果发送回主线程
            self.postMessage(result);
            break;
        default:
            console.error("Unknown message type:", event.data.type);
    }
    // 任务完成后关闭 worker
    self.close(); 
}