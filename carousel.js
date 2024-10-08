const carouselContainer = document.querySelector(".carousel-container");

document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const dotsContainer = document.querySelector(".carousel-dots");
  const cardWidth =
    document.querySelector(".recommendation-card").offsetWidth + 24;
  const maxScrollLeft =
    carouselContainer.scrollWidth - carouselContainer.clientWidth;
  const totalDotsRequired = Math.ceil(maxScrollLeft / (cardWidth * 3)) + 1;

  for (let i = 0; i < totalDotsRequired; i++) {
    const dot = document.createElement("span");
    if (i === 0) {
      dot.classList.add("active");
    }
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      const scrollPosition = i * cardWidth * 3;
      carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  }
});

carouselContainer.addEventListener("scroll", () => {
  const dots = document.querySelectorAll(".carousel-dots .dot");
  const scrollLeft = carouselContainer.scrollLeft;
  const cardWidth =
    document.querySelector(".recommendation-card").offsetWidth + 24; // Adjust for gap
  const currentIndex = Math.round(scrollLeft / (cardWidth * 3));

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideNavbar = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
  sideNavbar.style.display = "flex";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  sideNavbar.classList.add("slide-out");
  setTimeout(() => {
    sideNavbar.style.display = "none";
    sideNavbar.classList.remove("slide-out");
    overlay.style.display = "none";
  }, 200);
});

document
  .getElementById("close-side-menu")
  .addEventListener("click", () => closeSideMenu());

function closeSideMenu() {
  sideNavbar.classList.add("slide-out");
  setTimeout(() => {
    sideNavbar.style.display = "none";
    sideNavbar.classList.remove("slide-out");
    overlay.style.display = "none";
  }, 200);
}
