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
//5-1
const cat = {
		name: "Azuki",
		age: 3,
		breed: "mixed"
};
console.log(cat["name"]);//ブラケット記法
console.log(cat["age"]);
console.log(cat.name);//ドット記法
console.log(cat.age);

cat.age = 5;
cat.birthday = "02/22";
console.log(cat);

//5-2
let key = "breed";
console.log(cat[key]);

let name = "Azuki";
console.log(cat[name]);//"Azuki"というプロパティ名はない

console.log("***5-3***")
for (const key in cat){
	console.log(cat[key]);
}

//演習
console.log("***演習***")
const message = {
	body: "こんにちは！",
	sentAt: "2023-08-06",
	account: "suzuki",
	isRead: false
}

for (const p in message){
	console.log(p);
	console.log(message[p]);
}

console.log("lecture 問題２")
   /**
    * @param {string} ???
    * @returns {number} 与えられた文字列の中で母音(a, i, u, e, o)の合計の数を返す
    */
   // ここにコードを書きましょう.
  function countVowel(str){

		let count =0;
		for (const c of str){
			if(c === "a"||
				 c === "i"|| 
				 c === "u"|| 
				 c === "e"|| 
				 c === "o"){
				count++;
			}
		}
		return count;
	}

   test(countVowel("hello"), 2);
   test(countVowel("WaffleCollege"), 5);