const express = require('express');
const app = express();
const result = fetch("http://localhost:8080/hello");
result.then((response) => {
	const text = response.text();
	text.then((data) => {
		console.log(data);
	});
//	console.log(response);
//	console.log("ステータスコード: ", response.status);
});

app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.send('Hello');
});

app.get('/hello', (request, response) => {
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