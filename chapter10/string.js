// js 中 string 操作 API 和 字符串模式匹配

// g global 全局性

// i 表示不区分大小写

// m 表示匹配多行搜索

// s 表示搜索文本包括换行符

// u 表示匹配完整的 Unicode 码点 UTF-16 编码

let count = "JavaScript".search(/script/ui);

// 4
console.log(count);

// -1
console.log("Java".search(/script/ui));

const str = "JavaScript";

console.log(str.replace("Java","Type"));



// 一个匹配 url 的正则，字符串模式匹配
const url = /(\w+):\/\/([\w.]+)\/(\S*)/;

let text = "My Blog at https://ibyte.me/~abc";

let match = text.match(url);

let fullurl, protocol, host, path;

if (match !== null) {
    fullurl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}

// 输出匹配搜索到结果项
console.log(fullurl,protocol,host,path);

