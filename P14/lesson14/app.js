fetch("http://localhost:8080/hello-json")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
      console.log(data.message);
    })
  });

// Dog APIにリクエストを送る
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
	response.json().then(data => {
		console.log('dog: ', data);
	})
});

fetch("https://weather.tsukumijima.net/api/forecast/city/013010")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
			console.log(data.description.text);
			console.log(data.forecasts[0]);
			console.log(data.forecasts[1]);
    })
  });