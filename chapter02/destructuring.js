// js 中有一个便捷的操作叫解构

let [x,y] = [1,2];
[x,y] = [y,x];
[x,y] = [y+1,x+1];

console.log(x,y);

function toCartesian(r,theta) {
	return [r * Math.cos(theta),r * Math.sin(theta)];
}

console.log(toCartesian(x,y));
