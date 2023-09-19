'use strict'
// Please don't delete the 'use strict' line above
let a =1;
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
function count(){
	console.log("問題"+a);
	a++;
}

count();//1
function sayHellos(num){
	for(let i=0; i<num; i++){
		console.log("Hello!");
	}
}
sayHellos(4);

count();//2
function countToTen(){
	for(let i=1;i<=10;i++){
		console.log(i);
	}
}
countToTen();

count();//3
function counter(num) {
  /*let i = 0;
  while (i < num) {
    console.log(i);
    i++;
  }*/
	for(let i=0;i<num;i++){
		console.log(i);
	}
}
counter(5);

count();//4
/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
function createRange(num1,num2){
	let array = [];
	for (let i = num1; i<=num2; i++){
		array.push(i);
	}
	console.log(array);
	return array;
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

count();//5
function printCars() {
  const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
	/*let i = 0;
  while (i < cars.length) {
    console.log(cars[i]);
    i++;
  }*/
	for(let i=0;i<cars.length;i++){
		console.log(cars[i]);
	}
}
printCars();

count();//6
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
  /*for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }*/
	let i = commands.length-1;
	while(i>=0){
		console.log(commands[i]);
		i--;
	}
}
decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

count();
console.log("7-1");
/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
function addTogether(array1,array2){
	const answer = [];
	for(let i=0; i<array1.length; i++){
		let num = array1[i]+array2[i];
		answer.push(num);
	}
	console.log(answer);
	return answer;
}

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

console.log("7-2");
function addTogether2(array1,array2){
	let answer =[];
	const Maxlength = Math.max(array1.length, array2.length);
	for(let i=0;i<Maxlength;i++){
		let num = (array1[i] ||0) + (array2[i] || 0);//||を上手く使おう！
		answer.push(num);
	}
	console.log(answer);
	return answer;
}
test(addTogether2([1], [4, 5, 6]), [5, 5, 6]);
test(addTogether2([4, 5, 6], [1]), [5, 5, 6]);

count();//8
/**
 * @param {Array<any>} 数字の配列
 * @returns {number} 引数の配列の要素の合計値
 */
function sum_arr(array){
	let sum = 0;
	for(let i=0; i<array.length; i++){
		sum += array[i];
	}
	console.log(sum);
	return sum;
}

test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);

count();//9
function sum(...array){
	let a = [].concat(...array);
	let sumall = 0;
	for(let i=0; i<a.length; i++){
		sumall += a[i];
	}
	console.log(sumall);
	return sumall;
}
test(sum([1,2,3],[4,5,6],[7,8],9),45);

function counter(num){
  let i =0;
  while(i<=num){
    console.log(i);
    i++;
  }
}
counter(5);