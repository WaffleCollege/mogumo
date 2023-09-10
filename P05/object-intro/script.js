'use strict'
// Please don't delete the 'use strict' line above
let q = 1;
function count(){
	console.log(`問題${q}`);
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

count();//問題１
const myInfo = {
	name: "mogumo",
	age: 22,
	location: "Fuk",
	isCoder: true
}
console.log(myInfo["isCoder"]); // => "true"

count();//問題２
const morseCode = {
	t: "-",
	a: ".-",
	r: ".-."
}
console.log(morseCode["t"])
test(morseCode["t"], "-");
console.log(morseCode["a"])
test(morseCode["a"], ".-");
console.log(morseCode["r"])
test(morseCode["r"], ".-.");

 count();//問題３
 /**
 * @param {object} ??? - オブジェクト
 * @param {Array<string>} ??? - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */

function select(object,array){
let i = 0;
const same = {};
for(const s in array){

	for(const key in object){
		//console.log(key,array[i]);
		//console.log(key == array[i]);
		if(key == array[i]){
			same[key] = object[key] ;
		}
	}
	i++;
}
return same;
}
console.log(select({ a: 1, b: 2, c: 3 }, ["a"]))
test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
console.log(select({ a: 1, b: 2, c: 3 }, ["a", "c"]))
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
console.log(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]))
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
console.log(select({ a: 1, b: 2, c: 3 }, []))
test(select({ a: 1, b: 2, c: 3 }, []), {});

count();//問題４
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

function getNames(p,array){
	const name = p.map(obj => obj.Name);
	console.log(name);
	return name;
}
test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);
