/* exported rockPaperScissors */

console.log("1-1");
const rockPaperScissors = (rounds = 3) => {
  let out = [];
  const weapons = ["rock", "scissors", "paper"];
  const play = (rounds, result = []) => {
    // exit case
    if (rounds < 1) {
      out.push(result);
      return;
    }
    // recursive case
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  };
  play(rounds);
  return out;
};
/*
function rockPaperScissorsR(rounds){
	let out = [];
	const weapons = ["rock","scissors","paper"];
	const play = (rounds, result = []) => {
		
		if(rounds < 1) {//roundsが1未満の時終了
			out.push(result);
			return result;
		}

		for(let i =0; i < weapons.length; i++){
			const weapon = weapons[i];
			play(rounds - 1,result.concat(weapon));
		}
	};
	play(rounds);
	return out;
};
console.log(rockPaperScissorsR(3));

console.log("1-2");
rockPaperScissorsR(4);
*/