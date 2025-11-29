// ========== Footer Year ==========
document.getElementById("year-services")?.append(new Date().getFullYear());


// ========== Redirect Each Service Card to Its Page ==========
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;

    // redirect to detail pages
    window.location.href = `${target}.html`;
  });
});


// ========== Smooth Fade-in Animation ==========
const cards = document.querySelectorAll(".service-card");

const revealOnScroll = () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

// initial state
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
