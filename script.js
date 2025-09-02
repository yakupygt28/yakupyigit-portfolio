// Navbar scroll efekti
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = "rgba(15, 15, 35, 0.95)";
});

// Hamburger menü
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Butona shake animasyonu
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.classList.add("shake");
  setTimeout(() => btn.classList.remove("shake"), 500);
});

// Modal galeri
const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const modalThumbnails = document.getElementById("modalThumbnails");
const closeBtn = document.querySelector(".close");
let currentIndex = 0;
let currentImages = [];

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    currentImages = card.getAttribute("data-images").split(",");
    currentIndex = 0;
    modalImage.src = currentImages[currentIndex];
    modal.style.display = "block";

    // Thumbnail yenile
    modalThumbnails.innerHTML = "";
    currentImages.forEach((src, i) => {
      let thumb = document.createElement("img");
      thumb.src = src;
      thumb.addEventListener("click", () => {
        currentIndex = i;
        modalImage.src = src;
      });
      modalThumbnails.appendChild(thumb);
    });
  });
});

// Ok butonları
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
});

// Klavye yön tuşları
window.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") prevBtn.click();
    else if (e.key === "ArrowRight") nextBtn.click();
    else if (e.key === "Escape") modal.style.display = "none";
  }
});

// Modal kapatma (çarpıya basınca)
closeBtn.addEventListener("click", () => { modal.style.display = "none"; });

// Modal dışına tıklayınca kapatma
window.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
});
