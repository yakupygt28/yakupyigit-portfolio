// Dil verisi
const translations = {
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_greeting: "Merhaba,<br>Ben <span class='highlight'>Yakup Yiğit</span>",
    hero_subtitle: "💻 Bilgisayar Mühendisi",
    hero_btn: "🚀 Projelerime Göz At",
    about_title: "✨ Hakkımda",
    about_text: "Ben Yakup YİĞİT, Giresun’un Şebinkarahisar ilçesinde doğup büyüdüm. Liseye kadar eğitimimi burada tamamladıktan sonra, Tokat Gaziosmanpaşa Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimimi aldım. Yazılım geliştirme, mobil programlama ve yeni teknolojilere duyduğum ilgi ile farklı alanlarda projeler geliştirmekteyim. Web geliştirme, yapay zeka, oyun geliştirme ve mobil uygulama geliştirme konularında araştırmalar yaparak kendimi sürekli geliştirmeyi hedefliyorum. Gerçek dünyadaki problemlere yenilikçi çözümler üretmek en büyük motivasyonum. İlgi alanlarım; Web Geliştirme, Yapay Zeka, Oyun Geliştirme ve Mobil Uygulama geliştirme.",
    skills_js: "⚡ JavaScript",
    skills_java: "☕ Java",
    skills_csharp: "⚛️ C#",
    skills_python: "🔧 Python",
    skills_flutter: "🐳 Flutter",
    skills_htmlcss: "📐 HTML, CSS",
    contact_title: "📩 İletişim",
    contact_text: "Bana ulaşmak için <a href='mailto:yakupyigitff@gmail.com'>yakupyigitff@gmail.com</a>",
    footer_text: "© 2025 Yakup Yiğit | Tüm Hakları Saklıdır"
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_greeting: "Hello,<br>I am <span class='highlight'>Yakup Yiğit</span>",
    hero_subtitle: "💻 Computer Engineer",
    hero_btn: "🚀 View My Projects",
    about_title: "✨ About Me",
    about_text: "I am Yakup YİĞİT, born and raised in Giresun's Şebinkarahisar district. After completing high school there, I pursued a degree in Computer Engineering at Tokat Gaziosmanpaşa University. I develop projects in various fields, motivated by my interest in software development, mobile programming, and new technologies. I aim to continuously improve myself through research in web development, artificial intelligence, game development, and mobile applications. Creating innovative solutions to real-world problems is my greatest motivation. My interests include Web Development, Artificial Intelligence, Game Development, and Mobile App Development.",
    skills_js: "⚡ JavaScript",
    skills_java: "☕ Java",
    skills_csharp: "⚛️ C#",
    skills_python: "🔧 Python",
    skills_flutter: "🐳 Flutter",
    skills_htmlcss: "📐 HTML, CSS",
    contact_title: "📩 Contact",
    contact_text: "You can reach me at <a href='mailto:yakupyigitff@gmail.com'>yakupyigitff@gmail.com</a>",
    footer_text: "© 2025 Yakup Yiğit | All Rights Reserved"
  }
};

// Butonlar
const trBtn = document.getElementById("trBtn");
const enBtn = document.getElementById("enBtn");

function setLanguage(lang) {
  if(!translations[lang]) return;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.getElementById("heroGreeting").innerHTML = translations[lang].hero_greeting;
  document.getElementById("heroSubtitle").innerHTML = translations[lang].hero_subtitle;
  document.getElementById("heroBtn").innerHTML = translations[lang].hero_btn;
  document.getElementById("aboutTitle").innerHTML = translations[lang].about_title;
  document.getElementById("aboutText").innerHTML = translations[lang].about_text;
  document.getElementById("skills_js").innerHTML = translations[lang].skills_js;
  document.getElementById("skills_java").innerHTML = translations[lang].skills_java;
  document.getElementById("skills_csharp").innerHTML = translations[lang].skills_csharp;
  document.getElementById("skills_python").innerHTML = translations[lang].skills_python;
  document.getElementById("skills_flutter").innerHTML = translations[lang].skills_flutter;
  document.getElementById("skills_htmlcss").innerHTML = translations[lang].skills_htmlcss;
  document.getElementById("contactTitle").innerHTML = translations[lang].contact_title;
  document.getElementById("contactText").innerHTML = translations[lang].contact_text;
  document.querySelector("footer p").innerHTML = translations[lang].footer_text;

  trBtn.classList.toggle("active", lang === "tr");
  enBtn.classList.toggle("active", lang === "en");
}

// Eventler
trBtn.addEventListener("click", () => setLanguage("tr"));
enBtn.addEventListener("click", () => setLanguage("en"));

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => setLanguage("tr"));

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Modal Galeri
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImage");
const modalThumbnails = document.getElementById("modalThumbnails");
let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    currentImages = img.parentElement.getAttribute("data-images").split(",");
    currentIndex = 0;
    openModal();
  });
});

function openModal() {
  modal.style.display = "block";
  modalImg.src = currentImages[currentIndex];
  renderThumbnails();
}

function renderThumbnails() {
  modalThumbnails.innerHTML = "";
  currentImages.forEach((src, idx) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.addEventListener("click", () => { currentIndex = idx; modalImg.src = currentImages[currentIndex]; });
    modalThumbnails.appendChild(thumb);
  });
}

modal.querySelector(".close").addEventListener("click", () => { modal.style.display = "none"; });
modal.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});
modal.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});
