// js 中有一个便捷的操作叫解构

let [x,y] = [1,2];
[x,y] = [y,x];
[x,y] = [y+1,x+1];

console.log(x,y);

function toCartesian(r,theta) {
	return [r * Math.cos(theta),r * Math.sin(theta)];
}

console.log(toCartesian(x,y));

// 从第二个字符启都装进 w 变量中
let [s, ...w] = "Hello World";

console.log(s,w);

let color = {
	r:255,
	g:255,
	b:255,
};

// 解构对象时必须使用大括号
let {r,g,b} = color;

console.log(color);

console.log(r,g,b);


let str = "Hello World";

// 解构字符串的长度属性，并且重命名为 len
let {length:len} = str;

// 打印长度
console.log(len);