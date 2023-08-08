'use strict'
// Please don't delete the 'use strict' line above

//1
const name = "mogumo";
console.log(name);

const age = "22";
console.log(age);

const isProgramer = "true";
console.log(isProgramer);

let currentTask = "1";
console.log(currentTask);

//2 currentTask に 2 を割り当て直してください
currentTask = "2";
console.log(currentTask);

//3
// 正方形の面積を計算して保存
const squareSideLength = 2;
const squareArea = squareSideLength * squareSideLength;
console.log(squareArea);

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangArea);

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = triangleBaseLength * triangleHeightLength / 2;
console.log(triangleArea);

//1 JavaScript の演算子 typeof を使ってみましょう
// 問題1
const variableNumber = 5; //数字
console.log(typeof variableNumber);

// 問題2
const variableBoolean = 3<5; //true || false　null→object
console.log(typeof variableBoolean);

// 問題3
let variableUndefined;
console.log(typeof variableUndefined);

//2 2つのnumberの平均を計算して変数に格納しましょう
const numberA = 4+3;
const numberB = 17+6;

const average = (numberA + numberB)/ 2;
console.log(average);

//中級演習
//1 円の円周と面積
const circleDiameter = 10;//diameterは直径

const circleCircumference = circleDiameter * Math.PI;
console.log(circleCircumference)//円周

const circleArea = (circleDiameter/2)** 2 * Math.PI;
console.log(circleArea);//面積

//2 aとb入れ替え
let a = "B";
let b = "A";

let c = a
a=b;
b=c;

console.log(a);
console.log(b);

//3 変数の練習問題
let A = "2";
let B = "5";
let C = "6";

B = A + B + C;
C = B * (C - A);
A = C + 7;

console.log(typeof A);
console.log(typeof B);
console.log(typeof C);

Answer = window.prompt("Aは？(半角数字)");
if(Answer != A){
	alert("ぶっぶーですわ");
}else if(Answer == A){
	alert("天才！！😘");
}

const firstName = "Wafuru";
const lastName = "Tomoko";
const city = "Tokyo";

console.log("Hello,my name is "+firstName+" "+lastName+". I live in "+city+"."); // "Hello, my name is Wafuru Tomoko. I live in Tokyo." を表示
console.log(`"Hello,my name is ${firstName} ${lastName}. I live in ${city}"`);
