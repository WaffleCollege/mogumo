/* exported getElementsByClassName */

//const className = "example";
//const elements = document.getElementsByClassName(className);

/*
const getElementsByClassName = () => {
	const node = [];
	node.push(document.body);
	let a = 0;
	function childsearch(){
		if(node[a].hasChildNodes()){
			for(let i = 0; i<node[a].childNodes.length; i++){
				node.push(node[a].childNodes[i]);
			}
			a++;
		}else{
			a++;
		}
	}
	while(node.length<=50){
		childsearch();
	}
	console.log(node);
	return node;
}
*/
function getAllElements(parentElement = document) {
  const elements = [];

  function searchForElements(node) {
    elements.push(node);

    if (node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        searchForElements(node.childNodes[i]);
      }
    }
  }

  searchForElements(parentElement);
  return elements;
}
window.addEventListener('load', function() {
  console.log(getAllElements());
});


//let a = document.body
//a = a.childNodes
//a = a.children

