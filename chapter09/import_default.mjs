// export default：export default 用于导出一个默认的值或实体,
// 每个模块只能有一个默认导出，默认导出的变量、函数或类在导入时可以使用不同的名称来引用。
// 默认导出的语法如下所示：export default expression;
// 这里的 expression 可以是任何有效的 JavaScript 表达式。

import Person from './export_default.mjs';

const person = new Person('John', 25);

console.log(person.toString());