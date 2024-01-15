// Expressサーバを使えるように読み込む
const express = require('express');
// サーバのオブジェクト(インスタンス)を用意
const app = express();
// オプション: POSTで送られてきたデータを読み込めるようにするための設定
app.use(express.urlencoded({extended: true}));

// パスはルート / , GETメソッドでリクエストが来た時の処理
app.get('/', (request, response) => {
  // クライアントにレスポンスを送る. 引数がその内容
  response.send('Hello World!');
});

// パスは /form , GETメソッドでリクエストが来た時の処理
app.get('/form', (request, response) => {
  // 引数のパスに一致するファイルをレスポンスで返す
  response.sendFile(__dirname + '/form.html');
});

// パスは /sample , POSTメソッドでリクエストが来た時の処理
app.post('/sample', (request, response) => {
  // リクエストの中身から、key に一致するデータを取り出す
  // 6行目の設定 app.use(express.urlencoded...) を実行しないとエラーになる
  const name = request.body.key;
  response.send('あなたの名前は' + name + 'です。');
})

// サーバを起動し、8080ポートで待機する
app.listen(8080, () => {
  console.log('server running on port 8080');
});
