//演習7-1
const nums = [1,2,3];
const words = ["A","B","c"];

function effect() {
	nums.push(4);
	const words = [];
	words.push("D");
	return words;
}

const result = effect();

console.log(result);//[D]
console.log(nums);//[1,2,3,4]

//演習7-2
const cat = {
	name: "Azuki"
};
const age = 5;

function effect(ref, val) {
	ref = "Mugi";//error(ref.name)
	val++;
	console.log(val);//6
	console.log(ref);
}

effect(cat,age);
console.log(cat);
console.log(cat.name);//関数内をrefだけにするとAzuki
console.log(age);//5

//演習7-3
console.log("7-3");
function fibonacci(num) {
	if (num <= 1) {
		return num;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3));//3