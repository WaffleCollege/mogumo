function mergeSortedLists(arr1,arr2) {
  // ここにあなたのコードを書いてください
	let answer = [];
	let a = 0;
	let b = 0;

	while(a < arr1.length && b < arr2.length){

		if(arr1[a] === undefined){
			answer.push(arr2[b]);
			b++;
		}else if(arr2[b] === undefined){
			answer.push(arr1[a]);
			a++;
		}

		if(arr1[a] < arr2[b]){
			answer.push(arr1[a]);
			a++;
		}else{
			answer.push(arr2[b]);
			b++;
		}

	}

	return answer;
}
let list1 = [2, 7, 11, 23];
let list2 = [6, 9, 13, 25];
console.log(mergeSortedLists(list1,list2)); // => [2,6,7,9,11,13,23,25]
