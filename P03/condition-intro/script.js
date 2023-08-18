'use strict'
// Please don't delete the 'use strict' line above

//問題１
function simplePasswordLock(password) {
  if (password == "password") {
    return "Correct! Welcome.";
  }
  return "Incorrect password, please try again.";
}
console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//問題２
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);//スペースも長さに含まれる。

//問題３
function isItTooLong(aaa){
	return aaa > 10;
}
console.log(isItTooLong("mogumoguyummy-".length));

//問題４
function biggerNumber(numOne, numTwo) {
	if(numOne > numTwo){
		return 'The first argument is bigger.';
	} else {
		return 'The second argument is bigger.';
	}
}
console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'

//問題５
function greeting(name,language){
	if(language === "Japanese"){
		return `Konnichiwa, ${name}!`;
	} else if (language === "English"){
		return `Hello, ${name}!`;
	}
}
console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"