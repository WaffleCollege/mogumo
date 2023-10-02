/* exported getElementsByClassName */
console.log("2");
//const className = "example";
//const elements = document.getElementsByClassName(className);

const getElementsByClassName = (className) => {
	const node = [];
	node.push(document.body);
	
	const more = (node, nodelist = []) =>{
		for(let i =0;i<node[i].length; i++){
			nodelist.push(node[0].childNodes);
			console.log(nodelist);
		}
	}
	console.log(node[0]);
	return node;
}
