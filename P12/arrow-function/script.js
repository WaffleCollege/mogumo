'use strict'
// Please don't delete the 'use strict' line above

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
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
function isMultipleOfTen(array){
		return array % 10 === 0;
}

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
const arrayOfNumbers2 = [20, 30, 66, 89, 100]

test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers2.filter(isMultipleOfTen), [20, 30, 100]);

/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
const hasAVowel = (array) => {
	return /a|i|u|e|o/.test(array);
}

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
function getPositiveNumbers(array){
	return array.filter((a)=>{
		return a > 0;
	});
};

test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
function getQuestions(array){
	return array.filter((a)=>{
		return a.slice(-1) === "?" && /^[A-Z]+$/g.test(a.slice(0,1));
	});
}

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
];

test(getQuestions(arrayOfStrings3), [
  "What in the world?",
  "Do you want to know a secret?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
  "Do you want to know a secret?",
]);