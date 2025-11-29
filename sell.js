// ========== Footer Year ==========
document.getElementById("year-sell")?.append(new Date().getFullYear());

// ========== Hamburger Toggle ==========
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

// ========== Form Submission Alert ==========
const form = document.querySelector(".sell-form form");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("Your car listing has been submitted successfully!");
  form.reset();
});
