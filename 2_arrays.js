//Declaring an array , literal way
var myArray = [];

//Also, you can use a Constructor Function
var myArray = new Array();

//Manipulating Arrays
var pizzas  = [];
pizzas[0]   = 'Muzarella';      //Bottom of pile
pizzas[1]   = 'Margatita';
pizzas[2]   = 'Fugaseta';
pizzas[3]   = 'Napolitana';     // Top of pile

//Is the same to do
var pizzas  = ['Muzarella','Margatita','Fugaseta','Napolitana'];


//Deleting values from array
delete pizzas[2]; // delete Fugaseta, pizzas = ['Muzarella','Margatita'pizz,'Napolitana']. IMPORANT: The lenght of array pizzas still in 4. But the box #2, has an undefined value.

//How to get the size of an Array
pizzas.length

//You can use the length to finde the last value
pizzas[pizzas.length - 1]; //get the last item

//You can set the lengh for an array 
pizzas.length = 8; // Add undefined items until 8.
pizzas.length = 3; // Short the array, all extra elementes will be removed.


//Adding a item to array, at the top of pile
pizzas.push("Peperoni");
pizzas.push("Queso y Cebolla");

//Remove the top (last) item
pizzas.pop(); //Remove "Queso y Cebolla"

//Adding a item to array, at the bottom of pile
pizzas.unshift("Vegetales");

//Remove the bottom (first) item
pizzas.shift(); //Remove "Muzarella"

//     push(val) (+)-->   (-)--> pop()
//                     [2] 
//                     [1] 
//                     [0]  
//  unshift(val) (+)-->   (-)--> shift()


//Adding Multiple Items.Merging Array
pizzas  = pizzas.concat(['De la casa','Champiniones']); //NOTE, concat not add the elements.. you need to asign using pizzas = pizzas.concat()

//Get a String separated by comma from array items
pizzas.join();
pizzas.join(" & "); //Separate by &

//Chopping (cut) and array
pizzas.slice(2,4); //returns ["Peperoni", "De la casa"], the pizzas array still with all items
var pedido1 = pizzas.slice(2,4); //New array pedido 1 has ["Peperoni", "De la casa"]

//Splicing array, remove one or mor items, and add extra items in this place
pizzas.splice(0,3,'Vegetariana','La Peperoni');


//Revert the order of pile
pizzas.reverse();

//Sorting an array
pizzas.sort();

//Finding if a value is in array
pizzas.indexOf("Guacamole"); // return -1, so is not in the array
pizzas.indexOf("Vegetariana"); // return 3, so is in the position #3

//MultiDimentional Arrays
var cordinates = [[1,3],[4,2]];
//cordinates[0] .. return array
//cordinates[1] .. return array
//cordinates[0][0] .. return 1
//cordinates[0][1] .. return 3
//cordinates[1][0] .. return 4
//cordinates[1][1] .. return 2