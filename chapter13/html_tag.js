// js 中的函数模版来实现模版标签

function html(strings, ...values) {
    let escaped = values.map(v => String(v)
        .replace("&", "&amp")
        .replace("<", "&lt")
        .replace(">", "&gt")
        .replace("\"", "&quot")
        .replace("'", "&#39"));

    let result = strings[0];

    for (let i = 0; i < escaped.length; i++) {
        result += escaped[i] + strings[i + 1];
    }

    return result;
}

let operator = "<";

let res = html`<b>x ${operator} y</b>`;

console.log(res);