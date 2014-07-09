// reverse.js
// Write a program that will take a hardcoded string, and console log the reverse it. Use a for loop









var inputString = "building";
var reverseArray = [];

for (i = 0; i < inputString.length; i++){
	reverseArray.unshift(inputString[i]); 
}

var reverseString = reverseArray.join("");

console.log(reverseString);









//FUNCTION to test lots of words

// function reverse(inputString) {
// 	var reverseArray = [];

// 	for (i = 0; i < inputString.length; i++){
// 		reverseArray.unshift(inputString[i]); 
// 	}

// 	var reverseString = reverseArray.join("");

// 	console.log(reverseString);
// }


// reverse("building");
// reverse("gnidliub");
// reverse("San Francisco");
// reverse("tacocat");