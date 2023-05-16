// Assignemnt 06 Math Expressions

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your
// browser:
var a = 10
document.write("<br>Result: <br> The value of a is:" + a)
document.write("<br> - - - - - - - - - - - - - - - - - - - - - - <br>")

document.write("<br>The value of ++a is:" + ++a)
document.write("<br>Now the value of a is:" + a)

document.write("<br><br>The value of a++ is:" + a++)
document.write("<br>Now the value of a is:" + a)

document.write("<br><br>The value of --a is:" + --a)
document.write("<br>Now the value of a is:" + a)

document.write("<br><br>The value of a-- is:" + a--)
document.write("<br>Now the value of a is:" + a)

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1
var result = --a - --b + ++b + b--
// explaination


// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Please enter your Name", "User")
document.write("<br><br>Welcome, " + userName)

// 4
// Blank

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var num = +prompt("Please enter a number to see its multiplication table")
document.write("<br><br><h2>Multiplication Table</h2>")
if (num === 0 || num === undefined || num === null) {
    for (var index = 1; index <= 10; index++) {
        document.write("<br>5x" + index + " = " + 5 * index)
    }
} else {
    for (var index = 1; index <= 10; index++) {
        document.write("<br>" + num + "x" + index + " = " + num * index)
    }
}

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<br><br> <h2>Marks sheet</h2>")
var subj1 = prompt("Enter subject 1 name")
var subj2 = prompt("Enter subject 2 name")
var subj3 = prompt("Enter subject 3 name")

var totalMarksForEachSubject = 100

var obtainedMarks1 = +prompt("Enter Marks for " + subj1)
var obtainedMarks2 = +prompt("Enter Marks for " + subj2)
var obtainedMarks3 = +prompt("Enter Marks for " + subj3)

var percentage1 = (obtainedMarks1 / totalMarksForEachSubject) * 100
var percentage2 = (obtainedMarks2 / totalMarksForEachSubject) * 100
var percentage3 = (obtainedMarks3 / totalMarksForEachSubject) * 100

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3
var percentage = (totalObtainedMarks / (totalMarksForEachSubject * 3)) * 100

var table = "<table>" +
    "<tr>" +
    "<th>Subject</th>" +
    "<th>Total Marks</th>" +
    "<th>Obtained Marks</th>" +
    "<th>Percentage</th>" +
    "</tr>"

table += "<tr>" +
    "<td>" + subj1 + "</td>" +
    "<td>" + totalMarksForEachSubject + "</td>" +
    "<td>" + obtainedMarks1 + "</td>" +
    "<td>" + percentage1 + "%</td>" +
    "</tr>"
table += "<tr>" +
    "<td>" + subj2 + "</td>" +
    "<td>" + totalMarksForEachSubject + "</td>" +
    "<td>" + obtainedMarks2 + "</td>" +
    "<td>" + percentage2 + "%</td>" +
    "</tr>"
table += "<tr>" +
    "<td>" + subj3 + "</td>" +
    "<td>" + totalMarksForEachSubject + "</td>" +
    "<td>" + obtainedMarks3 + "</td>" +
    "<td>" + percentage3 + "%</td>" +
    "</tr>"

table += "<tr>" +
    "<td>Total</td>" +
    "<td>" + totalMarksForEachSubject * 3 + "</td>" +
    "<td>" + totalObtainedMarks + "</td>" +
    "<td>" + percentage.toFixed(2) + "%</td>" +
    "</tr></table>"

console.log(table)
document.write(table)

// 7. Blank