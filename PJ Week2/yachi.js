"use strict";  
document.addEventListener("DOMContentLoaded", function () {
  // ここにGSAPのコードを記述
    //初期遅延3.5秒かけてから.nameを表示
  gsap.to(".name span", {
  delay: 3.5, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
  duration: 1.5, //アニメーションの時間の設定
  opacity: 1, //表示状態の指定
  //同じclass名のバリデーションの設定
  stagger: {
    each: 0.2, //ディレイ時間
    from: "start", //出現方法の指定
  },
});
});