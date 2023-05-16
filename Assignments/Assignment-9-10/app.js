// // Assignemnt 09/10 USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var city = prompt("Please enter your city name")
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Please enter your gender")
if (gender.toLowerCase() === "male") {
    alert("Good Morning, Sir")
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning, Ma'am")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt("Please enter traffic signal color")
switch (color.toLowerCase()) {
    case "red":
        alert("Must stop")
        break;
    case "yellow":
        alert("Ready to move")
        break;
    case "green":
        alert("Move now")
        break;
    default:
       alert("unexpected input")
        break;
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var remainingFuel = +prompt("How much fuel does your car have? (in litres)")
if (remainingFuel <= 0.25) {
    alert("Please refill fuel in your car")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//5.a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Resulted in alert with message "given condition for variable is true"

//5.b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Resulted in no alert message, meaning the condition for variable b is false

//5.c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Resulted in 2 alert message, "condition 2 is true" and "condition 4 is true"

// 5.d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//Resulted in a alert message, "The cost equals"

// 5.e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// the alert message "True" will be displayed becasue the condition (true) is always true
// The second if statement (if (false)) will not be executed because it is an else statement of the previous if statement and it does not have a condition to check.

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Resulted in a alert message, "car is smaller than cat" because in Javascript when "<" is used to compare two strings the comparison is done character by character based on the unicode values of the character

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var subject1Marks = +prompt("Please enter marks obtained in Subject 1:")
var subject2Marks = +prompt("Please enter marks obtained in Subject 2:")
var subject3Marks = +prompt("Please enter marks obtained in Subject 3:")
var totalMarks = +prompt("Please enter total marks")

var totalMarksObtained = subject1Marks + subject2Marks + subject3Marks
var percentage = (totalMarksObtained / totalMarks) * 100

var grade
var remarks
if (percentage >= 80) {
    grade = "A-one"
    remarks = "Excellent"
} else if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
} else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
} else if (percentage < 60) {
    grade = "Fail"
    remarks = "Sorry"
}

document.write("<br><br><h1>Marks sheet</h1>")
document.write("<br><br>Total Marks: " + totalMarks)
document.write("<br><br>Marks Obtained: " + totalMarksObtained)
document.write("<br><br>Percentage: " + percentage + "%")
document.write("<br><br>Grade: " + grade)
document.write("<br><br>Remarks: " + remarks)

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secretNumber = 8
var guess = +prompt("Guess the secret number (between 1 and 10):")

if (guess === secretNumber) {
    alert("Bingo! Correct Answer")
} else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
    alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is divisible by 3.

var num = +prompt("Enter a number")

if (num % 3 === 0) {
    alert(num + " is divisible by 3")
}else {
    alert(num + " is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var num = +prompt("Enter a number")

if (num % 2 === 0) {
    alert(num + " is even")
}else {
    alert(num + " is odd")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = +prompt("Enter the temperature:")
if (temp > 40) {
   alert("It is too hot outside.");
} else if (temp > 30) {
   alert("The weather today is normal.");
} else if (temp > 20) {
   alert("Today's weather is cool.");
} else {
   alert("OMG! Today's weather is so cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var n1 = +prompt("Enter the first number")
var n2 = +prompt("Enter the second number")
var op = prompt("Enter the operation (+,-,*,/,%")

if (op == "+") {
    result = n1 + n2
    alert("result: " + result)
} else if (op == "-") {
    result = n1 - n2
    alert("result: " + result)
}else if (op == "*") {
    result = n1 * n2
    alert("result: " + result)
}else if (op == "/") {
    result = n1 / n2
    alert("result: " + result)
}else if (op == "%") {
    result = n1 % n2
    alert("result: " + result)
}else {
    alert("Error: Invalid operation")
}

