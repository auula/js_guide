// js 中的函数模版来实现模版标签
// https://chat.openai.com/share/a86d1921-d23a-40c8-a3a1-b4715adff2a2


// 第一个参数为模版参数，第二个为动态模版参数
function html(strings, ...values) {
    let escaped = values.map(v => String(v)
        .replace("&", "&amp")
        .replace("<", "&lt")
        .replace(">", "&gt")
        .replace("\"", "&quot")
        .replace("'", "&#39"));

    // 这里的 result 是通过 ${ 分割的，所以
    // strings[0] 是 <b>x 
    // strings[1] 是 y</b>
    let result = strings[0];

    for (let i = 0; i < escaped.length; i++) {
        result += escaped[i] + strings[i + 1];
    }

    return result;
}

let operator = "<";

let res = html`<b>x ${operator} y</b>`;

console.log(res);