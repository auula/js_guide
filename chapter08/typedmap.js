// js 中的所有参数没有类型限制，在作为参数使用的一定要注意

class TypedMap extends Map {

    // 构造函数
    constructor(keyType, valueType, entries) {
        // 是否有值，有值则进去
        if (entries) {
            // 遍历传入的 entries 键值对
            for (let [k, v] of entries) {
                if (!(k instanceof keyType) || !(v instanceof valueType)) {
                    throw new TypeError(`Wrong type for entry [${k},${v}]`);
                }
            }
        }

        // 类型检查通过之后，调用父类的，在此之前不能使用 this 关键字
        super(entries);

        // 保持初始化的类型学校
        this.keyType = keyType;
        this.valueType = valueType;
    }

    set(key, value) {

        if (!(key instanceof this.keyType)) {
            throw new TypeError(`${key} is not of type ${this.keyType.name}`);
        }

        if (!(value instanceof this.valueType)) {
            throw new TypeError(`${value} is not of type ${this.valueType.name}`);
        }

        // 类型检查通过之后使用父类的方法设置
        return super.set(key, value);
    }

}

const myMap = new TypedMap(String, Number, [
    ['key1', 1],
    ['key2', 2],
]);

myMap.set('key3', 3);
myMap.set('key4', 4);

myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
