// js 中的多维数组

let table = new Array(10);

// 创建多维数组，每个元素也是一个数组
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}

// 为外围的表格的 row 设置二维元素
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}

// 遍历多维数组
table.forEach(row => {
    row.forEach(col => {
        console.log(col)
    });
})