// js 中的 switch 语句，最好不要中 case 中写数值表达式

function convert(x) {
	switch(x) {
		case "number":
			return x.toString(16);
		case "string":
			return '"' + x + '"';
		default:
			return x.toString();
	}
}

let s = {
	name: "Leon",
	age: 23,
	skill: ["Java","JavaScript","Go","Rust"],
}

console.log(convert(s).toString())
