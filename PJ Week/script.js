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

	