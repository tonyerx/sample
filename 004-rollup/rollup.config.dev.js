
var path = require('path');
/* plugins */
var jsonPlugin = require('rollup-plugin-json');

export default {
  input: path.resolve(__dirname, './src/main.js'),
  output: [
    { file: path.resolve(__dirname, './dist/c.dist.es.js'), format: 'es' },
    { file: path.resolve(__dirname, './dist/c.dist.cjs.js'), format: 'cjs' },
    { file: path.resolve(__dirname, './dist/c.dist.amd.js'), format: 'amd' },
    { file: path.resolve(__dirname, './dist/c.dist.iife.js'), format: 'iife', name: 'result' },
    { file: path.resolve(__dirname, './dist/c.dist.umd.js'), format: 'umd', name: 'result' },
  ],
  plugins: [
    jsonPlugin()
  ],
  watch: {
    // 仅监听src目录下的文件变化
    include: [
      'src/*'
    ]
  }
}