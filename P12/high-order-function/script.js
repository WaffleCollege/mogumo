'use strict'
// Please don't delete the 'use strict' line above


function hello(callback){
	console.log("私は呼び出し元の関数です");
	callback();
}

function greet(){
	console.log("私はコールバック関数です。")
}

setTimeout(greet,2000);

const numbers = [1,2,3,4,5,6,7];
function isEven(number){
	if(number % 2 === 0){
		return true;
	}else{
		return false;
	}
}
const result = numbers.filter(isEven);//偶数だけを取り出す
console.log(result);

const result2 = numbers.filter(function (number){
	if(number >= 4){
		return true;
	}else{
		return false;
	}
});
console.log(result2);//4以上

const newNumbers = numbers.map(function (number){
	return number * 2;
});
console.log(newNumbers);

const newNumbers2 = numbers.map((number)=>{
	return number;
});
console.log(newNumbers2);


function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/**
 * @param {number} ???
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう
function abs(num){
	return Math.abs(num);
}
console.log("問題1");
test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */

const getIncrementedNumbers = (array) => {
	return array.map((a) => {
		return a+1;
	});
};

console.log("問題2");
test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);

/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
const getSwitched = (array) => {
	return array.map((a) => {
		if(typeof(a) === "number"){
			return String(a);
		}else if(typeof(a) === "string"){
			return Number(a);
		}
	});
};
console.log("問題3");
test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);

