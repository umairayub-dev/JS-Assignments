// Assignemnt 13/15 Arrays

// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentNames1 = new Array();

// 3. Declare and initialize a strings array.
var fruits = ["new", "strings", "array"];

// 4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var boolArray = [true, false, true];

// 6. Declare and initialize a mixed array.
var mixedArray = ["apple", 2, true, "orange", false, 5];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

document.write("<br><h1>Qualifications:</h1>")
for (let index = 0; index < qualifications.length; index++) {
    document.write("<br>" + (index + 1) + ") " + qualifications[index])
}

document.write("<hr>")

// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students:
var students = ["Jon", "Michael", "Tony"]
var studentScores = [320, 230, 480]
var totalMarks = 500
for (let index = 0; index < students.length; index++) {
    var studenti = students[index]
    var studentScorei = studentScores[index]
    var percentage = (studentScorei / totalMarks) * 100
    document.write("<br>Score of " + studenti + " is " + studentScorei + ". Percentage: " + percentage + "%")

}
document.write("<hr>")

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.
// Display the updated array in your browser.
document.write('<a href="colors.html">09.Colors</a>')

document.write("<hr>")

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var scores = [420, 320, 180, 105, 201];
document.write("<br>Scores of Students: " + scores)
scores.sort()
document.write("<br>Ordered Scores of Students: " + scores)


document.write("<hr>")

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Turbat", "Peshawar", "Multan"]
var selectedCities = cities.slice(0, 3)
document.write("<br>City list: " + cities)
document.write("<br>Selected Cities: " + selectedCities)


document.write("<hr>")

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
document.write("<br>Array: " + arr)
document.write("<br>String: " + arr.join(" "))


document.write("<hr>")

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var arr = ["keyboard", "mouse","printer", "moniter"]
document.write("<br>Devices: " + arr + "<br>")

document.write("<br>Out:<br>"+ arr.shift())
document.write("<br>Out:<br>"+ arr.shift())
document.write("<br>Out:<br>"+ arr.shift())
document.write("<br>Out:<br>"+ arr.shift())

document.write("<hr>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var arr = ["keyboard", "mouse","printer", "moniter"]
document.write("<br>Devices: " + arr + "<br>")

document.write("<br>Out:<br>"+ arr.pop())
document.write("<br>Out:<br>"+ arr.pop())
document.write("<br>Out:<br>"+ arr.pop())
document.write("<br>Out:<br>"+ arr.pop())


document.write("<hr>")

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var mobile_manu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
var options
for (let index = 0; index < mobile_manu.length; index++) {
    const element = mobile_manu[index];
    options += "<option value'" + element + "'>" + element + "</option>"
}
document.write("<Select>"+ options + "</Select>")