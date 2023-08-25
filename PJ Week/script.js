'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

//問題１
   /**
    * @param {Array<any>} ??? - 配列
    * @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
    */

   function haveMultipleElements(array) {
		let a = new Set(array);//aは重複した要素がはじかれた後の配列→長さを比べると重複してたかわかる
		return array, a.size == array.length;
	}


	 // テストを実行
	test(haveMultipleElements([1, 2, 3, 4]), true);
	test(haveMultipleElements([1, 3, 3, 4]), false);

//問題２
function greatestcd(x,y){
	if(x%y){
		return greatestcd(y,x%y);
	}
	return y;
}
test(greatestcd(33,11), 11);
test(greatestcd(11,33), 11);

//問題３
const hands = new Array("パー", "グー", "チョキ");
const player = "パー"

/**
    * @param {int} min - ランダムで出したい値の最小値
    * @param {int} max - ランダムで出したい値の最大値より1つ大きい値
    *
    * @returns {int}} min 以上 max 未満 の整数値を「ランダムで」出力
    */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// 1つめの引数を0, 2つ目の引数を3とすると, 0から2の整数がランダムで出力される
console.log(getRandomInt(0, 3))

// 上記のgetRandomInt関数と、配列 hands を生かしてジャンケンゲームを作成してみましょう！
function game(player){
	x = getRandomInt(0,3);
	y = hands.indexOf(player);
	console.log("わたしは"+player)
	console.log(`相手は${hands[x]}`)
	if(x===y){
		console.log("あいこ")
		return "あいこ";
	}else if(y===0 && x===1 || y===1 && x===2 || y===2 && x===0){
		console.log("かち")
		return "かち";
	}else{
		console.log("まけ")
		return "まけ"
	}
}
test(game("グー"),"かち");
test(game("グー"),"まけ");
test(game("グー"),"あいこ");

game("グー");
game("チョキ");
game("パー");

//問題４
// ここに関数を作成しましょう。
function flatten(...array) {
	return [].concat(...array);
}

console.log(
	flatten([
		[1, 2, 3],
		[4, 5, 6],
	])
); // [1, 2, 3, 4, 5, 6]

console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]

console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]