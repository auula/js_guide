// fetch 如何对数据进行编码请求

// 一个 echo 服务器地址
const url = "https://httpbin.org/post";

// 构建请求体数据
const data = {
    account: 'user001',
    password: 'xdshdiashdhasd'
};

// 创建请求头 Headers
const headers = new Headers();

// 设置请求头信息
headers.set('Content-Type', 'application/json');

// 构建请求配置对象
const requestOptions = {
    // 请求类型
    method: 'POST',
    // 设置请求头部为 JSON 格式
    headers: headers,
    // 将数据转换为 JSON 字符串并作为请求体
    body: JSON.stringify(data)
};

// 发送 post 数据
async function postWithTimeout(url, requestOptions, timeout) {
    try {
        // 发送请求
        const fetchPromise = fetch(url, requestOptions);

        // 设置网络超时
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("HTTP Request timed out"));
            }, timeout);
        });

        // 看谁先完成
        const response = await Promise.race([fetchPromise, timeoutPromise]);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Request completed:', data);

    } catch (error) {
        console.error("An error occurred:", error);
        console.log('Request failed:', error.message);
    }
}

// 设置超时时间为 10 秒
const timeoutMilliseconds = 1000 * 10;

// 设置超时控制
postWithTimeout(url, requestOptions, timeoutMilliseconds);

console.log('Loading...');


