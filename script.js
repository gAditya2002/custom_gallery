console.log("Custom gallery app");

const popUp = document.querySelector(".pop-up");
const images = document.querySelectorAll(".images img");



function handleClick(event) {
  const clickedImage = event.target;
  console.log("Image is clicked", clickedImage.src);


  popUp.style.backgroundImage = `url('${clickedImage.src}')`;

  // const storedImage = clickedImage.src;
  console.log(popUp.style)
  
  popUp.classList.add("custom-size");


 
}


