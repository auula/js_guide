// 当使用defer属性时，脚本会被延迟执行，直到HTML文档完全被解析和显示之后再执行。
// 多个带有defer属性的脚本会按照它们在文档中出现的顺序依次执行。
// 延迟执行脚本可以在文档解析过程中进行其他操作，然后再执行脚本，这有助于提高页面的加载性能。


// const dp = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("defer.js 总是最后一次执行的。")
//     }, 2000);
// });

// dp.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });

console.log("defer.js 总是最后一次执行的。");

console.log(document.readyState);

