'use strict'
// Please don't delete the 'use strict' line above

//問題１
function add(numOne,numTwo){
	return numOne + numTwo;
}
console.log(add(4,3));
console.log(add(100,42));

//講義用
function introduce(name,age){
	console.log("こんにちは");
	console.log(`私の名前は${name}です。`);
	console.log(`年齢は${age}歳です。`);
}//バックティックのときは``で囲む。

introduce("もぐも","はく");
introduce("鈴木",20)

