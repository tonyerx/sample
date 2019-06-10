var path = require('path');

export default {
  /* 入口 */
  input: path.resolve(__dirname, './src/main.js'),
  /* 出口 */
  output: {
    file: path.resolve(__dirname, './dist/c.dist.iife.js'),
    format: 'iife', // 模块类型
    name: 'result'
  }
}