// WeakSet是一种存储对象的集合，类似于Set，但它也是基于弱引用的。
// 这意味着，如果一个对象只被WeakSet引用，而没有被其他地方引用，
// 它可能会被垃圾回收机制回收，即使它存在于WeakSet中。
// WeakSet中的对象必须是唯一的，不能重复。
// 下面是一个使用WeakSet的示例：

const ws = new WeakSet();

const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // 输出: true
console.log(ws.has(obj2)); // 输出: true

ws.delete(obj1);
console.log(ws.has(obj1)); // 输出: false
