// 请求地址
const url = "https://randomuser.me/api/";

fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    }
    );