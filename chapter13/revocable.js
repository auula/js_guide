function accessTheDatabase() { 
    return 42;
}

// proxy 可以用来操作被代理的对象
let { proxy, revoke } = Proxy.revocable(accessTheDatabase, {});

// 42
console.log(proxy());

// 撤销代理
revoke();
