let activeIndex = 0;
const slides = document.getElementsByClassName("slide");
function changeSlide(slideIndex) {
  slides[activeIndex].classList.remove("active");
  activeIndex += slideIndex;
  if (activeIndex === slides.length) {
    activeIndex = 0;
  } else if (activeIndex < 0) {
    activeIndex = slides.length - 1;
  }
  setTimeout(() => slides[activeIndex].classList.add("active"), 500);
}
