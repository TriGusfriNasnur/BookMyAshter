document.querySelectorAll(".icons-bawah a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".icons-bawah a.active").classList.remove("active");
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
});
