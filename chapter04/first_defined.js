// 先定义表达式，在某些时候 js 中的 0 、false 、undefined 是会有副作用

let options = {
	dir: null,
	level: 5,
	verbose: false,
};

// 如果 dir 是没有值，则会使用先定义表达式设置的默认值
options.dir = options.dir ?? "/home/dings/test.txt";

console.log(options);
