let titles = document.getElementsByClassName("carousel-title");
let contents = document.getElementsByClassName("carousel-content");

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", function () {
    let panel = contents[i];
    if (!this.classList.contains("active")) {
      this.classList.add("active");
      panel.classList.add("active");
      setTimeout(() => {
        panel.style.position = "relative";
      }, 500);
      for (let i = 0; i < contents.length; i++) {
        if (titles[i] !== this) {
          titles[i].classList.remove("active");
          contents[i].classList.remove("active");
          setTimeout(() => {
            contents[i].style.position = "absolute";
          }, 500);
        }
      }
    }
  });
}
