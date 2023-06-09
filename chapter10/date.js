// js 中的日期类型，可以使用 Date 类型构造器创建和使用
let now = new Date();

// 打印输出当前的日期
console.log(now);

// 可以通过 Date() 构造函数创建一个指定日期的对象
// 2023 年 6 - 1 月 8 日 15 点 16 分 04 秒 2 微妙
let century = new Date(2023, (6 - 1), 8, 15, 16, 04, 2);

console.log(century);

// 如果在构造函数传入 0 那么创建的新日期对象会从 1970 年 1 月 1 日 0 时开始
let epoch = new Date(0);

console.log(epoch);

// 默认使用 Date 构造函数创建的日期对象为本机设置的对应的时区
let utc = new Date(Date.UTC(2023, 6 - 1, 8));

console.log(utc);

// 字符串输出日期
console.log(utc.toString());

// 转换为 UTC 时间字符串
console.log(utc.toUTCString());

// 转换为 ISO 时间字符串
console.log(utc.toISOString());



