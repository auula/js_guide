// js 中的可迭代对象的自定义 return 方法
// return 方法在某些情况会使用的
// 可迭代对象在某些时候不需要完全迭代完成就返回
// 例如遇到 return 、break 、continue
// 这些情况此时如果要正确使用迭代器必须自己实现对象的 return 方法

const myObject = {

    data: ['a', 'b', 'c'],

    [Symbol.iterator]() {
        let currentIndex = 0;
        return {
            next: () => {
                if (currentIndex < this.data.length) {
                    const value = this.data[currentIndex];
                    currentIndex++;
                    return { value, done: false };
                }
                return { done: true };
            },
            // 自定义实现 return 逻辑
            return: () => {
                console.log('Iterator terminated early');
                return { done: true };
            }
        };
    }
};

// 使用 for...of 循环迭代对象
for (let item of myObject) {
    console.log(item);
    if (item === 'b') {
        break;
    }
};

// 把对象扩展开
console.log(...myObject);