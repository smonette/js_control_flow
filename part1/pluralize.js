// pluralizer.js

// Take an input like
// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"



function pluralize(word, num){
	if(num === 0 ){
		console.log("I don't think you have a " + word+".");
	} else if (num === 1){
		console.log("You only have one " + word+".");
	} else if (num >= 2){
		console.log("You have " + num + " " + word+"s.");
	}
}

pluralize("dog", 1);
pluralize("cat", 5);
pluralize("house", 0);