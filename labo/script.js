'use strict'
// Please don't delete the 'use strict' line above

function isLongerThan(string, num){
	return string.length > num;
}

console.log(isLongerThan("Hello",4));

function hasFun(array){
	for(let a of array){
		return a.includes("fun");
	}
}
console.log(hasFun(["funtastic","a","b"]));

function getOperated(array, operator,num){
	let result = [];
	for(let a of array){
		if(operator === "+"){
			result.push(a + num);
		}
	}
	return result;
}
console.log(getOperated([1,2],"+",3));