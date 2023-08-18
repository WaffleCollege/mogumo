'use strict'
// Please don't delete the 'use strict' line above
function isPositive(num) {
	if (num > 0) {
		return true;
	}
	return false;
}

 // テスト1つ目
let actual = isPositive(10);
let expected = true;

 if (actual === expected) {
		 console.log("Yay! Test PASSED.");
 } else {
		 console.error("Test FAILED. Keep trying!");
		 console.log("  expected:", expected);
		 console.log("    actual:", actual);
 }

 // テスト2つ目
actual = isPositive(0);
expected = false;

 if (actual === expected) {
		 console.log("Yay! Test PASSED.");
 } else {
		 console.error("Test FAILED. Keep trying!");
		 console.log("  expected:", expected);
		 console.log("    actual:", actual);
 }

//問題１
function test(actual,expected){
	if (actual === expected) {
		console.log("Yay! Test PASSED.");
} else {
		console.error("Test FAILED. Keep trying!");
		console.log("  expected:", expected);
		console.log("    actual:", actual);
}
}
test(isPositive(10),true);//"Yay! Test PASSED."
test(isPositive(10),false);//"Test FAILED. Keeo trying",actual:,expected: