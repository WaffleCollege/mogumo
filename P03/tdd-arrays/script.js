'use strict'
// Please don't delete the 'use strict' line above

function numberOfPeople(arrayOfPeople) {
	return arrayOfPeople.length;
}

let actual = numberOfPeople(["Kimiko", "Yan", "Dustin", "Dylan"]);
let expected = 4;

if (JSON.stringify(actual) === JSON.stringify(expected)) {
	console.log("Yay! Test PASSED.");
} else {
	console.error("Test FAILED. Keep trying!");
	console.log("  expected:", expected);
	console.log("    actual:", actual);
}

actual = numberOfPeople(["John", "Paul", "George H.", "Ringo", "George M."]);
expected = 5;

if (JSON.stringify(actual) === JSON.stringify(expected)) {
	console.log("Yay! Test PASSED.");
} else {
	console.error("Test FAILED. Keep trying!");
	console.log("  expected:", expected);
	console.log("    actual:", actual);
}

//問題１
function numberOfPeople(arrayOfPeople){
	console.log(arrayOfPeople);
	console.log("人数："+arrayOfPeople.length);
	return arrayOfPeople.length;
}

/*てすと*/
function testArray(actual,expected){
	if(JSON.stringify(actual)===JSON.stringify(expected)){
		console.log("Yay! Test PASSED.");
	}else{
		console.log("Test FAILED. Keep trying.");
		console.log("  expected:", expected);
		console.log("    actual:", actual);
	}
}

testArray(numberOfPeople(["Urara", "Tokotoko"]), 2);
testArray(numberOfPeople(["Akki", "Koshimu", "Ishity", "Maoko"]), 4);
testArray(numberOfPeople([]), 0);

testArray(numberOfPeople(["human","cat"]),5)//FAILED期待

//問題２
/**
 * 引数:  ??? - 配列
 * 返り値:  配列の真ん中が "hi" に置き換えらえた配列、もしくは同じ配列を返す
 */
function hiInTheMiddle(actual){
	if(actual.length % 2 === 0){
		console.log(actual);
		return actual;
	} else {
		actual[Math.floor(actual.length/2)] = "hi";
		console.log(actual);
		return actual;
	}
	/*
	if actual.length %2 ===1){
		actual[(actual.length-1)/2]="hi";
	}
	return array;
	*/
}

 actual = hiInTheMiddle([1, 2, 3, 4, 5]);
 expected = [1, 2, "hi", 4, 5];
 testArray(actual,expected)

 actual = hiInTheMiddle([1, 2, 3, 4]);
 expected = [1, 2, 3, 4];
 testArray(actual,expected)

//問題３
/**
 * 引数： ??? - 配列
 * 返り値： 与えられた配列の最後の要素を返す。
 */
function pop(actual){
	x = actual.splice(actual.length-1,1);
	console.log("抜いた："+x);
	console.log(array);
	return x[0];
}

array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;
testArray(actual, expected)

actual = array;
expected = [1, 2, 3];
testArray(actual, expected)

//問題４
/**
 * 引数①: ??? - 配列
 * 引数②: ??? - 配列の _先頭_ に追加する値
 * 返り値: {number} 処理後の配列の長さを返す。
 */
function unshift(actual,add){
	actual.splice(0,0,add);
	console.log(array);
	console.log("配列の長さ:"+actual.length)
	return actual.length;
}

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];
testArray(actual, expected)


//問題５
/**
 * 引数: ??? - 配列
 * 返り値： 与えられた配列の先頭の要素を返す。
 */
function shift(actual){
	x = actual.splice(0,1)
	console.log("抜いた："+x);
	console.log(array);
	return x[0];
}

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [2, 3, 4];
testArray(actual, expected)