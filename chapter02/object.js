// 对象类型和 null 值的关系

var people = null;

console.log("people type:",typeof people);

function get() {
	console.log("people bool type:",typeof !people);
	if (!people) {
		people = {name:"Leon",age:24};
	}
	return people;
}


console.log(get());
