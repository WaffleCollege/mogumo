'use strict'
// Please don't delete the 'use strict' line above
let q = 1;
function count(){
	console.log(`問題${q}`);
	q++;
}
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

count();//問題１
const hellos = {
	English: "Hello",
	Japanese: "Konnichiwa",
	German: "Hallo",
	Spanish: "Hola",
	Arabic: "Ahlan wa sahlan",
	Chinese: "Nihao",
	};
/**
 * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
 */
function sayHellos(){
	for(const greeting in hellos){
		console.dir(hellos[greeting]);
	}
}
sayHellos();

count();//問題２
/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */

function getKeys(object){
	let i=0;
	let keys = [];
	for(const key in object){
		keys[i] = key;
		i++;
	}
	return keys;
}
const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };
test(getKeys(object1), ["a", "b", "c"]);
test(getKeys(object2), ["1", "2", "hello"]);

count();//問題３
/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */
function getValues(object){
	let i = 0;
	let values = [];
	for(const value in object){
		values[i] = object[value];
		i++;
	}
	return values;
}
test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);

count();//問題４
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
  for (const key in object) {
    console.log(key+":"+object[key]);//.→[]
  }
}
printAll(myObj);

count();//問題５
/**
 * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */

function swapPairs(object){
	const swap = {};
	let key;
	for (const obj in object) {
		key = object[obj];
		console.log(key+":"+obj);
		swap[key] = obj; 
  }
	return swap;
}

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

count();//問題６
/**
 * @param {Array<object>} ??? - オブジェクトを要素に持つ配列
 * @returns {Array<any>} 与えられた配列の最初のオブジェクトの、すべての値(valueの方)が入った配列
 */

function getFirstObjectValues(array){
	let a =[];
	let i =0;
	let first =  array[0];

	for(const value in first){
		a[i] = first[value];
		i++;
	}
	return a
}
const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
const collection2 = [{ a: 3, b: 3 }, { b: 4 }, { a: 100 }];
console.log(getFirstObjectValues(collection));
test(getFirstObjectValues(collection), [1, 2]);
console.log(getFirstObjectValues(collection2));
test(getFirstObjectValues(collection2), [3, 3]);

count();//問題７
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列のすべてのオブジェクトの、すべての値(valueの方)が入った配列
 */

function getAllValues(array){
	let i = 0;
	let allay = [];
	for(const a of array){
		for(const value in a){
			allay[i] = a[value];
			i++;
		}
	}
	console.log(allay);
	return allay;
}

test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection2), [3, 3, 4, 100]);

count();//問題８
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列。重複した値がある場合は1つだけ残す。
 */

function getAllValues2(array){
	let i = 0;
	const allay = [];
	for(const a of array){
		for(const value in a){
			allay[i] = a[value];
			i++;
		}
	}
	  const set = new Set(allay);
		const newallay =[...set];

	return newallay;
}

const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];
const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];
console.log(getAllValues2(collection3));
test(getAllValues2(collection3), [1, 2, 3, 4, 5]);
console.log(getAllValues2(collection4));
test(getAllValues2(collection4), [1, 3, 4, 5]);
