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
headers.set('foo', 'bar');
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

        // 设置网络超时，这里会影响到运行时主进程，阻塞到超时时间到为止
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("HTTP Request timed out"));
            }, timeout);
        });

        // 使用 Promise.race 来等待谁先完成
        const result = await Promise.race([fetchPromise, timeoutPromise]);

        if (result instanceof Response) {
            const data = await result.json();
            console.log('Request completed:', data);
        } else {
            // 请求超时
            throw result;
        }

    } catch (error) {
        console.error("An error occurred:", error);
        console.log('Request failed:', error.message);
    }
}

// 设置超时时间为 10 秒
const timeoutMilliseconds = 1000 * 10;

// 设置超时控制
const fetchPromise = postWithTimeout(url, requestOptions, timeoutMilliseconds);

fetchPromise.then(() => {
    console.log('Done.');
});

console.log('Loading...');
