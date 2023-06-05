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


