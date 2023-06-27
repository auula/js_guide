// js 代理中 Proxy.revocable 只不过它除了创建代理对象之外，
// 还创建一个revoke可以调用来禁用代理的函数。
// 代理对象和revoke函数包装在一个普通对象中。

function accessTheDatabase() {
    return 42;
}

// proxy 可以用来操作被代理的对象
let { proxy, revoke } = Proxy.revocable(accessTheDatabase, {});

// 42
console.log(proxy());

// 撤销代理
revoke();


