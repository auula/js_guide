// js 中的 map 数据结构容器，键值对结构

let m = new Map();

m.set("k1",1);
m.set("k2",2);
m.set("k3",3);
m.set("k4",4);

console.log(m.has("k4"));

m.delete("k4");

console.log(m.has("k4"));

let n = new Map([
    ["one","1"],
    ["two","2"],
]);

n.forEach(v => {
    console.log(v);
});

// 通过解构的方式来实现遍历
for (const [k,v] of n.entries()) {
    console.log(k,v);
};

let map = new Map([
    ["one","1"],
    ["two","2"],
]);

// 获取 map 的大小
console.log(map.size);

// 获取某个键的值
console.log(map.get("two"));


// js 作为一种没有严格编程限制的语言，在 Map 类型中可以使用 null 、undefind 、NaN 类型作为键

let sm = new Map([
    [{},1],
    [{},2],
    [{},3],
]);

sm.set(sm,undefined);

console.log(sm);

// 同样是无法删除的
sm.delete({});
console.log(sm.get({}));

console.log(sm);


// Map 是可以迭代的，每个元素都是一个元素位为 2 位的数组
let m2 = new Map([["x",1],["y",2]]);

// 可迭代 Map
for (const [key,value] of m2) {
    console.log(key,value);
}

// 键名
console.log([...m2.keys()]);
// 值名
console.log([...m2.values()]);
// 键和元素名
console.log([...m2.entries()]);

