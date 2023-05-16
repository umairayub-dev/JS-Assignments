// Assignemnt 05 Math Expressions

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser
var num1 = 10
var num2 = 90
var result = num1 + num2

document.write("<br> Sum of " + num1 + " and " + num2 + " is " + result)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 100
var num2 = 10
var result = num1 - num2

document.write("<br>" + num1 + " - " + num2 + " is " + result)

var num1 = 2
var num2 = 10
var result = num1 * num2

document.write("<br>" + num1 + " * " + num2 + " is " + result)

var num1 = 100
var num2 = 2
var result = num1 / num2

document.write("<br>" + num1 + " / " + num2 + " is " + result)

var num1 = 100
var num2 = 30
var result = num1 % num2

document.write("<br>" + num1 + " % " + num2 + " is " + result)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”

var num3
document.write("<br><br><br> value after variable declaration is " + num3)
num3 = 10
document.write("<br> <br> Initial value is " + num3)
num3++
document.write("<br> <br> value after increment is " + num3)
num3 += 7
document.write("<br> <br> value after addition is " + num3)
num3--
document.write("<br> <br> value after decrement is " + num3)
num3 = num3 % 3
document.write("<br> <br> the remainder is " + num3)


// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie
var ticketPrice = 600
var numberOfPeople = 5
document.write("<br><br><br>Total cost of " + numberOfPeople +  " tickets to a movie is " + ticketPrice * numberOfPeople)

// 5. Write a script to display multiplication table of any number in your browser.
document.write("<br><br><h3>Multiplication Table of 11</h3>")
for (let index = 1; index <= 10; index++) {
    document.write("<br>11x"+ index + " = " + 11*index)
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
document.write("<br><br><h3>Temperature Converter</h3>")
var tempInC = 32
var tempInF = (tempInC * 9 / 5) + 32
document.write(tempInC +"C is " + tempInF.toFixed(2) + "F <br><br>")

tempInF = 110
tempInC = (tempInF - 32) * 5 / 9
document.write(tempInF +"F is " + tempInC.toFixed(2) + "C")


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<br><br><br><h2>Shopping Card</h2>")
document.write("<br><h3>Checkout</h3>")
var priceOfItem1 = 200
var priceOfItem2 = 500
var orderedQuantityOfItem1 = 4
var orderedQuantityOfItem2 = 2
var shippingCharges = 180

document.write("<br> Price of Item 01 is " + priceOfItem1)
document.write("<br> Quantity of Item 01 is " + orderedQuantityOfItem1)
document.write("<br> Price of Item 02 is " + priceOfItem2)
document.write("<br> Quantity of Item 02 is " + orderedQuantityOfItem2)
document.write("<br> Shipping Charges " + shippingCharges)
var total = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges
document.write("<br><br>Total cost of your order is " + total)


// 8. Store total marks & marks obtained by a student in 2 variables.
// Compute the percentage & show the result in your browser
document.write("<br><br><h3>Marks Sheet</h3>")

var totalMarks = 980
var marksObtained = 804

var percentage = (marksObtained / totalMarks) * 100

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br><br><h3>Currency</h3>")
document.write("<br><br><h3>arithmetic</h3>")

var usd = 10
var riyals = 25
var totalInPkr = (usd * 104.80) + (riyals * 28)
document.write("Total Amount in PKR:" + totalInPkr)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<br><br><h3>Arithmetic</h3>")
var numberX = 10
var result = ((numberX + 5) * 10) / 2;
alert(result)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<br><br><h3>Age Calculator</h3>")
var currentYear = new Date().getFullYear()
var birthYear = 2001
var age = currentYear - birthYear
var age2 = age - 1 // Birthday may not have happend yet
document.write("<br> Current Year: " + currentYear)
document.write("<br> Birth Year: " + birthYear)
document.write("<br> Age is either " + age + " or " + age2)

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<br><br><h3>The Geometrizer</h3>")
var radius = 20
var circumference = 2 * 3.142 * 20
var area =  3.142 * radius ** 2
document.write("<br> Radius of a circle is " + radius)
document.write("<br> The Circumference is " + circumference)
document.write("<br> The Area is " + area)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
document.write("<br><br><h3>The Lifetime Supply</h3>")
var snack = "cocomo"
var age = 21
var maxAge = 70
var amount_per_day  = 2
var years_remaining = maxAge - age
var days_remaining = years_remaining * 365 
var total_snacks_needed = days_remaining * amount_per_day
document.write("<br> Favorite snack: " + snack)
document.write("<br> Current Age ")
document.write("<br> The Area is " + area)
document.write("You will need " + total_snacks_needed + " to last you until the ripe old age of" + maxAge)

