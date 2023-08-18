'use strict'
// Please don't delete the 'use strict' line above

    // ファイル全体で使用する TDD 用の変数を宣言する
    let expected;
    let actual;

     // 上の問題のように、関数testにチェックする内容を全てまとめる
    function test(actualExpression, expectedExpression){
        if (actualExpression === expectedExpression) {
            console.log("Yay! Test PASSED.");
        } else {
            console.error("Test FAILED. Keep trying!");
            console.log("    actual: ", actualExpression);
            console.log("  expected: ", expectedExpression);
        }
    }

    actual = /* テストを行う EXPRESSION（式）を定義する */
    expected = /* EXPRESSION（式）の期待値を定義する */
		test(actual, expected)// testを呼び出す

//問題１
/**
 * 引数①: {string} ??? - テストの対象となる文字列
 * 引数②: {number} ??? - 閾値
 * 返り値： 与えられた文字列の長さが指定された閾値より長いかどうか
 */
function isLongerThan(word,num){
	return word.length>num;
}

actual = isLongerThan("three", 3);
expected = true;
test(actual, expected)


actual = isLongerThan("three", 5);
expected = false;
test(actual, expected)

actual = isLongerThan(3, 5);
expected = "Invalid input.";
test(actual, expected)


//問題２
/**
 * 引数: { number }??? - テストの対象となる数値
 * 返り値:  与えられた数値が奇数かどうかを表すブーリアン
 */
function isOddWithoutIf( num){
	console.log("型チェック:"+typeof num);
	return num%2===1;
}

actual = isOddWithoutIf(3);
expected = true;
test(actual, expected)

actual = isOddWithoutIf(4);
expected = false;
test(actual, expected)

//問題３
/**
 * 引数: ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * 返り値:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう
function getSimpleNumberName(num){
	const nn = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
	return nn[num];
}

actual = getSimpleNumberName(0);
expected = "zero";
test(actual, expected);

actual = getSimpleNumberName(10);
expected = "ten";
test(actual,expected);

//問題４
/**
 * 引数:  ??? - 正多角形の辺の数 (3-8)
 * 返り値:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
function getRegularConvexPolygonName(num){
	const zukei = ["triangle","square","pentagon","hexagon","heptagon","octagon"]; 
	return zukei[num-3];
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";
test(actual, expected);

actual = getRegularConvexPolygonName(8);
expected = "octagon";
test(actual, expected);

actual = getRegularConvexPolygonName(9);
expected = undefined;
test(actual, expected);

//問題５-1
function randomNumber(num){
	console.log(parseInt(Math.random()*num));
	return 
}
randomNumber(3);
randomNumber(100);

//問題５-2
function guessMyNumber(num){
	ram = parseInt(Math.random()*6);
	if(ram === num){
		console.log(ram);
		return "Yes!";
	} else {
		console.log(ram);
		return "No!";
	}
}
actual = guessMyNumber(0);
expected = "Yes!";
test(actual, expected);

actual = guessMyNumber(3);
expected = "No!";
test(actual, expected);

actual = guessMyNumber(5);
expected = "No!";
test(actual, expected);