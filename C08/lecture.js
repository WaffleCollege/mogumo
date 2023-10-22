let arr = [1,5,4,3,8,7,6,10,18,2];
console.log(mergeSort(arr));

function mergeSort(arr){

	if(arr.length < 2){
		return arr;
	}

	let A = arr.slice(0,Math.floor(arr.length));
	let B = arr.slice(Math.floor(arr.length/2));

	let mergeA = mergeSort(A);
	let mergeB = mergeSort(B);
	let result = merge(mergeA, mergeB);
	return result;
}

function merge(A,B){
	let C = [];
	let aIndex = 0;
	let bIndex = 0;

	while(aIndex < A.length && bIndex < B.length){
		
		if (A[aIndex] < B[bIndex]) {
      C.push(A[aIndex]);
      aIndex = aIndex + 1;
    } else {
      C.push(B[bIndex]);
      bIndex = bIndex + 1;
    }
  }
    //列Aが空であれば、列Bで最小の要素を列Cに移す
    while (aIndex < A.length) {
      C.push(A[aIndex]);
      aIndex = aIndex + 1;
    }
    //列Bが空であれば、列Aで最小の要素を列Cに移す
    while (bIndex < B.length) {
      C.push(B[bIndex]);
      bIndex = bIndex + 1;
    }
  
  return C;
}