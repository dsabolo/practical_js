/**
 * Declaring Functions
 * */
 
 // In JS functions are first class objects.
 
 //Declaration of a named function (literal way) 
 
 function hello(name){
     alert("Hey "+name+"! how are you?");
 }


//Declaration of a function expression (expression way) 
var byebye = function(name){
    alert("Bye friend "+name);
}; //functions expresions requires a semicolons at end


 /**
 * Scope
 * */
//Scope Global
var a= 123; //Is outside a function, so a is global;
function test(){
    return a;
}
test(); //return 123

//Scope Local
function test(){  // Variables in functions has a local scope
    var x = 222;
    return x;
}
print x; //return ReferenceError: x is not defined


/**
 * Hoisting:automatic javascriot proccess of move a value to the top of the code block (function) where it is used, regardless of where it is defined.
 * */
 
//this function in js
 function foo(){
    bar();
    var x = 1;
}
//Is interpreted as
function foo(){
    var x;
    bar();
    x = 1;
}

//This, can produce confuction in a novel developer. Look this example
var x = 'Hello World'; // global variable
 
function foo(){
 alert( x ); // we expect the global value, but return undefined, is not ok.
 var x = 'New Value'; // Ading a new value to x
 alert( x );  // We spec the local value, and return the new value. is Ok
}
 
foo();

//The recomendation is to declare all local values at the top of the block in order to prevent errors.
function foo(){
 var myObj = {};
 var myArray = [];
 var number1, number2, number3;
 var string1, string2, string3;         //tip 1: declare all local variables at the top of block
 var functionExpression = function(){}  //tip 2: declare all sub function extresions at the top
 // Some code here..
 function a(){}                         //tip 3, literal subfunctions can be declared in any place of block. Hoisting do not affect them
 function b(){}
 // Some code here...
}
 
 
 /**
  * Callbacks: JS functions can be passed as params to another functions. A function is passed as an argument is know as a callback.
  * */
 
 function pizza(toping, callback){
     console.log("This is a "+toping+" pizza");
     callback();
 }
 
 function cook(){
     console.log("The pizza is cooking");
 }
 
 function eat(){
     console.log("I've eaten the pizza!");
 }
 
 pizza("Muzarella", cook); //Return : This is a Muzarella pizza , The pizza is cooking
 
 
 //Callback examples and some importants methods
 
 function square(a){
     return a*a;
 }
 
 [1,2,3].map(square); // Map is a method similar a foreach,iterates the callback function with the array items as argument.
 
 [1,2,3,4,5].reduce(function(prev, current){ //reduce method, takes a pair of values an perfom the callback function
     return prev + current;
 });
 

var numbers= [2,5,7,8,10,11];

function evenNumber(number){
    return number%2===0;
}
function majorFive(number){
   return  number>5?true:false;
}
numbers.filter(evenNumber); //[2, 8, 10]. 
numbers.filter(majorFive); // [7, 8, 10, 11]
numbers.filter(majorFive).filter(evenNumber); //[8, 10]
