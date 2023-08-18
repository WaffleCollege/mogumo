'use strict'
// Please don't delete the 'use strict' line above

//講義と演習メモ
//TDD	(テスト駆動開発)
function discount(price){
	return price - 100;
}
/* テストコード */
function assertEquals(expected/*期待値*/,actual/*実際の値*/){
	if(actual === expected){
	console.log("Test Passed");
	} else {
	console.log("Test Failed.");
	console.log("expected:",expected);
	console.log("actual:",actual);
	}
}
console.log(assertEquals(400,discount(500)));


//const todos = ["トマトを買いに行く", "講義のレポートを作る", undefined, null,"バイトの面接"];
const todos = [];
console.log(todos.length);

todos.push("レポートを作る");
todos.push("バイトの面接");
todos.push("卵を買いに行く");

console.log(todos);
console.log(todos.length);

todos.pop();//最後の要素を消す
console.log(todos);
console.log(todos.length);
console.log(todos[todos.length-1]);
//左から1番目(最初)[0]
//右から1番目(最後)[todos.length-1]

const sweets = ["Cupcake"];
sweets.push("Froyo");
sweets.push("Oreo");

console.log(sweets.length);
sweets[0] = "Waffle";
console.log(sweets);
console.log(sweets[sweets.length-1]);

let budget = 1129;//1501以上だとランチは焼肉
if(budget > 1500){
	console.log("ランチは焼肉");
} else if (budget>=1000){
	console.log("ランチはカフェ");
} else {
	console.log("自炊しよ");
}

function sayFizz(num){
	if(num%3 == 0){
		console.log("Fizz!")
	}else{
		console.log("Buzz!")
	}
}
sayFizz(9);