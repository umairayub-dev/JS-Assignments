// Assignemnt 11/12 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a character")
if (!isNaN(char)) {
    alert(char + " is a number")
}else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    alert(char + " is an uppercase letter")
}else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
    alert(char + " is a lowercase letter")
}else {
    alert(char + " is not a number or letter")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var number1 = parseInt(prompt("Enter first number"))
var number2 = parseInt(prompt("Enter second number"))

if (number1 > number2) {
    alert("first number, " + number1 + " is larger")
}else if (number2 > number1) {
    alert("second number, " + number2 + " is larger")
}else {
    alert("the two integers are equal")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var n = +prompt("Enter a number")
if (n > 0) {
    alert(n + " is a positive number")
}else if (n < 0) {
    alert(n + " is a negative number")
}else {
    alert("is not a number")
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter a Character:").toLowerCase()

if (char === "a" ||char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
    alert(char.toUpperCase() + " is a vowel")
}else {
    alert(char.toUpperCase() + " is not a vowel")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
var password = "09876"
var enteredPassword = prompt("Please enter your password")
if (!enteredPassword) {
    enteredPassword = prompt("Please enter your password")
}else if (enteredPassword === password) {
    alert("Correct, the password you entered matches the orignal")
}else {
    alert("Incorrect Password")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Please enter the time in 24H format (e.g. 1PM = 1300")
if (time >= 0000 && time < 1200) {
    alert("Good Morning")
}else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}else if (time >= 1700 && time <2100) {
    alert("Good Evening")
}else if (time >= 2100 && time <= 2359){
    alert("Good Night")
}
