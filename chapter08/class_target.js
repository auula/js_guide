// js 中传统构造函数，中属性 new.target 使用


// https://www.bookstack.cn/read/es6-3rd/spilt.6.docs-class.md
function Foo() {
    // 必须是通过 new 关键字调用次函数才能正常运行
    if (!new.target) throw "Foo() must be called with new";
    console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"

class A {
    constructor() {
        // 返回都是当前实例化的类名称
        console.log(new.target.name);
    }
}

class B extends A { constructor() { super(); } }

var a = new A(); // logs "A"
var b = new B(); // logs "B"

class C { constructor() { console.log(new.target); } }
class D extends C { constructor() { super(); } }

var c = new C(); // logs class C{constructor(){console.log(new.target);}}
var d = new D(); // logs class D extends C{constructor(){super();}}




