import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
function setActiveButton(button) {
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}
// Load Home by default
loadHome();
setActiveButton(homeBtn);

homeBtn.addEventListener("click", () => {
  loadHome();
  setActiveButton(homeBtn);
});
menuBtn.addEventListener("click", () => {
  loadMenu();
  setActiveButton(menuBtn);
});
contactBtn.addEventListener("click", () => {
  loadContact();
  setActiveButton(contactBtn);
});
