// js 中的 ArrayBuffer 类型使用，它是会在内存中连续分配存储空间
// 它自己本身的引用是无法操作的，需要当成参数传入到其他类型中使用

// size 是要分配的字节数，表示缓冲区的大小，
// 要创建一个具有 16 个字节的缓冲区。
const buffer = new ArrayBuffer(16);

console.log(buffer);

const uint8Array = new Uint8Array(buffer);

console.log(uint8Array);

// 使用 Uint8Array 视图读写 ArrayBuffer 中的数据
uint8Array[0] = 42;

// 在索引 0 处写入值，输出: 42
console.log(uint8Array[0]); 