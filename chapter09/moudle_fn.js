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


// 默认返回的 toDo 函数可以直接使用，因为暴露出来了
moduleA.toDo();

// 因为返回的是元祖，所以使用下标进行访问
moduleB[0];