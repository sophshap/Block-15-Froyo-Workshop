// // You ate a cheeseburger for $12.
// Jonah had the $20 steak.
// Amy's soup cost $8.
// Mateo did not like his mac and cheese for $14.
// Cheyenne was impressed by the unlimited soup and salad combo for $16.


// Declare an object named dinner that uses the purchased food as the keys and the price of the food for the values.


const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    mac: 14,
    combo: 16,
};

// Using the dinner object, create an array of the different foods that were eaten during the dinner.

// console.log(Object.keys(dinner));




//  Using the dinner object, create an array of the prices of the meals eaten during the dinner

// console.log(Object.values(dinner));





// Using what we know about objects, add the values of the dinner object to calculate the total cost of the meal. 
let totalCost = 0;

for (const individualMeal in dinner) {
    totalCost += dinner[individualMeal];
}

console.log(totalCost);