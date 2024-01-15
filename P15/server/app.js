fetch("http://localhost:8080/hello")
	.then((response) => {
		response.text().then((data) => {
			console.log("1: Hello!")
		})
	}
);

//同期処理
console.log("2: Hello!")

const goNext = true;
if(goNext === true){
	console.log("3: Hello!")
}