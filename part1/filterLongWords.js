// filterLongWords.js
// Hardcode an array of words. Have a variable maxLength, and push those words to only to an array filter long words






var myWords = [
	"cat", 
	"dog", 
	"dictionary", 
	"waterbottle",
	"hi",
	"mouse",
	"potato",
	"of",
	"howdy"
	];
var maxLength = 4;
var filterLongWords = [];

for (i = 0;i < myWords.length; i++){
	if (myWords[i].length >= 4){
		filterLongWords.push(myWords[i]);
	} 
};

console.log("All the long words are:" + filterLongWords);







// ALTERNATE: Put short words in their own short word array

// var myWords = ["cat", "dog", "dictionary", "waterbottle","hi","mouse","potato","of","howdy"];
// var maxLength = 4;
// var filterLongWords = [];
// var filterShortWords = [];

// for (i = 0;i < myWords.length; i++){
// 	if (myWords[i].length >= 4){
// 		filterLongWords.push(myWords[i]);
// 	} else {
// 		filterShortWords.push(myWords[i]);
// 	}
// };

// console.log("Short words: " + filterShortWords);
// console.log("Long words:" + filterLongWords);





// In class solution

var myWords2 = [
		"sun",
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Saturn",
		"Uranus",
		"Neptune",
		"planet",
		"contienent",
		"country",
		"state",
		"city"
	],
	maxLength = 4;

var filteredList = [];

for (var i = 0, currentWord; i < myWords.length; i++) {
	currentWord2 = myWords2[i];

	if (currentWord2.length < maxLength){
		filteredList.push(currentWord2);
	}
};

console.log("The filtered list is: " + filteredList);









