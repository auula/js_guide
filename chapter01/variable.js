// 此中方式声明变量不推荐

var v1 = 100;

console.log(v1);

// 这种定义变量是全局的

function add() {
	v1 = 100 + v1;
};

add(); 

console.log(v1);
