/* exported rockPaperScissors */

console.log("1-1");

/*const rockPaperScissors = (rounds = 3) => {
	let out = [];//consoleに表示
	const weapons = ["rock","scissors","paper"];
	const play = (rounds, result = []) => {

		if(rounds < 1) {//roundsが1未満の時終了
			out.push(result);
			console.log(result);
			return;
		}

		for(let i =0; i < weapons.length; i++){
			const weapon = weapons[i];
			play(rounds - 1,result.concat(weapon));
		}
	};
	play(rounds);
	return out;
};*/

function rockPaperScissors(rounds){
	let out = [];
	const weapons = ["rock","scissors","paper"];
	const play = (rounds, result = []) => {
		
		if(rounds < 1) {//roundsが1未満の時終了
			out.push(result);
			return ;
		}

		for(let i =0; i < weapons.length; i++){
			const weapon = weapons[i];
			play(rounds - 1,result.concat(weapon));
		}
	};
	play(rounds);
	return console.log(out);
};
rockPaperScissors(3);

console.log("1-2");
rockPaperScissors(4);