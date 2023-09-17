'use strict'
// Please don't delete the 'use strict' line above

// favoriteFoodのidがついたpタグを持ってきて、変数に入れる
const favoriteFood = document.getElementById("favoriteFood")

// 上で作成した変数に、文字をいれる
favoriteFood.textContent = "カレーライス";


// 問題1
// 上のを真似して、「好きなこと」も表示させましょう！
const favoriteThings = document.getElementById("favoriteThings")
favoriteThings.textContent = "寝ること";

// 問題2
// 日付を表示させましょう！
const today = document.getElementById("today");
const todayis = new Date();

let year = todayis.getFullYear();
let month = todayis.getMonth();
let date = todayis.getDate();

today.textContent = year+"年"+month+"月"+date+"日";

// 問題3
// DOMイベントを活用して、「クリックしたら背景色が変わる」ようにしよう
const btn = document.getElementById("changeColor");
function ChangeColor(){
	const body = document.querySelector("body");
	body.style.backgroundColor = "#ff8c00";
}
btn.addEventListener("click",ChangeColor)
