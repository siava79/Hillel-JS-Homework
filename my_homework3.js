// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

var catWeight = 6; 
if (catWeight < 5) {
  console.log("The cat is small and still needs to be fed.");
} 
else {
  console.log("The cat is very fluffy and needs to be combed.");
}

/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

var ageCandidate = 16; 
if (ageCandidate < 18) {
  console.log("You have to go to work early, you still have to study");
} 
else if (ageCandidate >= 18 && ageCandidate <= 50) {
  console.log("Welcome to the interview!");
}
else if(ageCandidate >50) {
    console.log("You need to rest already!")
  }


/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */


var grade = 'C'; 
if (grade === 'A' || grade === 'B') {
  console.log("You has passed the exam")
} 
else if (grade === 'C' || grade === 'D') {
  console.log("We send them for a retake!")
}
else if (grade === 'E') {
    console.log("Expulsion!")
  }


/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */

 const userNumber = 42;

 var inputYourNumber = 43;

 if (inputYourNumber < userNumber) {
   console.log("Your number is too small, choose another!")
 } else if (inputYourNumber > userNumber) {
   console.log("Your number is too high, choose another!")
 } else {
   console.log('You guessed the number!')
 }

 /*Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
*/


var height = 150;

height < 140 ? console.log("Заборонено на атракціон") : console.log("Проходьте, будь ласка!");


/*Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/

var height = 120;

height < 50 ? console.log("Forbidden to use attraction") :
height >= 50 && height < 80 ? console.log("Permit - attraction №1") :
height >= 80 && height < 120 ? console.log("Permit - attraction №1 or №2") :
console.log("Permit - All");








//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

  // Change this number to the desired day number (1 for Monday, 2 for Tuesday, etc.)

var whatIsDay = 8;

switch (whatIsDay) {
  case 1:
    console.log(" Today is " + " Monday");
    break;
  case 2:
    console.log(" Today is " + " Tuesday");
    break;
  case 3:
    console.log(" Today is " + " Wednesday");
    break;
  case 4:
    console.log(" Today is " + " Thursday");
    break;
  case 5:
    console.log(" Today is " + " Friday");
    break;
  case 6:
    console.log(" Today is " + " Saturday");
    break;
  case 7:
    console.log(" Today is " + " Sunday");
    break;
  default:
    console.log("What planet are you from?");
}


/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

 var timeOfYear = 13;

switch (timeOfYear) {
  case 1:
    console.log(" Now is " + "winter");
    break;
  case 2:
    console.log(" Now is " + "winter");
    break;
  case 3:
    console.log(" Now is " + "spring");
    break;
  case 4:
    console.log(" Now is " + "spring");
    break;
  case 5:
    console.log(" Now is " + "spring");
    break;
  case 6:
    console.log(" Now is " + "summer");
    break;
  case 7:
    console.log(" Now is " + "summer");
    break;
  case 8:
    console.log(" Now is " + "summer");
    break;
  case 9:
    console.log(" Now is " + "autumn");
    break;
  case 10:
    console.log(" Now is " + "autumn");
    break;
  case 11:
    console.log(" Now is " + "autumn");
      break;
  case 12:
    console.log(" Now is " + "winter");
    break;
  default:
    console.log("How many months in your year guy?");
}

 
 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */


var browser = 'Opera';

 if (browser === 'Edge') {
   console.log("You've got the Edge!");
 } else if (browser === 'Chrome') {
   console.log("This is the best browser!");
 } else if (browser === 'Safari') {
   console.log('We are not support this browser!');
 } else if (browser === 'Opera') {
  console.log('Okay we support these browsers too');
 } else {
  console.log('We hope that this page looks ok!');
 }


/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

var age = 15;

switch (true) {
  case age < 16:
    console.log(" We cant hire u!");
    break;
  case age >= 18:
    console.log("U can take full time job");
    break;
  case age == 16 || age == 17:
    console.log("U can take part time job");
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/

var username = 'Administrator';
var password = 'Master';

username === 'Administrator' && password === 'Master' ? console.log("Welcome!") : 
username === 'Administrator' && password === '' ? console.log("Canceled!"):
username === 'Administrator' && password !== 'Master' ? console.log("Wrong password!"):
username === null || username === '' ? console.log("Canceled!") : console.log("I don't know you!");
