'use strict'
// Please don't delete the 'use strict' line above

//問題２
function isEven(num){
	if (typeof num !== "number"){
		return "This is not a number.";
	}
	return num %2 ===0;
}
console.log(isEven(4)); // => true
console.log(isEven(7)); // => false

console.log(isEven("num"));

//問題３
/**
 * 引数1つ目:  ??? - 配列
 * 引数2つ目:  ??? - 配列の最後に追加する値
 * 返り値： 処理後の配列の長さを返す。与えられた配列の末尾に、第2引数で渡された要素を追加してください。
 */

function push(array,add){
  array[array.length] = add;
	console.log(array);
	return array.length;
}

let array = [1, 2, 3, 4];

// 関数が正しい結果を返すことを確認する
console.log(push(array, 5)); // => 5
console.log(push(array, 10)); // => 6

// 配列が正しく変更されていることを確認する
console.log(array);
// => [1, 2, 3, 4, 5, 10];　　