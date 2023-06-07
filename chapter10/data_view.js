// js 中的 DataView 也是基于 ArrayBuffer 之上的数据类型
// 它可以指定读取和存储字节序的位置和偏移量和大小

const buffer = new ArrayBuffer(16);

// 使用 DataView 视图读写 ArrayBuffer 中的数据
const dataView = new DataView(buffer);

console.log(dataView);

// 在偏移量 0 处写入 16 位有符号整数
dataView.setInt16(0, 100); 

console.log(dataView);

// 从偏移量 0 处读取 16 位有符号整数
const value = dataView.getInt16(0); 

// 输出: 100
console.log(value); 

dataView.setInt16(5,200,false);

console.log(dataView);
