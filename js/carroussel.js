const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

console.log(right);
function displaySlides() {
  
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slides[currentSlide].style.display = "block";
}


displaySlides();

rightBtn.addEventListener("click", () => {
  
  currentSlide = (currentSlide + 1) % slides.length;
  displaySlides();
});
console.log(slides.length)
console.log(rightBtn)

leftBtn.addEventListener("click", () => {
  
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  displaySlides();
});

console.log(slides.length)
console.log(left)