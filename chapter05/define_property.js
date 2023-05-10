// js 可以通过对象的 define property 设置对象的可枚举和可配置 、只读属性


const obj = {};

Object.defineProperty(obj, 'propertyName', {
  value: 'propertyValue',  // 设置属性的初始值
  writable: true,          // 设置属性为可写
  enumerable: true,        // 设置属性为可枚举
  configurable: true       // 设置属性为可配置
});


// 判断某个属性是否为只读
const descriptor = Object.getOwnPropertyDescriptor(obj, 'propertyName');
const isReadOnly = descriptor && !descriptor.writable;

console.log(isReadOnly); // 输出 true 或 false

console.log(obj);
