const title = document.querySelector(".title");
title.style.fontSize = "20px";

const titleAll = document.querySelectorAll(".title");
for(let t of titleAll){
	t.style.backgroundColor = "blue";
}

//文章消える
let i = titleAll.length;
for(let t of titleAll){
	if(i%3 === 0 || i%4 === 0){
		t.style.display = "none";
	}
	i--;
}

//番号消える
let i = 0;
for(let t of titleAll){
	if(i%2 === 0){
		t.style.display = "none";
	}
	i++;
}