//your JS code here. If required.
function findLevel(){
	let count=0;
	let curr = document.getElementById("level");

	while(curr !== null){
		curr = curr.parentNode;
		count++;
	}
	console.log(`The level of the element is: ${count}`);
}
findLevel()