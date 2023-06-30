// 异步执行脚本可以加快页面的加载速度，特别适用于那些不依赖于其他脚本的独立脚本。
// 当使用async属性时，脚本会异步加载并立即执行，不会阻塞HTML文档的解析。
// 多个带有async属性的脚本之间的执行顺序是不确定的，哪个脚本先加载完成就先执行哪个。

// const ap = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("async.js 文件嵌入到 HTML 中的 JS 异步执行了。")
//     }, 2000);
// });

// ap.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });

console.log("async.js 文件嵌入到 HTML 中的 JS 异步执行了。");

console.log(document.readyState);

