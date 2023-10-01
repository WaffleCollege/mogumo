/*
const title = document.querySelector(".title");
title.style.fontSize = "20px";

const titleAll = document.querySelectorAll(".title");
for(let t of titleAll){
	t.style.backgroundColor = "blue";
}

//文章消える
let i = titleAll.length;
for(let t of titleAll){
	if(i%3 === 0 || j%4 === 0){
		t.style.display = "none";
	}
	i--;
}

//番号消える
i = 0;
for(let t of titleAll){
	if(i%2 === 0){
		t.style.display = "none";
	}
	i++;
}
*/

console.log("07-1,1");//07-1
let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber); // 1
console.log(aFriend); // 1
console.log(theLoneliestNumber === aFriend); // true

console.log("07-1,2")
const kermit = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const missPiggy = kermit.slice();

console.log(kermit); // ["red","orange","yellow","green","blue","indigo","violet",]
console.log(missPiggy); // ["red","orange","yellow","green","blue","indigo","violet",]
console.log(kermit === missPiggy); // false

console.log("07-1,3");
let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // "Monday"
console.log(papas); // "Monday,so good for me"
console.log(mamas === papas); // false

console.log("07-1,4");
const theFabFour = {
  bass: ["paul"],
  drums: ["ringo"],
  guitar: ["george", "john"],
  vocals: ["george", "john", "paul", "ringo"],
};

const theFifthBeatle = theFabFour;
theFifthBeatle.guitar.push("beau");

console.log(theFabFour); // {bass: ["paul"],drums: ["ringo"],guitar: ["george", "john"],vocals: ["george", "john", "paul", "ringo"],}
console.log(theFifthBeatle); // {bass: ["paul"],drums: ["ringo"],guitar: ["george", "john"],vocals: ["george", "john", "paul", "ringo"],}
console.log(theFabFour === theFifthBeatle); // true

console.log(theFabFour.guitar); // "george","john","beau"
console.log(theFifthBeatle.guitar); // "george","john","beau"
console.log(theFabFour.guitar === theFifthBeatle.guitar); // true