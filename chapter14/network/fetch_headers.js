// 请求地址
const url = "https://randomuser.me/api/";

fetch(url)
    .then(response => {
        // 通过 response 分析请求状态
        if (!(response.ok && response.status === 200)) {
            throw new Error("http error: " + response.status);
        }
        return response;
    })
    .then(response => {
        // 遍历输出 response 请求头
        for (const [key, value] of response.headers) {
            console.log(`${key}: ${value}`);
        }
        return response;
    })
    // 解析为 json 数据
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    // 捕获错误
    .catch(error => console.log(error));