'use strict'//ルーム4
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
 * @param {object} ??? - オブジェクト
 * @param {Array<string>} ??? - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */

function select(obj,array){
	const answer ={};
	for(let i in obj){//iがオブジェクトのキー
		console.log(obj[i]);
		for(let a of array){//aが配列の中身
			if(a === i){
				answer[i] = obj[i];
			}
			//answerにキーをi、値をオブジェクトの中から持ってくる
		}//なぜかaでもiでも通る
	}
	console.log(answer);
	return answer;
}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は1つだけ残す。
 */
console.log("****************************");
function getAllValues(array){
	const answer2 = [];
	for(let a of array){
		for(let i in a){
			answer2.push(a[i]);
		}
	}
	console.log(Array.from(new Set(answer2)));
	return Array.from(new Set(answer2));
}

const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];
const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];

test(getAllValues(collection3), [1, 2, 3, 4, 5]);
test(getAllValues(collection4), [1, 3, 4, 5]);

//3
/*
let i = 0;
const elements = document.getElementsByClassName("athing");
for(let e of elements){
	if(i%2 === 0){
		e.style.background = "red";
	}else{
		e.style.background = "green";//backgroundだけでも良い
	}
	i++;
}
*/