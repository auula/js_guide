// 本文件演示 ES6 中的 MessageChannel 对象使用演示。
// 类似于 Go 语言中的 channel，MessageChannel 允许我们在不同的上下文之间进行通信，例如在不同的窗口、iframe 或者 Web Worker 之间。
// 类似于 Java 语言中的双端阻塞队列 BlockingDeque，MessageChannel 提供了两个端口（port1 和 port2），它们可以相互发送消息。

// MessageChannel 对象允许我们创建一个新的消息通道，包含两个 MessagePort 对象
const channel = new MessageChannel();

// 通过 port1 发送消息，就会触发 port2 的消息事件
channel.port1.postMessage('Hello from port1!');

// 监听 port2 的消息事件
channel.port2.onmessage = (event) => {
  console.log('Received message on port2:', event.data);
};

// 通过 port2 发送消息，会触发 port1 的消息事件
channel.port2.postMessage('Hello from port2!');

// 监听 port1 的消息事件
channel.port1.onmessage = (event) => {
  console.log('Received message on port1:', event.data);
};

// 输出:
// Received message on port2: Hello from port1!
// Received message on port1: Hello from port2!