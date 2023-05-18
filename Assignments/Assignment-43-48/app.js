// Assignment # 43-48 Events

// 1. Show an alert box on click on a link.

var link = document.getElementById("myLink");

link.addEventListener("click", function() {
  alert("You clicked the link!");
});


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
var images = document.getElementsByClassName("mobile-image");

for (let index = 0; index < images.length; index++) {
  images[index].addEventListener("click", function() {
    console.log("he;;op")
    alert("Thanks for purchasing a phone from us");
  })
}

