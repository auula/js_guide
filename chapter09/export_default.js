// 使用 export default 关键字可以将一个模块标记为默认导出，
// 一个模块只能有一个默认导出可以在其他文件中使用，
// import 关键字引入时，不需要解构或者指定导入的模块。


// console.log(import.meta.url);

export default class Person {

    #name = "";
    #age = 1;

    // 默认的构造器
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this.name;
    };

    get age() {
        this.name = age;
    }

    toString() {
        return "Hi! i am ${this.#name} , age is ${this.#age} .";
    }

}

