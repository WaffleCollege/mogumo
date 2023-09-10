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

//問題１



// この演習では TDD スタイルのテストは必要ありません。ここでは console.log を使用してください。
console.log(myInfo["isCoder"]); // => "true"