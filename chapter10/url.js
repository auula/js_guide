// js 中提供原生解析 URL 的 API

// 解析一个 url 地址的参数
let url = new URL("https://www.ibyte.me/index.php/archives/96/");

console.log(url.host);
console.log(url.href);
console.log(url.protocol);
console.log(url.port);
console.log(url.searchParams);
console.log(url.pathname);
console.log(url.password);


// 手动构建 URL 和其中的参数
let query = new URL("https://www.google.com");
// 构建子路径
query.pathname = "search";
// 构建搜索参数
query.search = "q=query";

// https://www.google.com/search?q=query
console.log(query.toString());

// 清空 search 属性

query["search"] = null;

// 使用 URLSearchParams 对象构造参数
let params = new URLSearchParams();

// 添加参数键值对
params.append("q","term");

query.search = params;

// https://www.google.com/search?q=term
console.log(query.toString());




