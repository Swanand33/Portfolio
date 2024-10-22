//===== NAVBAR TOGGLE =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

//===== ACTIVE LINK =====
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

//===== SCROLL HEADER =====
const header = document.getElementById("header");

const scrollHeader = () => {
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

//===== DYNAMIC TYPING =====
const roles = ["an Engineer", "a Data Analyst", "an AI Enthusiast", "a Pythonist"];
let index = 0;
let roleIndex = 0;
const typingSpeed = 200; // Speed of typing
const erasingSpeed = 100; // Speed of erasing
const pauseTime = 1000; // Pause after typing

const typeRole = () => {
  const currentRole = roles[index];
  if (roleIndex < currentRole.length) {
    document.getElementById("dynamic-role").textContent += currentRole.charAt(roleIndex);
    roleIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, pauseTime);
  }
};

const eraseRole = () => {
  const currentRole = roles[index];
  if (roleIndex > 0) {
    document.getElementById("dynamic-role").textContent = currentRole.substring(0, roleIndex - 1);
    roleIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    index = (index + 1) % roles.length; // Move to the next role
    setTimeout(typeRole, typingSpeed + 1100); // Start typing the next role
  }
};

// Start typing animation on load
window.onload = () => {
  typeRole();
};
