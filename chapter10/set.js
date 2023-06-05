// js 中的标准的 Set 类型 API 使用

let s = new Set();

// set 元素的个数
console.log(s.size);

s.add(1);
s.add(2);

// 添加一个布尔类型的元素
s.add(true);

console.log(s.size);

// 添加一个数组元素
console.log(s.add([10, 20, 30]));

console.log(s.size);

// 删除元素
s.delete(true);

console.log(s.size);

// 清理所有元素
s.clear()

console.log(s);


// 添加相同元素测试，元素值可以是相同的，但是并不代表它们是相等的

s.add([1, 2, 3]);

s.add([1, 2, 3]);

// Set(2) { [ 1, 2, 3 ], [ 1, 2, 3 ] }
console.log(s);

// 这里是无法删除的，要删除必须使用引用的方式进行删除
console.log(s.delete([1, 2, 3]));

console.log(s);

let a = Array.of(1, 2, 3, 4, 5);
let b = Array.of(1, 2, 3, 4, 5);

console.log(a === b);

console.log(arraysAreEqual(a, b));

s.add(a);

s.add(b);

console.log(s);

// 使用引用来删除相同的数组元素
s.delete(a);

console.log(s);

// 深度比较
function arraysAreEqual(arr1, arr2) {
    // 检查数组长度是否相等
    if (arr1.length !== arr2.length) {
        return false;
    }

    // 逐个比较数组元素
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// 清空 s
s.clear();

s.add([1,2,3,4,5,6,7,8]);

// 拆解并且转换成数组，并且去掉外面一层
console.log([...s].flat(1));
