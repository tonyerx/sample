var path = require('path');
/* plugins */
var jsonPlugin = require('rollup-plugin-json');

export default {
  /* 入口 */
  input: path.resolve(__dirname, './src/main.js'),
  /* 出口 */
  // output: {
  //   file: path.resolve(__dirname, './dist/c.dist.es.js'),
  //   format: 'es', // 模块类型
  // },
  output: [
    { file: path.resolve(__dirname, './dist/c.dist.es.js'), format: 'es' },
    { file: path.resolve(__dirname, './dist/c.dist.cjs.js'), format: 'cjs' },
    { file: path.resolve(__dirname, './dist/c.dist.amd.js'), format: 'amd' },
    { file: path.resolve(__dirname, './dist/c.dist.iife.js'), format: 'iife', name: 'result' },
    { file: path.resolve(__dirname, './dist/c.dist.umd.js'), format: 'umd', name: 'result' },
  ],
  plugins: [
    jsonPlugin()
  ]
}