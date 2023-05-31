// js 中的 es6 原生支持模块导入导出

const PI = Math.PI;

function desgreesToRadians(d) {
    return d * PI / 180;
};

class Circle {
    
    // 构造函数
    constructor(r) {
        this.r = r;
    };

    area() {
        return PI * this.r * this.r;
    };
};

// 批量导出模块内部的变量和函数，看着像是对象，其实为简写。
export {Circle,desgreesToRadians,PI};