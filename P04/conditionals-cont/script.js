'use strict'
// Please don't delete the 'use strict' line above

function test(actual,expected){
	if (actual === expected) {
		console.log("Yay! Test PASSED.");
	} else {
		console.error("Test FAILED. Keep trying!");
		console.log("    actual: ", actual);
		console.log("  expected: ", expected);
	}
}

//問題１
/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13歳から 19歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */

function isTeenager(age) {
	if(typeof age === "number"){
		return 13 <= age && age <=19;
	}else{
		return "Invalid! Age is not a number!";
	}

}

let actual = isTeenager(3);
let expected = false;
test(actual,expected);

actual = isTeenager(14);
expected = true;
test(actual,expected);

actual = isTeenager(19);
expected = true;
test(actual,expected);

//問題２
actual = isTeenager("Hello!");
expected = "Invalid! Age is not a number!";
test(actual,expected);

actual = isTeenager(true);
expected = "Invalid! Age is not a number!";
test(actual,expected);

actual = isTeenager();
expected = "Invalid! Age is not a number!";
test(actual,expected);

//問題３

/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */

function anotherGreeting(name,keigo,time){
	let k = "";
	let e = "";
	let t = "";
	if(typeof name === "string" && typeof keigo === "boolean" && typeof time === "boolean"){
		if(keigo == true){
			k ="-san"; 
			e =".";
		}else{
			e ="!";
		}
		if(time == true){
			t = "Hello"
		}else{
			t = "Goodbye";
		}
		return t+", "+name+k+e
	}else{
		return "無効なインプットです！";
	}
	
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";
test(actual,expected);

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";
test(actual,expected);

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";
test(actual,expected);

actual = anotherGreeting("Misato", true, false);
expected = "Goodbye, Misato-san.";
test(actual,expected);

//問題４
actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//問題５
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */
function getLetterGrade(num){
	if(num < 0|| 100 < num){
		return "無効な点数です。"
	}else if(100 >= num && num >= 90){
		return "A";
	}else if(num >= 80){
		return "B";
	}else if(num >= 70){
		return "C";
	}else if(num >= 60){
		return "D";
	}else{
		return "F";
	}
}

actual = getLetterGrade(95);
expected = "A";
test(actual,expected);

actual = getLetterGrade(79);
expected = "C";
test(actual,expected);

//問題６
actual = getLetterGrade(101);
expected = "無効な点数です。";
test(actual,expected);

actual = getLetterGrade(-1);
expected = "無効な点数です。";
test(actual,expected);

//問題７
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */
function getBestNumericalGrade(grade){
	if(grade === "A"){
		return 100;
	}else if(grade === "B"){
		return 89;
	}else if(grade === "C"){
		return 79;
	}else if(grade === "D"){
		return 69;
	}else if(grade === "F"){
		return 59;
	}else{
		return "無効な点数です。"
	}
}

actual = getBestNumericalGrade("A");
expected = 100;
test(actual,expected);

actual = getBestNumericalGrade("B");
expected = 89;
test(actual,expected);

actual = getBestNumericalGrade("F");
expected = 59;
test(actual,expected);

//問題８
actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";
test(actual,expected);

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";
test(actual,expected);

actual = getBestNumericalGrade(true);
expected = "無効な点数です。";
test(actual,expected);