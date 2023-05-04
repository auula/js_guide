// js 中条件流程控制语句，要比其他语言更方便但是也要主要副作用

let flag = false;

if ( 23 > 18) flag = true;

console.log(flag);


let age = 23;

if (age > 0 && age <= 10) {
	console.log(age,"小屁孩一个！");
} else if (age > 10 && age <= 18) {
	console.log(age,"青少年时代。");
} else {
	console.log("成年人了。");
}
