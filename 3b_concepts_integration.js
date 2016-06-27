/**
 * Simple quiz example
 * */
 
 
 //Defining Q&A
 var quiz = [
        ["Name of superman", "Clark Ken"],
        ["30 + 3", 33],
        ["20 / 2", 10],
        ["Name of superwoman", "Diana Prince"],
        ["What is Batman's Real Name", "Bruce Wayne"],
        ["30 + 4", 34],
      ]

//Set initial score
var score = 0;

//Game Logic
for (var i=0, max=quiz.length; i<max; i++){
    //get the answer from user
    var answer = prompt(quiz[i][0]);
    
    //check if answer is correct
    if(answer==quiz[i][1]){
        alert("Correct!");
        score++
    }
    else {
        alert("Wrong");
    }
}
alert ('Quiz is over... your score is '+ score+' points');

      