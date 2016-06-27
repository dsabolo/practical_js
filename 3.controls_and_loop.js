/**
* If Statements
* */
var age=25;

if(age==25){
    alert("You have only 25!");
}
else {
    age = prompt("Please, complete with your age");
    alert("You have "+age);
}


/**
* Else Statements
* */
var n = prompt("Please, complete with a number");
if(n%2===0){   //%, operador resto de divición
    console.log(n+" is a even number");
}
else {
    console.log(n+" is a odd number")
}


/**
* Ternary Operation, other way to do an if ...else
* */
var n = prompt("Please, complete with a number");
n%2===0 ? console.log(n+" is a even number") : console.log(n+" is a odd number");


/**
* Switch Statements
* */
var number = parseInt(prompt("Choice a number 1,2 or 3"));
if(number===1){
    alert("#1 is a good election");
}
else if (number===2){
  alert("#2 is a good election");
}
else if (number===3){
  alert("#3 is a good election");
}
else {
   alert("Please, select a valid option."); 
}


//Now with Switch Statement
number = parseInt(prompt("Choice a number 1,2 or 3"));
switch (number) {
    case 1:
        alert("#1 is a good election");
        break;
    case 2:
        alert("#2 is a good election");
        break; 
    case 3:
        alert("#3 is a good election");
        break;    
    
    default:
         alert("Please, select a valid option."); 
         break; 
}


/**
 * While Loop
 * */
 var bottles = 12;
 while(bottles>1){
     alert("I have "+bottles+" bottles");
     bottles--;
 }
 
 var bottles = 12;
 while(--bottles){
     alert("I have "+bottles+" bottles");
 }
 
 
 
 /**
 * Do While Loop
 * */
 var bottles = 10;
 do {
     alert("I have "+bottles+" bottles");
     bottles--;
 }
 while (bottles>0);
 
 
 
 /**
  * For Loop
  * */
  for (var bottles=5; bottles >0; bottles--){
      alert("I have "+bottles+" bottles");
  }
  
  /**
  * Nested For Loop
  * */
  for(var a=0; a<10; a++){
      for(var b=0; b<10; b++){
          console.log(a+" multiplied by "+b+" is "+a*b);
      }
  }
  
  
  
  
  
 