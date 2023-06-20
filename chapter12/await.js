// js 中的 awiat 和 async 异步调用使用


// 传入一个 url 获取对应的数据
async function getJSON(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

let data = await getJSON("https://random-data-api.com/api/v2/users?size=1");

console.log(data);