'use strict'
// Please don't delete the 'use strict' line above

//Promise{<pending>(=処理中)}で帰ってきた
//JSONはPromiseで返す
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
  .then((results) => {
    console.log(results.json())
   })

//オブジェクトで結果が帰ってきた（Promiseobjectの中身）
 fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${10}`)
 .then((results) => {
   return results.json()
 })
 .then((json) => {
	console.log(json.results)
	for(let a of json.results)
   console.log(a.name)
 })