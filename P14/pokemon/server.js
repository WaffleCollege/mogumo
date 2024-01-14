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

fetch("https://weather.tsukumijima.net/api/forecast/city/400010")
.then((response) => {
	response.json().then((data) => {
		console.log("お天気: ", data.forecasts[1]);
	});
});

app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.send('Hello');
});

app.get('/hello', (request, response) => {
  response.send('Hello World!');
});

app.get('/hello-json', (request, response) => {
  const obj = {
		message: "Hello JSON!"
	};
	response.json(obj);
});

app.post('/sample', (request, response) => {
  const name = request.body.key;
  response.send('あなたの名前は' + name + 'です。');
})

app.listen(8080, () => {
  console.log('server running on port 8080');
});