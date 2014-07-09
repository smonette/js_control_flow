// 1.) The kind of results you're are dealing are shopping#products. 
// Go through the items and find all results that have kind of shopping#product. 
// How many are there? Where else is this count information stored in the search results?

// 2.) Find all items with a backorder availability in inventories.

// 3.) Find all items with more than one image link.

// 4.) Find all canon products in the items (careful with case sensitivity).

// 5.) Find all items that have product author name of "eBay" and are brand "Canon".

// 6.) Print all the products with their brand, price, and a image link





var data = require("./products.json")

//
var items = data['items'];






// Question 1

var instances = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['kind'] === 'shopping#product') {
		instances += 1;
	}
}

console.log("There are "+ instances + " items that are shopping#products.");





// Question 2 : Find all items with a backorder availability in inventories.

var backorder = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['inventories'][0]['availability'] === 'backorder') {
		backorder += 1;
	}
}

console.log("There are " + backorder + " items on backorder.");





// Question 3 : Find all items with more than one image link.

var multiImage = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['images'].length > 1) {
		multiImage += 1;
	}
}

console.log("There are " + multiImage + " items that have multiple images.");





// Question 4 : Find all canon products in the items (careful with case sensitivity).

var canons = 0;

for (i = 0; i < items.length; i += 1) {
	if (items[i]['product']['brand'] === 'Canon') {
		canons += 1;
	}
}

console.log("There are " + canons + " Canon brand cameras.");





// Question 5 : Find all items that have product author name of "eBay" and are brand "Canon".

var canonEbay = 0;

for (i = 0; i < items.length; i += 1) {
	if ((items[i]['product']['brand'] === 'Canon') && (items[i]['product']['author']['name'] === 'eBay')) {
		canonEbay += 1;
	}
}

console.log("There are " + canonEbay + " Canon brand cameras on eBay.");





// Question 6 : Print all the products with their brand, price, and a image link


for (i = 0; i < items.length; i += 1) {
	var itemBrand = items[i]['product']['brand'];
	var itemPrice = items[i]['product']['inventories'][0]['price'];
	var itemImages = items[i]['product']['images'][0]['link'];

	console.log("\n" + itemBrand + ", $" + itemPrice + "\n" + itemImages);
}

















//

// console.log(data["items"]);