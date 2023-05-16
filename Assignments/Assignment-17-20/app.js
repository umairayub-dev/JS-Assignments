// Assignemnt 17/20 Arrays and loops

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var arra = [[], []]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// 0 1 2 3
// 0 1 2 1
// 2 1 0 1

var my_matrix = [
    [0, 1, 2, 3],
    [0, 1, 2, 1],
    [2, 1, 0, 1]
]

// 3. Write a program to print numeric counting from 1 to 10.
for (var index = 1; index <= 10; index++) {
    document.write("<br>" + index)
}
document.write("<hr>")

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be taken as an input from user.
var tableNumber = +prompt("Enter a number to see its multiplication table")
var tableLength = +prompt("Enter the length of multiplication table")

document.write("Multiplication Table of " + tableNumber)
document.write("<br>Length " + tableLength)
for (var index = 1; index <= tableLength; index++) {
    var element = tableNumber * index;
    document.write("<br>" + tableNumber + "x" + index + "=" + element)
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

document.write("<hr>")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var index = 0; index < fruits.length; index++) {
    var element = fruits[index];
    console.log(element)
    document.write("<br>" + element)
}
for (var index = 0; index < fruits.length; index++) {
    var element = fruits[index];
    document.write("<br>Element at index " + index + " is " + element)
}

document.write("<hr>")

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// 6.a
var countingArr = [];
for(var i = 1; i <= 15; i++) {
  countingArr.push(i);
}
document.write("<br><br> Counting: <br><br>" + countingArr)

// 6.b
var reverseCountingArr = [];
for (var i = 10; i >= 1; i--) {
  reverseCountingArr.push(i);
}
document.write("<br><br> Reverse Counting: <br><br>" + reverseCountingArr)

// 6.c
var evenArr = [];
for (var i = 0; i <= 20; i += 2) {
  evenArr.push(i);
}
document.write("<br><br> Even: <br><br>" + evenArr)

// 6.d
var oddArr = [];
for (var i = 1; i <= 19; i += 2) {
  oddArr.push(i);
}
document.write("<br><br> Odd: <br><br>" + evenArr)

// 6.e
var seriesArr = [];
for (var i = 2; i <= 20; i += 2) {
  seriesArr.push(i + "k");
}
document.write("<br><br> Series: <br><br>" + seriesArr)


document.write("<hr>")

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery, what do you want to order?");
var foundItem = "";
var itemIndex = -1;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    foundItem = A[i];
    itemIndex = i;
    break;
  }
}

if (itemIndex !== -1) {
  alert(foundItem + " is available at index " + itemIndex + " in our bakery.");
} else {
  alert("We are Sorry, " + userInput + " is not available in our bakery.");
}

document.write("<hr>")

// 8. Write a program to identify the largest number in the
// given array. A = [24, 53, 78, 91, 12].
var numbers = [24, 53, 78, 91, 12]
var largestNumber = numbers[0]

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largestNumber) {
        largestNumber = numbers[index]
    }
}

document.write("<br> Array Numbers: " + numbers)
document.write("<br> Largest Number: " + largestNumber)

document.write("<hr>")

// 9. Write a program to identify the smallest number in the
// given array. A = [24, 53, 78, 91, 12]

var smallestNumber = numbers[0]

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index]
    }
}

document.write("<br> Array Numbers: " + numbers)
document.write("<br> Smallest Number: " + smallestNumber)

document.write("<hr>")

// 10. Write a program to print multiples of 5 ranging 1 to 100.
var multiplesOfFive = []
for (let index = 1; index <= 20; index++) {
    multiplesOfFive.push(5 * index)
}
document.write("<br> " +multiplesOfFive)