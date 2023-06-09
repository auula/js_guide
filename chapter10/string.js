// js 中 string 操作 API 和 字符串模式匹配

// g global 全局性

// i 表示不区分大小写

// m 表示匹配多行搜索

// s 表示搜索文本包括换行符

// u 表示匹配完整的 unicode 码点 UTF-16 编码

let count = "JavaScript".search(/script/ui);

// 4
console.log(count);

// -1
console.log("Java".search(/script/ui));

const str = "JavaScript";

console.log(str.replace("Java","Type"));