'use strict'
// Please don't delete the 'use strict' line above

//問題１
/**
 * 引数：arrayOfPeople - 人の名前の配列
 * 返り値： 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
  return arrayOfPeople.length;
}

 // テスト
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4

//問題２
const students = ["Alex", "Beau", "Carlos", "Dustin"];
students.push("Emma");
console.log(numberOfPeople(students));

//問題３
students.push("Fabi","Gabby","Hanna");
console.log(numberOfPeople(students));

//問題４
function last(array){
	return array[array.length - 1];
}
console.log(last(students));