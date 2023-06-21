// 多个 then 语句块组合，存储解析之后的对象

let obj = {};

// fetch 多任务异步处理例子
fetch("https://random-data-api.com/api/v2/users?size=1")
    // 当成功请求到数据式就解析为 json
    .then(resopnse => {
        return resopnse.json();
        // 把一个 then 得到 JSON 数据作为 profile 实参    
    }).then(profile => {
        return Object.assign(obj, profile);
        // json 数据成功被反序列化为 obj 对象    
    }).then(obj => {
        console.log(`
        Fetch Data:
        Name: ${obj.first_name} ${obj.last_name},
        Email: ${obj.email},
        `);
        // 如果出现了错误，catch 会捕获到    
    }).catch(error => {
        console.log(error);
    });