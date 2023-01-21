const toggleNav = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav__list");

toggleNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggleNav.classList.toggle("toggle");
  nav.classList.toggle("slide-in-left");
});
