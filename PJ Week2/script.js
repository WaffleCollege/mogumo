"use strict";

let recommend = document.querySelector(".recommend");
let artist = document.querySelector(".name");
let img = document.querySelector("img");
let font = document.querySelectorAll(".fonts");
let comment = document.querySelectorAll("blockquote");
let imp = document.querySelectorAll("span");


//画面遷移
function mogbtn(){
  window.location.href = './index.html';
}

function yachibtn(){
  window.location.href = './yachi.html';
}

function amibtn(){
  window.location.href = './amiba.html';
}

function meibtn(){
  window.location.href = './meiry.html';
}


for(let i of font) {
  i.style.fontSize = "30px";
}

for(let i of imp) {
  i.style.fontWeight = "bold";
}



const scroll_to_top_btn = document.querySelector("#scroll-to-top")

function scroll_to_top(){
  window.scroll({top: 0, behavior: "smooth" })
}

//スライド用js

$(".slide-items").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  fade: true,
  cssEase: 'linear',
  speed: 1000,
  infinite: true, // 無限スライド
  arrows: true, // 矢印
  dots: true, // インジケーター

});

//導入アニメーション用js

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め背景をフェードアウト！
});
