//1. scourceType module(不用严格模式import)  script(严格模式)
const acorn = require('acorn');

console.log(acorn.parse("1 + 1",{
  // 参数
}));