const express = require('express');
const {request, response} = require("express");
const app = express();

// index.htmlを表示する
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// app.jsを取得できるようにする
app.get('/app.js', (request, response) => {
  response.sendFile(__dirname + '/app.js');
});

app.get('/hello', (request, response) => {
  // 2秒後にレスポンスを返す
  setTimeout(() => {
    response.send('Hello World!');
  }, 2000);
});

app.listen(8080, () => {
  console.log('server running on port 8080');
});
