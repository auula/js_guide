// 多个 then 语句块组合，存储解析之后的对象

let obj = {};

fetch("https://random-data-api.com/api/v2/users?size=1")
    .then(resopnse => {
        return resopnse.json();
    }).then(profile => {
        Object.assign(obj, profile);
        return obj;
    }).then(obj => {
        console.log(`
        Fetch Data:
        Name: ${obj.first_name} ${obj.last_name},
        Email: ${obj.email},
        `);
    }).catch(error => {
        console.log(error);
    });