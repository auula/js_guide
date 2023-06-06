// es6 中新添加了定向数组和二进制数据

// 在 js 中默认的数组类型是没有类型的，元素可以是任意的数据类型
let arr = Array.of(1, 2, 3, 4, "5", "6.6", true);

console.log(arr);

// 而在新的 es6 版本中添加了定向数组类型，
// 可以在创建数组的时候就可以指定数组的类型。
// 支持的类型有 Int8 Uint8 Int16 Uint16 Int32 Uint32 
// BigInt64 BigUint64 Float32 Float64
// 大小和类型占用有关，比无类型的数组占用内存要小

// 一个无符号 8 位整数占据 8 个位（或 1 个字节）的存储空间。
// 在二进制表示中，它可以表示的最大值为 11111111（或者用十六进制表示为 0xFF），
// 这对应于十进制的 255，1024 字节的数组。
let bytes = new Uint8Array(1024);

// 直接提供构造函数创建的元素默认值都是为对应类型的默认值
console.log(bytes);

// 如果参数传入的是浮点数会截取为整数、长整数倍截短尾 8 位
let ui8a = Uint8Array.of(3.1415927, 2.99, 45000);

// Uint8Array(3) [ 3, 2, 200 ]
console.log(ui8a);

// 可以使用每个类型的常量 BYTES_PER_ELEMENT 查看元素字节大小
console.log(Uint8Array.BYTES_PER_ELEMENT);
console.log(Uint16Array.BYTES_PER_ELEMENT);
console.log(Uint32Array.BYTES_PER_ELEMENT);

// Uint8ClampedArray 和 Uint8Array 的区别
// 主要是看做他们在处理数组元素在不合法情况下的处理策略
// Uint8Array 允许 0 - 255 范围的

// 创建一个长度为 1 的 Uint8Array
const not_legal = new Uint8Array(1); 

// 给 Uint8Array 赋值一个小于 0 的值
not_legal[0] = -10; 
// 输出: 246
console.log(not_legal[0]); 

// 给 Uint8Array 赋值一个大于 255 的值
// 当你给 Uint8Array 赋值一个小于 0 或大于 255 的值时，
// 它会进行模运算，将值转换为合法的范围内的整数。
not_legal[0] = 300; 
// 输出: 44
console.log(not_legal[0]); 

console.log((300 % 256) === not_legal[0]);

// 当你给 Uint8ClampedArray 赋值一个小于 0 的值时，它会将该值强制设为 0；
// 当你给它赋值一个大于 255 的值时，它会将该值强制设为 255。
let legal = new Uint8ClampedArray(1);
legal[0] = 255;
console.log(legal[0]);

legal[0] = 300;

console.log(legal[0] === 255);

// 从另外一个可迭代数组中得到一个新类型数组，类型不匹配会默认转换
let ints = Uint32Array.from(legal);

console.log(ints);

