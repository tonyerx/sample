const path = require('path');
const rollup = require('rollup');
const jsonPlugin = require('rollup-plugin-json');

const inputOpts = {
  input: path.resolve(__dirname, './src/main.js'),
  plugins: [ jsonPlugin() ]
};

const outputOpts = {
  file: path.resolve(__dirname, './dist/n.dist.iife.js'),
  format: 'iife',
  name: 'result'
}

async function build () {
  // rollup.rollup API会将入口配置转换成配置对象
  const bundle = await rollup.rollup(inputOpts);
  console.log(bundle);
}

build();