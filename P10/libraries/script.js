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

console.log("問題２");
const answer = [];
for(let i = 900; i<1000; i++){
	for(let j = 900; j < 1000; j++){
		let ans = String(i*j);
		let value = ans.split("");
		let reverseV = value.reverse();
		let rev = reverseV.join("");
		if(ans == rev){
			answer.push(ans);
		}
	}
}
console.log(answer[answer.length-1]);

