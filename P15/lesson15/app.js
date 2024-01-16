fetch("http://localhost:8080/hello")
  .then((response) => {
    response.text().then((data) => {
      console.log("1: Hello!")
    })
  });

console.log("2: Hello!")

const isNext = true;

if (isNext === true) {
  console.log("3: Hello!")
}


// 以下、講義内に出てきたコードサンプル
// コメントを外して実行してみてください
/*
// 存在しないWebサイトへのリクエスト -> catchが動く
fetch("http://localhost:8000/hello")
  .then((response) => {
    console.log('then res: ', response);
    response.text().then((data) => {
      console.log(data);
    })
  })
  .catch((response) => {
    console.log('catch res: ', response);
  })

// async function パターン
async function fetchHello(){
  const response = await fetch("http://localhost:8080/hello");
  const text = await response.text();
  console.log("1: Hello!");
}
fetchHello();
* */
