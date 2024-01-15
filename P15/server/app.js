fetch("http://localhost:8080/hello")
	.then((response) => {
		response.text().then((data) => {
			console.log("1: Hello!");
			console.log("then: ", response);
		})
	.catch((error) => {
		console.log("catch: ", error);
	})
	}
);

//同期処理　ひとつの処理が終わるまで、次の処理は行いません。
console.log("2: Hello!")

const goNext = true;
if(goNext === true){
	console.log("3: Hello!")
}

//catch基本の例
// const promise = fetch(url);
// promise.catch(onRejected);

//pending = 待機
//fulfilled = 成功（履行）thenが実行
//rejected = 失敗(thenでもキャッチ可能)

//演習
//ajax/(XMLHttpRequest)/axios/setTimeout/async/await
//fetch api || axios　談義とかあるらしい