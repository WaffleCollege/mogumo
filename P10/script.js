'use strict'
// Please don't delete the 'use strict' line above

console.log("問題１:" + Q1());

function Q1(){
let i = 0;
let sum = 0;
while(i<1000){
	if(i % 3 === 0 || i % 5 === 0){
		sum += i;
	}
	i++;
}
return sum;
}