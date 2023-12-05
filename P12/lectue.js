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

/**
    * @param {Array<number>} ???
    * @returns {Array<string>} 与えられた配列の中にある、数字それぞれに20点追加した点数の配列。ただし、最大100点とし、20点加点した結果、100点を越える場合は、その要素は100とする
    */
   // ここにコードを書きましょう
	 const giveBonusPoints = (array) => 
	 	array.map((a)=>(a+20 > 100 ? 100: a+=20)//Math.min(a+20,100)
	 );//元の値を変えないpureな関数を目指すべし
   
	 const points = [10, 60, 20];
   const points2 = [10, 90, 85];

   test(giveBonusPoints(points), [30, 80, 40]);
   test(giveBonusPoints(points2), [30, 100, 100]);

	 /**
	* @param {Array<Object>} ???
	* @returns {Array<string>} 与えられた配列の中にある、Level45以上のPokemonオブジェクトのみを要素として持つ配列
	*/
const getStrongPokemon = (obj) =>
	obj.filter((o) => o.level >= 45);

const pikachu = {"name": "Pikachu", "level": 24};
const hitokage = {"name": "Hitokage", "level": 50};
const charizard = {"name": "Charizard", "level": 75};
const pachirisu = {"name": "Pachirisu", "level": 32};
const pokemonList = [pikachu, hitokage, charizard, pachirisu]
test(getStrongPokemon(pokemonList), [hitokage, charizard]);

//テストをもう1つ自分で追加しましょう