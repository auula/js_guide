// js 中的 constant 关键字定义的变量

const fruit = '🍎';

console.log(fruit);

// TypeError: Assignment to constant variable.
// fruit = '🍋';

console.log(fruit);

const fruits = Array.of('🍎','🍋');

fruits.push('🍌');
fruits.push('🍉');

console.log(...fruits);

// TypeError: Assignment to constant variable.
fruits = [];

console.log(fruits);