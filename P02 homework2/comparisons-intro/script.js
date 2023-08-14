'use strict'
// Please don't delete the 'use strict' line above

//問題１
console.log(2 * 3 * 10 > 50);//2+3->2*3

//問題２
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}
console.log(isEqual("23", 23));

//問題３
function isGreaterThan(valueOne, valueTwo) {
	if(valueOne>valueTwo){
		console.log("true");
	}else if(valueOne<valueTwo){
		console.log("false");
	}
}
console.log(isGreaterThan(10,3));//3-1
console.log(isGreaterThan(2,4));//3-2

//問題４
function isOfAge(age){
	if(age>=20){
		return true;
	}else if(age,20){
		return false;
	}
}
console.log(isOfAge(22));

//問題５
function isEven(n){
	if(n%2===0){
		return true;
	}else if(n%2!==0){
	  return false;
	}
}
isEven(5);

//問題６
function SquareV(l,w,h){
	return l*w*h/3;
}
SquareV(2,3,4);

function FrustumV(r,R,h){
	return (Math.PI*(r**2+r*R+R**2))/3
}
FrustumV(3,4,5);

function FrustumS(r,R,s){
	return Math.PI*s*(R+r);
}
FrustumS(3,5,6);

//問題７
function validCredentials(username,password){
	if(username >= 2 && password >= 6){
		return true;
	}else if(username < 2 || password < 6){
		return false;
	}
}
console.log(validCredentials("aaa".length,"44566".length));

//問題８
function isEven(n){
	var gusu =[0,2,4,6,8];
	var kisu =[1,3,5,7,9];
	//console.log(typeof(n),n);
	if(gusu.includes(n)){
		return true;//偶数
	}else if(kisu.includes(n)){
	  return false;//奇数
	}
}
console.log(isEven(Number(String(265).slice(-1))));

//問題９
function isOfAge(age){
	if(age>=20){
		return console.log(true,"乾杯！！") ;
	}else if(age,20){
		return console.log(false,"お酒は２０歳から");
	}
}
console.log(isOfAge(19));

//講義用
if(budjet > 1000){
	console.log("フラペチーノ飲みたい");
}
//演習
console.log(100>99);
console.log("true" !== true);
let age = 16;
if(age<=18){
	console.log(true);
}