const images = document.querySelectorAll(".image");
const modal = document.getElementById("imagePreviewModal");
const slider = document.querySelector('.image-slider');
const caption = document.querySelector(".image-caption");
const dotsContainer = document.querySelector(".dots");
const closeButton = document.querySelector(".close-button");
const left_swipe_image = document.querySelector(".leftSift");
const right_swipe_image = document.querySelector(".rightSift");
let currentIndex = 0;



if (closeButton) {
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
}

function toggleArrowsVisibility() {
    if (currentIndex === 0) {
        left_swipe_image.classList.add("disabled");
    } else {
        left_swipe_image.classList.remove("disabled");
    }

    if (currentIndex === images.length - 1) {
        right_swipe_image.classList.add("disabled");
    } else {
        right_swipe_image.classList.remove("disabled");
    }
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

right_swipe_image.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex += 1;
        updateSliderPosition();
        updateDots();
        updateCaption();
        toggleArrowsVisibility();
    }
});


left_swipe_image.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSliderPosition();
        updateDots();
        updateCaption();
        toggleArrowsVisibility();
    }
});

slider.innerHTML = '';
images.forEach((img, index) => {
    const imgElement = `<img src="${img.src}" class="slider-image" alt="Image ${index + 1}">`;
    slider.innerHTML += imgElement;
});

function updateSliderPosition() {
    slider.style.transform = `translateX(${currentIndex * -100}%)`;
}

function updateDots() {
    dotsContainer.innerHTML = '';
    images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentIndex) dot.classList.add("active");
        dot.dataset.index = i;
        dot.title = `Image ${i + 1}`;
        dotsContainer.appendChild(dot);
    });
}

function popupImage(index) {
    currentIndex = index;
    modal.style.display = "block";
    updateSliderPosition();
    updateDots();
    updateCaption();
    toggleArrowsVisibility();
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => popupImage(i));
}


dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        currentIndex = parseInt(e.target.dataset.index);
        updateSliderPosition();
        updateDots();
        updateCaption();
        toggleArrowsVisibility();
    }
});








