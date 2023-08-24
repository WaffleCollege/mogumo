'use strict'
// Please don't delete the 'use strict' line above

function getGreaterValue(x,y){
	if(x<y){
		console.log(y);
	}
	console.log(x);
}
console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

function getGreatestValue(...array){
	let num = array;
	return Math.max(...num);
}
console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示