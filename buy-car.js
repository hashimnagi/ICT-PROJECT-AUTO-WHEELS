// ========== Footer Year ==========
document.getElementById("year-buy")?.append(new Date().getFullYear());

// ========== Hamburger Toggle ==========
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

// ========== Fade-in Animation for Cars ==========
const carCards = document.querySelectorAll(".car-card");

carCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.7s ease";
});

const revealOnScroll = () => {
  carCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
