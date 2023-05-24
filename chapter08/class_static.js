// js 中类型的静态方法


class Person {

    firstName = "";
    lastName = "";

    constructor(fname,lname) {
        this.firstName = fname;
        this.lastName  = lname;
    }

    static create([fn = "Leon",ln = "Ding"]) {
        return new Person(fn,ln);
    }
}

let name = ["John",,] ?? "Leon Ding";

// 静态构造方法
let p = Person.create(name);

console.log(p);