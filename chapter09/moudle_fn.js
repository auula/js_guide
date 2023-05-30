// js 中早期版本复用代码模块的作用

// 模块A
var moduleA = (function () {
    // 模块代码
    function toDo() {
        console.log("module A toDo.")
    }

    function doSomething() {
        console.log("module A doSomething.");
    }
    return { toDo, doSomething };
})();

// 模块B
var moduleB = (function () {
    // 使用模块A
    var result = moduleA.doSomething();
    // 模块B的代码
    function print() {
        console.log(result());
    }
    return [print];
})();

// 因为返回的是元祖，所以使用下标进行访问
moduleB[0];