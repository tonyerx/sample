# Rollup构建

## USAGE

- 查看`package.json` - `script`，运行不同的**build命令**执行构建
- 根据构建出来的不同`dist.js`文件修改`index.html`中引入的js文件名

## TIPS
- 设置模块为iife（立即执行函数）和umd时，还加上了一个参数-n，这是因为我们将logA()的结果设置为模块的输出结果，那么在使用iife和umd时，需要事先设定模块的名称，才能让其他人通过这个模块名称引用到你的模块的输出结果。
- rollup命令使用指定的配置文件，使用`-c [配置文件路径名]`，没有路径时默认`rollup.config.js`


## MARK
- rollup有以下使用方式：
  - 使用命令行，并且在命令行中带上参数（示例：`npm run build:es`）
  - 使用命令行并运行自己编写的rollup配置（示例：`npm run build:config`）
  - 使用Nodejs的方式执行rollup暴露的API（示例：`npm run build:node`）