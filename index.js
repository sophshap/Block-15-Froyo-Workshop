// Pseudocode:
// create an object labeled customer and add the key:value pairs
// Modify the properties in the customer object using bracket notation
// Delete the properties in the customer object using the delete keyword
// Add the  key:values to the customer object using dot notation
// In an array, print the keys in your survey

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: "undefined",
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};



customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = "3195551234";
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha"
delete customer["zipCode"]
delete customer["favoriteStore"]
customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32

console.log(Object.keys(customer));