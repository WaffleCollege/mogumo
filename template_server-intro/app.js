const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/form', (request, response) => {
  response.sendFile(__dirname + '/form.html');
});

app.post('/sample', (request, response) => {
  const name = request.body.key;
  response.send('あなたの名前は' + name + 'です。');
})

app.listen(8080, () => {
  console.log('server running on port 8080');
});
