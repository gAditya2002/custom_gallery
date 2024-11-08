const images = Array.from(document.querySelectorAll(".car-image"));
const images_container = document.querySelector(".images")
const popUp = document.querySelector(".pop-up");
const popUpImage = popUp.querySelector("img");
const main_class = document.querySelector(".wrapper")
const active = document.querySelector(".active")
const cross = document.querySelector('.cross');
const right_swip_image = document.querySelector(".rightSwip");
const left_swipe_image = document.querySelector(".leftSwip")
let index_of_image;
let  clickedImage ;

function handleClick(event) {
  clickedImage = event.target;
  index_of_image = images.indexOf(clickedImage);
  popUpImage.src= clickedImage.src;
  popUp.style.display = "flex";
  active.classList.remove("active");
  cross.classList.remove("active");
}



cross.addEventListener("click", () => {
  console.log("Cross is clicked");
  cross.classList.add("active");
  active.classList.add("active");
});

right_swip_image.addEventListener("click", () => {
  index_of_image = (index_of_image + 1) % images.length;
  clickedImage = images[index_of_image];
  popUpImage.src = clickedImage.src;
  console.log("Right clicked, showing next image:", clickedImage);
});


left_swipe_image.addEventListener("click", ()=>{
  index_of_image = (index_of_image +1) %images.length;
  clickedImage = images[index_of_image];
  popUpImage.src = clickedImage.src;
  console.log("clicked on the left button")

})
