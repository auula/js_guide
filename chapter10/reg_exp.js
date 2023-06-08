// js 中的 RegExp 对象使用，正则表达式使用

// 可以忽略双引号
//let pattern = /s$/;

// 是否以 s 结尾
let pattern = new RegExp("s$");

// true 确实以 s 结尾
console.log(pattern.test("alias"));

// 匹配日期格式（DD-MM-YYYY）
const regex = /(\d{2})-(\d{2})-(\d{4})/;

const str = "tomorrow is 07-06-2023.";

let result;

if ((result = regex.exec(str)) !== null) {
    // 完整匹配的日期字符串
    const fullMatch = result[0];
    // 匹配的日期中的天
    const day = result[1];
    // 匹配的日期中的月
    const month = result[2];
    // 匹配的日期中的年
    const year = result[3];

    // 打印匹配到结果
    console.log(`Full match: ${fullMatch}`);
    console.log(`Day: ${day}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
}

