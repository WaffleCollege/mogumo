'use strict'
// Please don't delete the 'use strict' line above

//問題２
"p要素の取得"
const p = document.querySelectorAll("p")
console.log(p);
"main-header要素の取得"//idは#つける
const header = document.getElementById("main-header")
console.log(header);
const headerq = document.querySelectorAll("#main-header")
console.log(headerq);
"class名innerpalagraf表示"//class名は.つける
const paragraph = document.getElementsByClassName("inner-paragraph")
const paragraphq = document.querySelectorAll(".inner-paragraph")
for(let p of paragraph){
	console.log(p);
	console.log(p.textContent);
}

//問題３
function Omoji(word){
	return word.toUpperCase();
}
console.log(Omoji("hello"));

function Omoji2(id){//すでに取得した要素で検索
	id.textContent = id.textContent.toUpperCase();
}
console.log(Omoji2(header));

function Omoji3(word){//タグ、id、クラス名で検索
	const id = document.querySelectorAll(word)
	console.log(id);
	for(let i of id){
		i.textContent = i.textContent.toUpperCase();
	}
}
Omoji3(".inner-paragraph");
//"body"にすると全部大文字

function Omojiall(){//文字列で検索
	const id = document.querySelectorAll("body")
	console.log(id);
	for(let i of id){
		i.textContent = i.textContent.toUpperCase();
	}
}
Omojiall();
//大文字にはなるけどつめつめになっちゃう。。。