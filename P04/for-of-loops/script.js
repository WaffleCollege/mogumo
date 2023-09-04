'use strict'
// Please don't delete the 'use strict' line above

//テスト
function test(actual,expected){
	if (actual === expected) {
		console.log("Test PASSED.");
	} else {
		console.error("Test FAILED. Keep trying!");
		console.group("Result:");
		console.log("  actual:", actual);
		console.log("expected:", expected);
		console.groupEnd();
	}
}
//問題１
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(array) {
	let sum = 0;
	for(const a of array){
		sum += a;
	}
	return sum;
}

let actual = sumArray([1, 2, 3, 4]);
let expected = 10;
test(actual,expected);

actual = sumArray([1, 2, 3, 4, 5]);
expected = 15;
test(actual,expected);

//問題２
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(array) {
  let sum = 1;
	for(const a of array){
		sum *= a;
	}
	return sum;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;
test(actual,expected);

actual = productArray([1, 2, 3, 4, 5]);
expected = 120;
test(actual,expected);

//問題３
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(array) {
	let count = 0;
	for(const a of array){
		if(a === "fun"){
			count ++;
		}
	}
	return count > 0;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;
test(actual,expected);


actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;
test(actual,expected);

actual = hasFun(["whatever", 2, false, "run", "fun"]);
expected = true;
test(actual,expected);

//問題４
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */

function containsOnlyBooleans(array) {
let count = 0;
	for(let a of array){
		if(a !== true && a !== false){
			count ++;
		}
	}
	return !count > 0;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;
test(actual,expected);

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;
test(actual,expected);

actual = containsOnlyBooleans([undefined, true, true, "not a boolean"]);
expected = false;
test(actual,expected);

//問題５
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */

function concatenate(array1,array2) {
	for(let i = 0; i < array2.length; i++){
		array1.push(array2[i]);
	}
return array1;
;}

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
function test2(){
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log("Test PASSED.");
	} else {
		console.error("Test FAILED. Keep trying!");
		console.group("Result:");
		console.log("  actual:", actual);
		console.log("expected:", expected);
		console.groupEnd();
	}
	}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];
test2(actual,expected);

actual = concatenate(["1", "2"], ["3", "4"]);
expected = ["1", "2", "3", "4"];
test2(actual,expected);

//問題６
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */

function getEvenNumbers(array) {
	let a = [];
  for(let i = 0; i < array.length; i++){
		if(array[i] % 2 === 0){
			a.push(array[i]);
		}
	}
	return a;
}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];
// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
test2(actual,expected);

actual = getEvenNumbers([22, 21, 20, 19, 18, 17, 16, 15]);
expected = [22, 20, 18, 16];
test2(actual,expected);

//問題７
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */

function getMultipliedArray(array,num) {
	let a =[];
  for(let i =0; i<array.length; i++){
		a[i] = array[i] * num;
		console.log(a);
	}
	return a;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];
test2(actual,expected);

actual = getMultipliedArray([4, 5, 6], 6);
expected = [24, 30, 36];
test2(actual,expected);

//問題８
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */

function isSorted(array) {
	let count = 0;
  for( let i = 0; i < array.length-1; i++){
			if(array[i] >= array[i+1]){
				count ++;
			}
	}
	return count == 0;
}

actual = isSorted([1, 2, 3]);
expected = true;
test(actual,expected);

actual = isSorted([3, 2, 3]);
expected = false;
test(actual,expected);

actual = isSorted([1, 3, 5]);
expected = true;
test(actual,expected);

//問題９
/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */

function countOccurrences(array,x) {
	let count = 0;
  for(let i = 0; i < array.length ; i++){
		if(array[i] === x){
			count ++;
		}
	}
	return count;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;
test(actual,expected);

actual = countOccurrences([1, 2, 2], 2);
expected = 2;
test(actual,expected)

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;
test(actual,expected);

actual = countOccurrences([2, 2, 2], "elephant");
expected = 0;
test(actual,expected);

//問題１０
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

function getOperatedArray(array,f,num) {
	let a = [];
		for(let i = 0; i < array.length; i++){
			if(f == "+"){
				a[i] = array[i] + num;
			}else if(f == "-"){
				a[i] = array[i] - num;
			}else if(f == "*"){
				a[i] = array[i] * num;
			}else if(f == "/"){
				a[i] = array[i] / num;
			}else if(f == "**"){
				a[i] = array[i] ** num;
			}else if(f == "%"){
				a[i] = array[i] % num;
			}
	}
	return a;
}
actual = getOperatedArray([1, 2, 3], "+", 5);
// [1, 2, 3] のそれぞれの要素に5をたす
// [1+5, 2+5, 3+5]
expected = [6, 7, 8];
test2(actual,expected);

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];
test2(actual,expected);

actual = getOperatedArray([1, 2, 3], "*", 5);
expected = [5, 10, 15];
test2(actual,expected);

//P04-2
//問題１
!true;//false
!false;//true
!!true;//true
!!false;//false

//問題２
!(3 === 3);//false
!(5 !== 5);//true
!3;//false
!!3;//true
!3 >= 3;//false

//問題３
3 === 3 && 1;//1
1 > 2 || 2 > 2 || 3 > 2;//true
5 < 5 || 75 < 74;//false

//問題４
"!(倫理否定演算子)は単項演算子"