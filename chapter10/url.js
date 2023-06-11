// js 中提供原生解析 URL 的 API

let url = new URL("https://www.ibyte.me/index.php/archives/96/");

console.log(url.host);
console.log(url.href);
console.log(url.protocol);
console.log(url.port);
console.log(url.searchParams);
console.log(url.pathname);
console.log(url.password);