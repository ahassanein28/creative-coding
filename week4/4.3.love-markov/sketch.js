
// create markov model
let rm = RiTa.markov(2); // must be 2 0r higher, 2 is the most chaotic 2-7 is good 

// find some data 
let data = document.getElementById("source").innerText;

// train the model 
rm.addText(data);



function setup(){
	// generate new sentences 
	let lines = rm.generate(6);

	// find the letter DIV
	let letter = select("#letter"); 

		// add a salutation
	letter.child( createP("Dear Kathrine,"));

		// loop through the array of lines, adding each as a new p element
	for (let l = 0; l < lines.length; l++){
		letter.child(
			createP( lines[l] )
			);
	}

	// add a closing
	letter.child( createP('Sincerely,<br>Markov'));	
}

function mousePressed(){
	letter.remove();
	letter = createDiv();
	letter.id("letter");
	setup();
}
