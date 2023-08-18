'use strict'
// Please don't delete the 'use strict' line above

//問題１
function add(numOne,numTwo){
	return numOne + numTwo;
}
console.log(add(4,3));
console.log(add(100,42));

//問題２
console.log(add(100)); // NaN
console.log(add(1, 4, 5)); //1と4だけ計算される。 

//問題３
function simpleFunctionA() {
  return "Hello simple function A";//returnで引数に値を返している
}

function simpleFunctionB() {
  console.log("Hello simple function B");//処理が関数に入っただけ
}
console.log(simpleFunctionA(), "--> From running Simple Function A");//Hello simple function A--> From running Simple Function A
console.log(simpleFunctionB(), "--> From running Simple Function B");//→undefined,--> From running Simple Function B
//実行したときになんで間に"Hello～B"が入るのかわからない。simpleFunctionBが二回呼びだされてる???
//console.log内で関数が呼び出されているとしたら、undefinedの値の後に改行されているのは仕様???

//問題４
function average(num1, num2) {
  return (num1+num2)/2;
}
console.log(average(4, 6)); // => 5
console.log(average(100, 42)); // => 71

//問題５
function square() {//仮引数がいらない
  return  5 * 5;
}
square();
console.log(square());//下と一緒にだと結果が上手くいかない。

function square(x) {//全部文字列型→数字
  return x * x;
}
square(15);

//問題６
function Square(monkey) {
  return monkey ** 2;
}
Square(4);

//問題７
function cube(x) {
	return x ** 3;
}

//問題８
function waffleMaker(topping) {
	return topping + " Waffle";
}
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

//問題９
function aoc(hannkei){
	return hannkei**2*Math.PI;
}
aoc(2);
//理解度　１NaN,多い分は無視される 2関数の結果を返す、処理を終了させる。外では使えない。

//問題１０
function simpleHelloA() {
  console.log("hello");//値を返してない
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);//undefined,hello

//問題１１
function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}

console.log(createGreeting("Good morning","Mike")); //"Good morning, Mike!" を表示
console.log(createGreeting("Hello","Beau")); // "Hello, Beau!" を表示
console.log(createGreeting("Good evening","Alex")); // "Good evening, Alex!" を表示

//講義用
function introduce(name,age){
	console.log("こんにちは");
	console.log(`私の名前は${name}です。`);
	console.log(`年齢は${age}歳です。`);
}//バックティックのときは``で囲む。

introduce("もぐも","はく");
introduce("鈴木",20)

function discount(price){
	return price - 100;
}
const result = discount(500);
console.log(result);

function double(num){
	console.log("The argument is",num);
	return num * 2;
	console.log("The return value is", num * 2); //returnされてない
}
double(10);//The argument is 20

function subtract(num1,num2){
	return num1-num2;
}

function greeting(name){
	return "Hello, "+name;
}
console.log(greeting("Suzuki"));
console.log(greeting("Sato"));