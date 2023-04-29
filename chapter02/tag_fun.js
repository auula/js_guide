// js 中处理字符串还有一种也是方法，叫标签模版字面量
// 标签模版字面量函数可以将字符串模版作为参数传入到函数内处理

function tag_fun(strings, ...values) {
	console.log(strings);
	console.log(values);
}

const name = 'Leon';

tag_fun`Hello，${ name }`;
