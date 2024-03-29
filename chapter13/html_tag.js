// js 中的函数模版来实现模版标签
// https://chat.openai.com/share/a86d1921-d23a-40c8-a3a1-b4715adff2a2


// 第一个参数为模版参数，第二个为动态模版参数
function html(strings, ...values) {
    // values 取决于模版字符串中的 ${} 个数
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

// <b>x 1 &lt 2 y</b>
// 过度过滤掉了，原本 1 < 2 是正确的
// fix: <script> </script>
let operator = "1 < 2";

let res = html`<b>x ${operator} y</b>`;

console.log(res);