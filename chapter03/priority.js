// js 中表达式操作符的优先级

let obj = {
	name: "Leon",
	age: 23,
	skill: [
	function(){
		return "Java";
	},
	function() {
		return "JavaScript";
	}
	],
};

// obj 有一个 skill 属性，并且它是由 skill 函数数组组成
console.log(obj.skill[1]());

console.log(typeof obj.skill[1]())
