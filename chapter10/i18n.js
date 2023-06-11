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
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };

// 传入选项
let long_date = Intl.DateTimeFormat("en-US", opts).format(d);

// Saturday, June 10, 2023
console.log(long_date);


// Intl.Collator 针对是字符串比较和内置对象的排序功能，
// 它提供了对不同语言和区域设置的字符串进行排序和比较的功能。
// 编程会面临很多不同国家的语言和文字，而这些国家的文字有着特定字母排序规则，
// 所以可以使用 Intl.Collator 对不同字符和语言进行排序。

// 使用空构造函数，会使用默认的排序方法
const compare = new Intl.Collator().compare;

// 会使用默认的用户地区对字符进行排序
let res = ['a', "c", 'B', "A", "Z", "z"].sort(compare);

// [ 'a', 'A', 'B', 'c', 'z', 'Z' ]
console.log(res);

// 需要排序字符串中包含数字，版本号就为一个例子
const versions = ["v1.1.1", "v1.0.1", "v1.8.2", "v2.0.0"];

// 因为使用数字进行排序数组 numeric 为 ture
// undefined 参数，该参数表示使用默认的语言环境进行比较。
let compare_ver = new Intl.Collator(undefined, {
    numeric: true,
}).compare;

// [ 'v1.0.1', 'v1.1.1', 'v1.8.2', 'v2.0.0' ]
console.log(versions.sort(compare_ver));

