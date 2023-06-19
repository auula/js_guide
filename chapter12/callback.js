// js 中传统的异步调用方式的实现，和回调函数的实现

function performAsyncOperation(callback) {
    // 模拟异步操作
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            callback(null, '操作成功');
        } else {
            callback('操作失败', null);
        }
    }, 1000);
}

performAsyncOperation((error, result) => {
    if (error) {
        console.log('失败:', error);
    } else {
        console.log('成功:', result);
    }
});