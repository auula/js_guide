// fetch 请求中断 AbortController 演示

// 一个 echo 服务器地址
const url = "https://httpbin.org/post";

const data = {
    account: 'user001',
    password: 'xdshdiashdhasd'
};

async function fetchWithTimeout(url, options) {
    if (options.timeout) {
        // 创建一个中断控制器
        let controller = new AbortController();
        // 设置一个 中断控制器 的 signal 信号属性
        // 到点了 signal 就会触发
        options.signal = controller.signal;

        setTimeout(() => {
            controller.abort();
        }, options.timeout);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

const options = {
    timeout: 10000,
};

async function fetchData() {
    try {
        const result = await fetchWithTimeout(url, options);

        console.log('Request completed:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
