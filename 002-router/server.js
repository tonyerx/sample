var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();

app
  .use(history({
    // index: '/js-history.html',
    index: '/react-history.html' // 默认主页是js-history.html，这样就能支持broswer路由方式
  }))
  .use(express.static('./'))
  .listen(8080);