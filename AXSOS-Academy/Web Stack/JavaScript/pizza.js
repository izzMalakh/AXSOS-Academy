function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {
        crustType: crustType,
        sauceType: sauceType, 
        cheeses: cheeses, 
        toppings: toppings,
        orderIsRdy() {
            console.log("Here is your Pizza sir: " + pizza.crustType +" " + pizza.sauceType +" " + pizza.cheeses +" " + pizza.toppings)
        }


    };
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
pizza2.orderIsRdy();
var pizza3 = pizzaOven("Thin Crust Pizza", "BBQ", ["Mozzarella, Eimeq"], ["Tomatoes, mushroom, onions, chicken"],);
pizza3.orderIsRdy();
var pizza4 = pizzaOven("Thick Crust Pizza", "Detroit sauce", ["brick cheese, Mozzarella"], ["Pepperoni, more pepperoni"])
pizza4.orderIsRdy();

// function random(ingred) {
//     var randomIndex = Math.floor(Math.random()* ingred.length);
//     return ingred[randomIndex];
// }
// function getRandomPizza() {
//     const crustType = ["deep dish", "hand tossed", "Thin Crust", "Thick Crust"];
//     const sauceType = ["traditional", "BBQ", "marinara", "Detroit sauce"];
//     const cheeses = ["mozzarella", ["feta", "Eimeq"], "brick cheese"];
//     const toppings = ["Pepperoni", "chicken", ["onions", "Tomatoes", "mushroom"]];

//     return pizzaOven(random(crustType), random(sauceType), random(cheeses), random(toppings));

// } 

// console.log(getRandomPizza());