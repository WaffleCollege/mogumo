'use strict'
// Please don't delete the 'use strict' line above
let q = 1;
function count(){
	console.log("問"+q);
	q++;
}
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}
//問題１
let a = "B";
let b = "A";

let c = a;
a = b;
b = c;
count();
console.log(a); // "A" を表示
console.log(b); // "B" を表示
//問題２
function validCredentials(username,password){
	return username >= 4 && password >= 8;
}
count();
test(validCredentials(5,9),true);

//問題３
const pokemons = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];
/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */

const getNames = (array) => array.map((a)=>a["Name"]);
count();
test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);

//問題４
function printCars() {
  const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];

  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
  }
}
count();
printCars();
/*
//問題５-1
array=document.getElementsByClassName("athing");
for(let a of array){
	a.style.backgroundColor = "red";
}
//問題５-2
for(let i = 0; i < array.length; i++){
	if(i%2 === 0){
		array[i].style.backgroundColor = "red";
	}else{
		array[i].style.backgroundColor = "green";
	}
}
*/
//問題６
		/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
const getQuestions = (array) =>
	array.filter((a)=>
		a.slice(-1) === "?" && /^[A-Z]+$/g.test(a.slice(0,1))
	);

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
];

test(getQuestions(arrayOfStrings3), [
  "What in the world?",
  "Do you want to know a secret?",
]);
test(getQuestions(arrayOfStrings3.slice(2)), [
  "Do you want to know a secret?",
]);