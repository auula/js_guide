// js 中类型的静态方法


class Person {

    firstName = "";
    lastName = "";

    constructor(fname,lname) {
        this.firstName = fname;
        this.lastName  = lname;
    }

    // 静态属性构造函数，使用 static 关键字声明的属性为静态
    // 非 static 声明的属性，属于对象实例属性
    static create([fn = "Leon",ln = "Ding"]) {
        return new Person(fn,ln);
    }
}

let name = ["John",,] ?? "Leon Ding";

// 静态构造方法
let p = Person.create(name);

console.log(p);