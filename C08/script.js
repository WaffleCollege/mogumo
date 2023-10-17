'use strict'
// Please don't delete the 'use strict' line above

// ヒント： これまでにならったRecursionやメソッドの知識をフル活用する必要がありそうです・・・！
function mergeSort(arr) {
	let arr1;
	let arr2;

	if(arr.length>1){
		arr1 = arr.slice(0,arr.length/2);
		arr2 = arr.slice(arr.length/2);
	}else{
		return arr;
	}
	return merge(mergeSort(arr1),mergeSort(arr2));
}

function merge(left,right){
	const result = [];
	let l = 0;
	let r = 0;

	while(l < left.length && r < right.length){
		console.log("ひだり:"+left[l]);
		console.log("みぎ:"+right[r]);
		if(left[l] < right[r]){
			result.push(left[l]);
			l++;
		}else{
			result.push(right[r]);
			r++;
		}
	}
	console.log("ここ",result,left,right,l,r)
	return result.concat(left.slice(l)).concat(right.slice(r));
}//

let arr = [1,5,4,3,8,7,6,10,18,2];
console.log(mergeSort(arr));// => [1, 2, 3, 4, 5, 6, 7, 8, 10, 18]
