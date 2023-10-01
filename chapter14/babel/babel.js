// npm install @babel/preset-env @babel/preset-env --save-dev

const babel = require('@babel/core');
const parser = require('@babel/parser');


const code = 'const square = (x) => x * x;';

const options = {
    presets: ['@babel/preset-env']
};

const result = babel.transformSync(code, options);

console.log('Transformed code:', result.code);

// Parse the transformed code to get AST
const transformedAst = parser.parse(result.code, {
    sourceType: 'module',
});

console.log('Transformed AST:', transformedAst);
