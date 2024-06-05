// Navbar Bottom
document.querySelectorAll(".icons-bawah a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".icons-bawah a.active").classList.remove("active");
    this.classList.add("active");
  });
});

// Slide Image
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlides() {
  slides.style.transform = "translateX(-${slideIndex * 100}%)";
  slideIndex = (slideIndex + 1) % totalSlides;
}

showSlides(); // Show the first slide initially
setInterval(showSlides, 3000); // Change slide every 3 seconds
