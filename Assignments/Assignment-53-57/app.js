// Assignment # 53-57 Events

// 1. Modal with Images
var images = document.getElementsByClassName("image");
var modal = document.getElementById("modal")
var modalImage = document.getElementById("modalImage")
var closeModal = document.getElementsByClassName("close")

for (var index = 0; index < images.length; index++) {
  var image = images[index];
  image.addEventListener("click", function(){
    modalImage.src = this.src
    modal.style.display = "block"
  })
}

closeModal.addEventListener("click", function() {
  modalImage.src = ""
  modal.style.display = "none"
})

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
var paragraph = document.querySelector(".para")
var btnPlus = document.getElementById("btnPlus")
var btnMinus = document.getElementById("btnMinus")
var fontSize = 20
paragraph.style.fontSize = fontSize + 'px';

function fontPlus() {
  fontSize += 10
  paragraph.style.fontSize = fontSize + 'px'
}
function fontMinus() {
  fontSize -= 10
  paragraph.style.fontSize = fontSize + 'px'
}
btnPlus.addEventListener("click", fontPlus)
btnMinus.addEventListener("click", fontMinus)