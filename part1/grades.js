// grade.js

// Output the following code from a variable with with a code returns a grade for the score, either "A", "B", "C", "D", or "F".





function grading(scorePercent){
	if (scorePercent >= 90){
		console.log(scorePercent + "% is an A! Good job!")
	} else if ((scorePercent >= 80) && (scorePercent <= 89)){
		console.log(scorePercent + "% is a B!")
	} else if ((scorePercent >= 70) && (scorePercent <= 79)) {
		console.log(scorePercent + "% is a C!")
	} else if ((scorePercent >= 60) && (scorePercent <= 69)) {
		console.log(scorePercent + "% is a D!")
	} else if (scorePercent <= 59){
		console.log(scorePercent + "% is an F...")
	} else {
		console.log("What sort of grade is " + scorePercent + "???");
	}
}

grading(3);
grading(56);
grading(67);
grading(76);
grading(82);
grading(95);
grading("potato");