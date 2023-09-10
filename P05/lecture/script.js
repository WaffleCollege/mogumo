'use strict'
// Please don't delete the 'use strict' line above

//5-1
const cat = {
		name: "Azuki",
		age: 3,
		breed: "mixed"
};
console.log(cat["name"]);//ブラケット記法
console.log(cat["age"]);
console.log(cat.name);//ドット記法
console.log(cat.age);

cat.age = 5;
cat.birthday = "02/22";
console.log(cat);

//5-2
let key = "breed";
console.log(cat[key]);

let name = "Azuki";
console.log(cat[name]);//"Azuki"というプロパティ名はない

console.log("***5-3***")
for (const key in cat){
	console.log(cat[key]);
}

//演習
console.log("***演習***")
const message = {
	body: "こんにちは！",
	sentAt: "2023-08-06",
	account: "suzuki",
	isRead: false
}

for (const p in message){
	console.log(p);
	console.log(message[p]);
}