// js 中的 i18n API 使用，js 提供了关于货币和全球各地时区的 API

// 货币格式化为人民币
let rmb = Intl.NumberFormat("rmb",{
    style : "currency",
    currency: "rmb",
});

let num = rmb.format(100);

console.log(num);