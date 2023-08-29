// fetch 如何对数据进行编码请求

// 一个 echo 服务器地址
const url = "https://httpbin.org/post";


// 构建请求体数据
const data = {
    account: 'user001',
    password: 'xdshdiashdhasd'
};

// 构建请求配置对象
const requestOptions = {
    // 请求类型
    method: 'POST',
    // 设置请求头部为 JSON 格式
    headers: {
        'Content-Type': 'application/json'
    },
    // 将数据转换为 JSON 字符串并作为请求体
    body: JSON.stringify(data)
};

// 发送 post 数据
async function post(url, requestOptions) {
    try {
        // 发送请求
        const response = await fetch(url, requestOptions);
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

post(url, requestOptions);

console.log('Loading...');


