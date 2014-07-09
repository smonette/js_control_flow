// tempConvert.js

// Out a temperature conversion. Convert it to fahrenheit and output "NN°C is NN°F".






function temptConvert(celsius){
	var fahrenheit = (celsius * 1.8) + 32;
	console.log(celsius +"\°C is " + fahrenheit +"\°F.");
}

temptConvert(20);