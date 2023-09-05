const todos = ["牛乳を買う","レポートを作る","null","バイトの面接","null"];

console.log("aiueo" && 5 && "" && false);

//ようこそゲストさん
const user = input || "ゲスト";
`ようこそ${user}`

//Null 合体演算子(??)

//テスト関数
"なにかメソッドがあるかも"
"関数の前にコンソールで問題表示"

//P04-1
for(const todo of todos){
	if(todo != "null"){
		console.log(todo,typeof todo);
	}
}

//P04-2
let budget = 1600;
let hasCoupon = false;

if(budget > 1500){
	if(hasCoupon){
		console.log("Let's go to afternoontea");
	} else {
		console.log("Let's go eat yakiniku")
	}
}

//P04-3
let badget = 1600;
hasCoupon = true;

if(badget > 1500 && hasCoupon){
	console.log("Let's go to afternoontea");
}

if(badget > 1500 || hasCoupon){
	console.log("Uber come on!");
}

hasCoupon=false;
if(!hasCoupon){
	console.log("use coupon");
}

//演習１
function sayFizzBuzz(num){
	if(num % 3 ===0 && num % 5===0){
		console.log("Fizz Buzz");
	} else if (num % 3 === 0){
		console.log("Fizz");
	} else if (num % 5 === 0){
		console.log("Buzz");
	}
}
sayFizzBuzz(15);
sayFizzBuzz(10);
sayFizzBuzz(6);

//演習２
hasCoupon = confirm("クーポンを持っていますか？");
budget = 1600;
if (budget > 1500) {
	if(hasCoupon){
		console.log("We'll go to afternoontea!!");
	} else {
		console.log("Lunch is yakiniku today!")
	}
}