
console.log("It's just a Fun activity!")
console.log("Here is one of the Quiz I have created for how much you know me!");
console.log("Their are some questions I have included here you just need to give ans in one word as per the question.")

console.log("so, Let's get started!");



var readlineSync = require('readline-sync');
var score = 0;
//question one
var q1="AM I older than 21? ";
var ans1="no";

var q2 = "Am I from the Aurangabad? ";
var ans2 = "yes";

var q3 = "Is my favourite color green? ";
var ans3 = "no";

var q4 = "Is my graduation completed? ";
var ans4 = "no";

var q5 = "Do I like spicy food? ";
var ans5 = "no";

var q6 = "DO I like to play games? ";
var ans6 = "yes";

var q7 = "which one indoor or outdoor? ";
var ans7 = "outdoor";

var q8="Do I love drawing? ";
var ans8 = "yes";

var q9 = "Am I learning electrical engineering? ";
var ans9 = "no";

var q10 = "Do I like travelling? ";
var ans10 = "yes";

var i = 1;

function quiz(question,answer){
 console.log("");
  console.log("Question " + i);
  i++;
  var userInput = readlineSync.question(question);
   console.log("You entered " + userInput);

  // processing
  if (userInput === answer) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score);
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score);
  }
}

quiz(q1,ans1)
quiz(q2, ans2)
quiz(q3, ans3)
quiz(q4, ans4)
quiz(q5, ans5)
quiz(q6, ans6)
quiz(q7, ans7)
quiz(q8, ans8)
quiz(q9, ans9)
quiz(q10, ans10)
