// js 中的 i18n API 使用，js 提供了关于货币和全球各地时区的 API

// 货币格式化为人民币
let rmb = Intl.NumberFormat("rmb", {
    style: "currency",
    currency: "rmb",
});

let num = rmb.format(100);

// RMB 100.00
console.log(num);

let data = [0.05, .75, 1.11, 1, .99999];

let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
}).format;

// [ '5.0%', '75.0%', '111.0%', '100.0%', '100.0%' ]
console.log(data.map(formatData));


// 日期国际的 API 
let d = new Date("2023-06-10T13:14:15Z");


// 通过地区代码来获取对应时区的日期格式
let time = Intl.DateTimeFormat("en-US").format(d);
// 6/10/2023
console.log(time);

// 日期格式可以指定对应的选项
let opts = {weekday:"long",month:"long",year:"numeric",day:"numeric"};

// 传入选项
let long_date = Intl.DateTimeFormat("en-US",opts).format(d);

// Saturday, June 10, 2023
console.log(long_date);