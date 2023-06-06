// WeakMap是一种键值对的集合，其中键是弱引用的。
// 这意味着，如果一个对象只被WeakMap引用，而没有被其他地方引用，
// 它可能会被垃圾回收机制回收，即使它存在于WeakMap中。
// WeakMap的键只能是对象，而值可以是任意类型。
// 下面是一些使用WeakMap的示例代码：

const wm = new WeakMap();

const key1 = {};
const value1 = 'Value 1';

const key2 = {};
const value2 = 'Value 2';

wm.set(key1, value1);
wm.set(key2, value2);

console.log(wm.get(key1)); // 输出: 'Value 1'
console.log(wm.get(key2)); // 输出: 'Value 2'

console.log(wm.has(key1)); // 输出: true

wm.delete(key1);
console.log(wm.has(key1)); // 输出: false
