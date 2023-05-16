// Assignemnt 35-38 Functions

// 1. Write a function that displays current date & time in your browser.
function showDateAndTime () {
  var timeAndDate = new Date()
  document.write("<br> current Time and Date: " + timeAndDate)
}
showDateAndTime()
document.write("<hr>")

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function greetUser(firstName,lastName) {
  alert("Welcome " + firstName.concat(" ", lastName))
}

greetUser("John", "Doe")

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function sum() {
  var n1 = +prompt("Please enter first number")
  var n2 = +prompt("Please enter second number")

  return n1 + n2
}

alert(sum())

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculate(num1, num2, operator) {
  var result

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    case '%':
      result = num1 % num2
      break
    default:
      return "Invalid operator"
  }

  document.write("<p>The result of " + num1 + " " + operator + " " + num2 + " is: " + result + "</p>")

  return result
}

calculate(5, 3, '+')

document.write("<hr>")

// 5. Write a function that squares its argument.
function square(num) {
  return num * num
}

document.write("<br> 2 Squared is " + square(2))

document.write("<hr>")

// 6. Write a function that computes factorial of a number.
function factorial(num) {
  if (num < 0 || Number.isInteger(num) === false) {
    return "Invalid input. Factorial is defined for non-negative integers."
  }

  if (num === 0) {
    return 1
  }

  return num * factorial(num - 1)
}

var number = 5
var result = factorial(number)
document.write("The factorial of " + number + " is: " + result)
