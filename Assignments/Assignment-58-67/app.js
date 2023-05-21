// Assignment # 58-67 DOM

// 1.
// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element. (Instructions unclear, where do i display the elements? in console?)
console.log(mainContent);

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renders = document.querySelectorAll(".render")
for (var index = 0; index < renders.length; index++) {
  var element = renders[index];
  document.write("<br>" + element.innerHTML)
}
// iv. Fill input value whose element id first-name using javascript.
var firstName = document.getElementById("first-name")
firstName.value = "Umair"
// v. Repeat part iv for id ”last-name” and “email”.
var lastName = document.getElementById("last-name")
lastName.value = "Ayub"
var email = document.getElementById("email")
email.value = "example@example.com"

// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content")
document.write("<br><br>Type of #Form-Content: " + formContent.nodeType)

// ii. Show node type of element having id “lastName” and its child node.
var lastName = document.getElementById("lastName")
document.write("<br><br>Type of #lastName: " + lastName.nodeType)
document.write("<br><br>Type of #lastName childNode: " + lastName.childNodes[0].nodeType)

// iii. Update child node of element having id “lastName”.
lastName.childNodes[0].nodeValue = "Last Name: Joe"

// iv. Get First and last child of id “main-content”.
var mainContent = document.getElementById("main-content")
var firstChild = mainContent.firstChild
var lastChild = mainContent.lastChild
console.log(firstChild, lastChild);

// v. Get next and previous siblings of id “lastName”.
var previousSibling = lastName.previousSibling
var nextSibling = lastName.nextSibling
console.log(previousSibling, nextSibling)
// vi. Get parent node and node type of element having id “email”
var email = document.getElementById("email")
var emailParent = email.parentNode
console.log(emailParent, emailParent.nodeType)