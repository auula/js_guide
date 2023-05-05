// js 使用多种数据结构

let text = "Na nanana na na na na Boom";

let wordSet = new Set(text.split(" "));

let unique = [];

for(let word of wordSet){
	unique.push(word);
}

console.log(unique);
