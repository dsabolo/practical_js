/**
 * Developers preffer to use large 
 * comments in this better way
 * */
//This is a comment. A short comment

/* you can also add 
large comments by this 
way */


 
/**
* Data Types
* */

var numeric     = 1;
var string      = "Hello";
var boolean     = true;
var undef;
var anArray     = ['dog','cat'];
var anObject    = { ninja: "turtle"};



//Getting the data type
typeof(anObject); // Return object
typeof(anArray); // Return object, IMPORTANT: An array is a particular type of object.
typeof(boolean); //Return boolena
typeof(anObject.ninja); //Return String, cause you are accesing to ninja property of anObject.


/**
* Text Escaping
* */

var myText = 'It is my text';
var myTextEscaped = 'It\'s my text';

/**
 * Some Properties ,Methods and operations
 * */
 
myText.length; //.lenght method , Get the size of a variable. Return 13
anArray.length // return 2
myText.toUpperCase(); // Return the uppercase string
myText.toLowerCase(); // Return the uppercase string
myText.charAt(3); //Get the chart at position 3: i
myText.toUpperCase().charAt(3); // Return I
myText.indexOf('i'); // Return 3, get the position of the first 'i'
myText.indexOf('7'); // Return 12, get the position of the last 't'
myText.concat(" editor."); //Concat a word, but not save it in the variable
myText =  myText.concat(" editor."); //Concat a word, and save it in the variable
" this text have spaces at the beginining and end ".trim(); //Remove initial and final spaces

var points = 0;
points = points + 10; // Add 10 to points, points = 10
points += 10; // Add 10 to points, points = 20
points -= 5;  // Decreases points by 5, points = 15
points /= 3;  // Divides points by 3, points = 5
points++; //return points, and then increment by 1.
++points; //Increnent by 1, and then return the value
points--; //return points, and then increment by 1.
--points; //Increnent by 1, and then return the value
 
 
 3.2921.toPrecision(2); // redondea en 2 digitos
 
parseFloat("2.555").toPrecision(2); //Convert String to float, and precise in 2 digits
 
 var variable = "test";
 !variable; //return false , cause variebla is an String
 var otherVar= null;
 !otherVar; // return true, cause otherVar is null;
 
 
//Bolean operator his shorcut not is false
Boolean(0);                  //false
Boolean(22);                 //true
Boolean("Hola");             //true
!!0;                         //false
!!22;                        //true
!!"Hola";                    // true

 // && Logical AND 
 true&&true;                //return true
 true&&false;               //return false
 false&&false;              //return false
 
 //|| Logical OR
 true||true;                //return true
 true||false;               //return true
 false||false;              //return false

 //Equality comparation
 var answer = 5;
 answer==5;                 //true
 answer==6;                 //false
 answer=="5";               //true
 
 //Hard equality
 answer==="5";              //false
 answer===5;                //true
 
 //Not a Number
 isNaN("ss");               //true
 isNaN(5);                  //false
  
 //Inequality
 16 != "16";                //false
 16 !=="16";                //true
  
//Greater than , Less than
8   >   4;                 //true
8   <   4;                 //false
8   >=  "8";               //true

"corto"< "texto largo";     //true




/**
 * Promp & Alerts
 **/
 
 var question   = "Cual es tu nombre?";
 var answer     = prompt(question);
 alert ("Hi "+answer);
 



