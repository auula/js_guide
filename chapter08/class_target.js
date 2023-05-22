// js 中传统构造函数，中属性 new.target 使用

function Person(name) {
    console.log(new.target);
}
  
function Student(name) {
    Person.call(this, name);
}
  
var person1 = new Person("John"); // 输出 Person
var student1 = new Student("Alice"); // 输出 Student
  