// js 判断年份是否润年还是平年

let year = 2022;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(year, isLeapYear ? "is leap year." : "is not leap year.");

