// 采用 ES6 模块化的方式编写 Web Worker 的代码
import { add } from "./math_mod.js";

// 计算密集型任务，使用 Web Worker 来处理
self.onmessage = (event) => {
  self.postMessage(add(event.data));
}

// 任务完成后关闭 worker
self.close(); 