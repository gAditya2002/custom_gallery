const images = Array.from(document.querySelectorAll(".car-image"));
const images_container = document.querySelector(".images");
const popUp = document.querySelector(".pop-up");
const popUpImage = popUp.querySelector("img");
const active = document.querySelector(".active");
const opacity = document.querySelector(".op");
const cross = document.querySelector('.cross');
const right_swip_image = document.querySelector(".rightSwip");
const left_swipe_image = document.querySelector(".leftSwip");
const clickDots = Array.from(document.querySelectorAll(".dot"));

let index_of_image = 0;
let clickedImage;

function handleClick(event) {
  clickedImage = event.target;
  index_of_image = images.indexOf(clickedImage);
  popUpImage.src = clickedImage.src;
  popUp.style.display = "flex";
  active.classList.remove("active");
  cross.classList.remove("active");
  opacity.style.opacity = 0.5;
  // updateDots();
}

function closePopUp() {
  cross.classList.add("active");
  active.classList.add("active");
  opacity.style.opacity = 1;
  popUp.style.display = "none";
}

cross.addEventListener("click", closePopUp);

right_swip_image.addEventListener("click", () => {
  index_of_image = (index_of_image + 1) % images.length;
  changeImageWithSlide('right');
});

left_swipe_image.addEventListener("click", () => {
  index_of_image = (index_of_image - 1 + images.length) % images.length;
  changeImageWithSlide('left');
});

clickDots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    index_of_image = clickDots.indexOf(e.target);
    changeImageWithSlide();
  });
});

function updateDots() {
  clickDots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === index_of_image) {
      dot.classList.add("active");
    }
  });
}

// function changeImageWithSlide(direction = '') {
//   popUpImage.classList.add(`slide-${direction}`);
//   const newImage = images[index_of_image];
//   popUpImage.src = newImage.src;
//   popUpImage.classList.remove(`slide-${direction}`);
// }

function changeImageWithSlide(direction = '') {
  const newImage = images[index_of_image];
  popUpImage.classList.add(`slide-${direction}`);
  setTimeout(() => {
    popUpImage.src = newImage.src;
    popUpImage.classList.remove(`slide-${direction}`);
  }, 500);
}


images.forEach(image => {
  image.addEventListener("click", handleClick);
});
