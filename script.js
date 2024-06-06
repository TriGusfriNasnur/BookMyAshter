// Navbar Bottom
document.querySelectorAll(".icons-bawah a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".icons-bawah a.active").classList.remove("active");
    this.classList.add("active");
  });
});

// Slide Image
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlides() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
      const video = slide.querySelector("video");
      if (video) {
        video.currentTime = 0; // Reset video to start
        video.play(); // Play the video
      }
    } else {
      slide.style.display = "none";
      const video = slide.querySelector("video");
      if (video) {
        video.pause(); // Pause the video if it's not active slide
      }
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlides();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlides();
}

let slideInterval = setInterval(nextSlide, 9000); // Auto slide every 3 seconds

// Add touch event listeners for swipe navigation
let startX;
const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", (event) => {
  if (!startX) {
    return;
  }
  let currentX = event.touches[0].clientX;
  let diffX = startX - currentX;

  // Swipe threshold
  if (Math.abs(diffX) > 50) {
    clearInterval(slideInterval);
    if (diffX > 0) {
      nextSlide(); // Swipe left
    } else {
      prevSlide(); // Swipe right
    }
    slideInterval = setInterval(nextSlide, 3000);
    startX = null; // Reset startX
  }
});

slider.addEventListener("touchend", () => {
  startX = null; // Reset startX
});

showSlides(); // Show the first slide initially

// Slide Image
const slideIndicators = document.querySelector(".slide-indicators"); // Pilih elemen ul.slide-indicators

function createSlideIndicators() {
  slides.forEach((slide, index) => {
    const indicator = document.createElement("li"); // Buat elemen li untuk setiap indikator
    indicator.classList.add("slide-indicator"); // Tambahkan kelas slide-indicator ke setiap indikator
    indicator.addEventListener("click", () => {
      slideIndex = index; // Atur slideIndex saat indikator diklik
      showSlides();
    });
    slideIndicators.appendChild(indicator); // Tambahkan indikator ke dalam ul.slide-indicators
  });
}

createSlideIndicators(); // Panggil fungsi untuk membuat indikator slide

function showSlides() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
      const video = slide.querySelector("video");
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    } else {
      slide.style.display = "none";
      const video = slide.querySelector("video");
      if (video) {
        video.pause();
      }
    }
  });

  // Tandai indikator slide yang sedang aktif
  const indicators = document.querySelectorAll(".slide-indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === slideIndex);
  });
}
