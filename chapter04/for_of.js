// js 中有多种循环，这里介绍基于 for of 循环，主要是用来遍历对象类型的

for (let ele of [1,2,3,4,5,6,7,8,9,0]) {
	console.log(ele);
}

// for of 还可以用来遍历对象属性
let s = {
	name: "Leon",
	age: 23,
	skill: ["Java","JavaScript","Go","Rust"],
}

// 直接遍历对象是错误的，需要使用 Object.keys() 来访问对象的属性
for (let ele of Object.keys(s)) {
	console.log(ele);
}

// 再通过 Object.values 来遍历访问对象属性对应的值
for (let ele of Object.values(s)) {
	console.log(ele);
}

// 通过 Object.entries 进行访问对象属性和元素的值
for (let [k,v] of Object.entries(s)) {
	console.log(k," : ",v);
}

//for (let v of Object.keys(s)) {
//	if (v === "skill") {
//		for (let v of v) {
//			console.log(v);
//		}
//	}
//}

for (let e in s) {
	console.log(s[e]);
}
