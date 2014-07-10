// reverse.js
// Write a program that will take a hardcoded string, 
// and console log the reverse it. Use a for loop



// My solution.


var inputString = "building";
var reverseArray = [];

for (i = 0; i < inputString.length; i++){
	reverseArray.unshift(inputString[i]); 
}
var reverseString = reverseArray.join("");

console.log(reverseString + " is the reverse of " + inputString + ".");




// The in class solution. Much more concise than my solution!

var inputWord = "building";
var outputWord = "";

for (var i = 0; i < inputWord.length; i++){
	outputWord = inputWord[i] + outputWord;
};

console.log("The reverse of \"" + inputWord + "\" is \"" + outputWord + "\".");

