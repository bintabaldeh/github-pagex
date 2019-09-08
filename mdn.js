const imageElement = document.getElementById("image1")
const buttonElement1 = document.getElementById("changeImage1")
const buttonElement2 = document.getElementById("changeImage2")
function butttonElement1Click() {
  imageElement.src="https://www.gstatic.com/webp/gallery3/1.sm.png"
}
buttonElement1.addEventListener("click", butttonElement1Click);
function buttonElementClick() {
  imageElement.src="https://www.gstatic.com/webp/gallery/4.sm.jpg"
}
buttonElement2.addEventListener("click", buttonElementClick);  
