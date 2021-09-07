const estraverse = require('estraverse');
const escodegen = require('escodegen');
const acorn = require('acorn');

let sourceJS = "import ('https://static01.nyt.com/newsgraphics/2021/08/25/right-rail-header/b2d5c97936aa7e89d7b351d41f2bf789cbc5f44d/build/js/freebird.js');";


console.log("sourceJS:", sourceJS);
// 
// let ast = esprima.parseScript(sourceJS, {
//         jsx: false,
//         range: false,
//         loc: false,
//         tolerant: true,
//         tokens: false,
//         comment: false
//     })
// 
// console.log("esprima ast:", ast);
// 
// estraverse.replace(ast, {
//   leave(node, parent) {
//   }
// });
// console.log("estraverse ast:", ast);
// 
// let sourceOutput = escodegen.generate(ast, {
//         format: escodegen.FORMAT_MINIFY
//     });
// 
// console.log("escodegen output:", sourceOutput);

let acornAST = acorn.parse(sourceJS, {ecmaVersion: 2020})
console.log("acorn ast:", acornAST);

estraverse.replace(acornAST, {
  leave(node, parent) {
    console.log("node:", node);
  }
});
console.log("estraverse ast:", acornAST);

sourceOutput = escodegen.generate(acornAST, {
 format: escodegen.FORMAT_MINIFY
});
console.log("acorn output:", sourceOutput);
